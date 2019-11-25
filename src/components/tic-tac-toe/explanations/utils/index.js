import Game from "./game"

const game = new Game()

// function getTree(state) {
//   //return a tree which conatins all possibilities
//   if (game.isFinished(state)) {
//     return { state: state, winner: game.getWinner(state) };
//   } else {
//     let PossibleActions = game.actions(state);
//     let output = { state: state };
//     let player = game.getPlayer(state);
//     let nulIsPossible = false;
//     let playerWin = false;
//     for (
//       let actionIndex = 0;
//       actionIndex < PossibleActions.length;
//       actionIndex++
//     ) {
//       let action = PossibleActions[actionIndex];
//       let subTree = getTree(game.play(state, action));
//       output[action] = subTree;
//       if (player === subTree["winner"]) {
//         playerWin = true;
//       }
//       if (subTree["winner"] === game.NULL) {
//         nulIsPossible = true;
//       }
//     }
//     if (playerWin) {
//       output["winner"] = player;
//     } else {
//       if (nulIsPossible) {
//         output["winner"] = game.NULL;
//       } else {
//         output["winner"] = game.getAdversary(player);
//       }
//     }
//     return output;
//   }
// }

// function getTreeEco(state) {
//   //return a tree which stop after findin an winnig acction for the cureent player
//   if (game.isFinished(state)) {
//     return { state: state, winner: game.getWinner(state) };
//   } else {
//     let PossibleActions = game.actions(state);
//     let output = { state: state };
//     let player = game.getPlayer(state);
//     let nulIsPossible = false;
//     let playerWin = false;
//     for (
//       let actionIndex = 0;
//       actionIndex < PossibleActions.length;
//       actionIndex++
//     ) {
//       let action = PossibleActions[actionIndex];
//       let subTree = getTree(game.play(state, action));
//       output[action] = subTree;
//       if (player === subTree["winner"]) {
//         playerWin = true;
//         output["winner"] = player;
//         return output;
//       }
//       if (subTree["winner"] === game.NULL) {
//         nulIsPossible = true;
//       }
//     }
//     if (playerWin) {
//       output["winner"] = player;
//     } else {
//       if (nulIsPossible) {
//         output["winner"] = game.NULL;
//       } else {
//         output["winner"] = game.getAdversary(player);
//       }
//     }
//     return output;
//   }
// }

function feelSolutions(solution, state, curentPlayer, robot) {
  // feel the object solution with
  // entry: a grid
  // output: the winer, how win after each action, and the number of leaf needed for the computation
  let winner
  let posibilities = []
  let player = game.PLAYERS[curentPlayer]
  let adversary = game.PLAYERS[(1 + curentPlayer) % 2]

  if (solution[state] === undefined) {
    solution[state] = {
      ends: state,
      curentPlayer: curentPlayer,
      winner: "",
      timeToWin: null,
    }
  }

  if (game.getWinner(state) !== game.UNKNOW) {
    winner = game.getWinner(state).toLowerCase()
    solution[state].winner = winner
    solution[state].timeToWin = 1
    solution[state].final = true
    return { winner: winner, timeToWin: 1 }
  }

  for (let action = 0; action < 9; action++) {
    if (solution[state].ends[action] === game.EMPTY) {
      //We don't know the issue of this action
      let newState =
        state.substring(0, action) + player + state.substring(action + 1)

      let winner
      let timeToWin
      let result
      if (
        solution[newState] !== undefined &&
        solution[newState].winner !== ""
      ) {
        //we already now the solution
        winner = solution[newState].winner
        timeToWin = solution[newState].timeToWin
      } else {
        result = feelSolutions(
          solution,
          newState,
          (curentPlayer + 1) % 2,
          robot
        )
        winner = result.winner
        timeToWin = result.timeToWin
      }

      //We know who will win if current player play this action
      solution[state].ends =
        solution[state].ends.substring(0, action) +
        winner +
        solution[state].ends.substring(action + 1)

      posibilities.push({ winner, timeToWin })
    }
  }

  let minTimeToWin
  if (posibilities.map(x => x.winner).includes(player.toLowerCase())) {
    minTimeToWin = Math.min(
      ...posibilities
        .map(x => (x.winner === player.toLowerCase() ? x.timeToWin : null))
        .filter(x => x !== null)
    )
    winner = player.toLowerCase()
  } else {
    if (posibilities.map(x => x.winner).includes(game.NULL)) {
      minTimeToWin = Math.min(
        ...posibilities
          .map(x => (x.winner === game.NULL ? x.timeToWin : null))
          .filter(x => x !== null)
      )
      winner = game.NULL
    } else {
      if (posibilities.map(x => x.winner).includes(adversary.toLowerCase())) {
        minTimeToWin = Math.min(
          ...posibilities
            .map(x =>
              x.winner === adversary.toLowerCase() ? x.timeToWin : null
            )
            .filter(x => x !== null)
        )
        winner = adversary.toLowerCase()
      }
    }
  }

  solution[state].winner = winner
  if (curentPlayer === robot) {
    solution[state].timeToWin = minTimeToWin
  } else {
    solution[state].timeToWin = posibilities
      .map(x => x.timeToWin)
      .reduce((total, x) => total + x)
  }
  return {
    winner: solution[state].winner,
    timeToWin: solution[state].timeToWin,
  }
}

// function opimalTree(tree, state, curentPlayer, robot, origineX, origineY) {
//   //return the minimal tree (in size) that prove robot will obtain at least a null match
//   if (tree[state].final) {
//     return [{ state, X: origineX, Y: origineY, winner: tree[state].winner }];
//   }
//   let player = game.PLAYERS[curentPlayer];

//   if (curentPlayer === robot) {
//     for (let action = 0; action < 9; action++) {
//       if (state[action] === ".") {
//         let newState =
//           state.substring(0, action) + player + state.substring(action + 1);
//         if (
//           tree[state].timeToWin === tree[newState].timeToWin &&
//           tree[state].winner === tree[newState].winner
//         ) {
//           return [
//             { state, X: origineX, Y: origineY, winner: tree[state].winner },
//             ...opimalTree(
//               tree,
//               newState,
//               (curentPlayer + 1) % 2,
//               robot,
//               origineX + 1,
//               origineY
//             )
//           ];
//         }
//       }
//     }
//   } else {
//     let output = [
//       { state, X: origineX, Y: origineY, winner: tree[state].winner }
//     ];
//     for (let action = 0; action < 9; action++) {
//       if (state[action] === ".") {
//         let newState =
//           state.substring(0, action) + player + state.substring(action + 1);
//         let subTree = opimalTree(
//           tree,
//           newState,
//           (curentPlayer + 1) % 2,
//           robot,
//           origineX + 1,
//           origineY
//         );
//         output = [...output, ...subTree];
//         origineY = subTree[subTree.length - 1].Y + 1;
//       }
//     }
//     return output;
//   }
// }

function treeToPosition(tree) {
  let height = 0
  let currentIndexList = []
  let currentActionsList = []
  let id = currentActionsList.join("")
  let currentState = tree[id]
  let goingBack = false

  let output = []
  output.push({
    ...currentState,
    x: currentActionsList.length,
    y: height,
    id: id,
  })

  let parent_position = [[0, 0]]
  if (currentState.childrenActions.length > 0) {
    currentIndexList.push(0)
    currentActionsList.push(currentState.childrenActions[0])
    currentState = tree[currentActionsList.join("")]
  }

  while (currentIndexList.length > 0) {
    currentActionsList = []
    for (let i = 0; i < currentIndexList.length; i++) {
      currentActionsList.push(
        tree[currentActionsList.join("")].childrenActions[currentIndexList[i]]
      )
    }
    let id = currentActionsList.join("")
    currentState = tree[id]

    if (!goingBack) {
      //en mode forward on affiche les noeuds
      output.push({
        ...currentState,
        x: currentActionsList.length,
        y: height,
        id: id,
        parent: parent_position[parent_position.length - 1],
      })
      parent_position.push([currentActionsList.length, height])

      if (currentState.childrenActions.length > 0) {
        //si il y a des fils, on y va
        currentIndexList.push(0)
      } else {
        //si non, on verifie la presence de voisins
        currentState = tree[currentActionsList.slice(0, -1).join("")]
        parent_position.pop()

        currentIndexList[currentIndexList.length - 1] =
          currentIndexList[currentIndexList.length - 1] + 1
      }
    } else {
      //en mode back, on considere
      currentState = tree[currentActionsList.slice(0, -1).join("")]

      parent_position.pop()

      currentIndexList[currentIndexList.length - 1] =
        currentIndexList[currentIndexList.length - 1] + 1
    }

    if (
      currentIndexList[currentIndexList.length - 1] >=
        currentState.childrenActions.length ||
      currentState.retracted
    ) {
      //si il n'y a plus d'enfant ou qu'on nous demande de ne pas les traiter
      currentIndexList.pop()
      goingBack = true
    } else {
      if (currentIndexList[currentIndexList.length - 1] !== 0) {
        height += 1
      }
      goingBack = false
    }
  }
  return output
}

function reduceToOpimalTree(tree, treeToFeel, id, grid, curentPlayer, robot) {
  //return the minimal tree (in size) that prove robot will obtain at least a null match
  if (game.isFinished(grid)) {
    treeToFeel[id] = {
      grid: grid,
      ends: grid,
      childrenActions: [],
      timeToWin: tree[grid].timeToWin,
      winner: tree[grid].winner,
    }
  } else {
    const actions = game.actions(grid)

    if (curentPlayer === robot) {
      let bestAction
      let newGrid
      let minimalTimeToWin = 1000000

      actions.forEach(action => {
        newGrid = game.play(grid, action)
        if (
          tree[newGrid].timeToWin < minimalTimeToWin &&
          tree[newGrid].winner === tree[grid].winner
        ) {
          minimalTimeToWin = tree[newGrid].timeToWin
          bestAction = action
        }
      })
      treeToFeel[id] = {
        grid: grid,
        ends: tree[grid].ends,
        childrenActions: [bestAction],
        timeToWin: tree[grid].timeToWin,
        winner: tree[grid].winner,
      }
      reduceToOpimalTree(
        tree,
        treeToFeel,
        id + bestAction,
        game.play(grid, bestAction),
        (curentPlayer + 1) % 2,
        robot
      )
    } else {
      treeToFeel[id] = {
        grid: grid,
        ends: tree[grid].ends,
        childrenActions: actions,
        timeToWin: tree[grid].timeToWin,
        winner: tree[grid].winner,
      }
      actions.forEach(action => {
        reduceToOpimalTree(
          tree,
          treeToFeel,
          id + action,
          game.play(grid, action),
          (curentPlayer + 1) % 2,
          robot
        )
      })
    }
  }
}

let completTree = {}
feelSolutions(completTree, ".........", 0, 2)

function perfectPlayer(state) {
  let solutions = completTree[state].ends
  let victory = completTree[state].winner
  let player = game.getPlayer(state)

  let actions = []
  if (victory === player.toLowerCase()) {
    let nextGrid
    let score
    let bestScore = 0
    for (let i = 0; i < 9; i++) {
      if (solutions[i] === victory) {
        nextGrid = completTree[game.play(state, i)].ends
        score = nextGrid.split("").filter(x => x === player.toLowerCase())
          .length
        if (score > bestScore) {
          actions = [i]
        } else if (score === bestScore) {
          actions.push(i)
        }
      }
    }
  } else if (victory === game.NULL) {
    for (let i = 0; i < 9; i++) {
      if (solutions[i] === game.NULL) {
        actions.push(i)
      }
    }
  } else {
    for (let i = 0; i < 9; i++) {
      if (state[i] === game.EMPTY) {
        actions.push(i)
      }
    }
  }

  let action = actions[Math.floor(actions.length * Math.random())]
  return action
}

export {
  completTree,
  perfectPlayer,
  treeToPosition,
  feelSolutions,
  reduceToOpimalTree,
}
