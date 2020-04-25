import React from "react"
import Board from "src/components/tic-tac-toe/atoms/Board"
import Game from "src/components/tic-tac-toe/explanations/utils/game"
import Link from "src/components/tic-tac-toe/atoms/Link"
import { treeToPosition } from "src/components/tic-tac-toe/explanations/utils"

import translate from "../../translation"

const game = new Game()

class TreeSearch extends React.Component {
  constructor(props) {
    super(props)
    this.init = {
      "": { grid: ".........", childrenActions: [], isSelected: true },
    }
    this.state = {
      tree: this.init,
      height: 1,
      algoState: 0,
      stateId: "",
      heightLimited: true,
    }
  }

  next() {
    return () => {
      let currentId
      let actions
      let actionIndex
      let parentId
      // eslint-disable-next-line default-case
      switch (this.state.algoState) {
        case 0:
          const grid = this.state.tree[this.state.stateId].grid
          currentId = this.state.stateId
          if (game.isFinished(grid)) {
            const winner = game.getWinner(grid)
            const nextAlgoState = 2
            this.setState({
              ...this.state,
              tree: {
                ...this.state.tree,
                [currentId]: {
                  ...this.state.tree[currentId],
                  isSelected: false,
                  winner: winner,
                },
              },
              algoState: nextAlgoState,
            })
          } else {
            const actions = game.actions(grid)
            const toAdd = {}
            actions.forEach(action => {
              toAdd[currentId + action] = {
                grid: game.play(grid, action),
                childrenActions: [],
              }
            })

            this.setState({
              ...this.state,
              tree: {
                ...this.state.tree,
                [currentId]: {
                  ...this.state.tree[currentId],
                  childrenActions: actions,
                },
                ...toAdd,
              },
              algoState: 1,
              height: this.state.height + (actions.length - 1),
            })
          }
          break
        case 1:
          currentId = this.state.stateId
          actions = this.state.tree[currentId].childrenActions
          actionIndex = 0
          let newId
          while (actionIndex < actions.length) {
            newId = currentId + actions[actionIndex]
            if (this.state.tree[newId].winner === undefined) {
              actionIndex = actions.length
            }
            actionIndex++
          }

          this.setState({
            ...this.state,
            tree: {
              ...this.state.tree,
              [currentId]: { ...this.state.tree[currentId], isSelected: false },
              [newId]: { ...this.state.tree[newId], isSelected: true },
            },
            algoState: 0,
            stateId: newId,
          })

          break

        case 2:
          currentId = this.state.stateId
          if (currentId === "") {
            //end of the algorithm
            this.setState({
              ...this.state,
              tree: {
                ...this.state.tree,
                [currentId]: {
                  ...this.state.tree[currentId],
                  isSelected: false,
                },
              },
              algoState: 6,
            })
            break
          }
          parentId = currentId.slice(0, -1)
          actions = this.state.tree[parentId].childrenActions
          actionIndex = 0
          let childId
          let explorationIsOver = true
          let nextChildId
          while (actionIndex < actions.length) {
            childId = parentId + actions[actionIndex]
            if (this.state.tree[childId].winner === undefined) {
              explorationIsOver = false
              nextChildId = childId
              actionIndex = actions.length
            }
            actionIndex++
          }

          if (explorationIsOver) {
            this.setState({
              ...this.state,
              tree: {
                ...this.state.tree,
                [currentId]: {
                  ...this.state.tree[currentId],
                  isSelected: false,
                },
                [parentId]: { ...this.state.tree[parentId], isSelected: true },
              },
              algoState: 3,
              stateId: parentId,
            })
          } else {
            this.setState({
              ...this.state,
              tree: {
                ...this.state.tree,
                [currentId]: {
                  ...this.state.tree[currentId],
                  isSelected: false,
                },
                [parentId]: { ...this.state.tree[parentId], isSelected: true },
              },
              algoState: 5,
              stateId: nextChildId,
            })
          }

          break

        case 3:
          currentId = this.state.stateId
          let currentPlayer = game.getPlayer(this.state.tree[currentId].grid)
          let childrenWinner = this.state.tree[currentId].childrenActions.map(
            action => this.state.tree[currentId + action].winner
          )

          const winner = childrenWinner.includes(currentPlayer)
            ? currentPlayer
            : childrenWinner.includes(game.NULL)
            ? game.NULL
            : childrenWinner[0]

          this.setState({
            ...this.state,
            tree: {
              ...this.state.tree,
              [currentId]: { ...this.state.tree[currentId], winner: winner },
            },
            algoState: 4,
            childrenWinner: childrenWinner,
          })
          break

        case 4:
          currentId = this.state.stateId
          this.setState({
            ...this.state,
            tree: {
              ...this.state.tree,
              [currentId]: { ...this.state.tree[currentId], retracted: true },
            },
            algoState: 2,
            height:
              this.state.height -
              this.state.tree[currentId].childrenActions.length +
              1,
          })
          break

        case 5:
          currentId = this.state.stateId
          parentId = currentId.slice(0, -1)
          this.setState({
            ...this.state,
            tree: {
              ...this.state.tree,
              [currentId]: { ...this.state.tree[currentId], isSelected: true },
              [parentId]: { ...this.state.tree[parentId], isSelected: false },
            },
            algoState: 0,
          })
          break
      }
    }
  }

  traduction(translation) {
    switch (this.state.algoState) {
      case 0:
        return translation.case0
      case 1:
        return translation.case1

      case 2:
        return translation.case2

      case 3:
        return translation.case3

      case 4:
        const player = game.getPlayer(this.state.tree[this.state.stateId].grid)
        // const adversary = game.getAdversary(player);
        const childrenWinner = this.state.childrenWinner
        let [winning, nulle] = [
          childrenWinner.filter(x => x === player).length,
          // childrenWinner.filter(x => x === adversary).length,
          childrenWinner.filter(x => x === game.NULL).length,
        ]
        const computation =
          winning > 0
            ? `${translation.case4.winningIntro} ${
                winning > 1 ? translation.are : translation.is
              } ${winning} ${
                winning > 1
                  ? translation.case4.winnings
                  : translation.case4.winning
              }`
            : nulle > 0
            ? `${translation.case4.nullIntro} ${nulle} ${
                nulle > 1 ? translation.are : translation.is
              } ${nulle > 1 ? translation.case4.nulls : translation.case4.null}`
            : translation.case4.loosing
        return (
          <>
            <p>
              {translation.case4.intro}
              <span className={"player-" + player}>{player}</span>{" "}
              {`${translation.has} `}
              {childrenWinner.length} {translation.case4.possibleActions}
            </p>
            <p>{computation}</p>
          </>
        )

      case 5:
        return translation.case5

      case 6:
        return translation.case6

      default:
        break
    }
  }

  toogleHeightLimited() {
    return () => {
      this.setState({
        ...this.state,
        heightLimited: !this.state.heightLimited,
      })
    }
  }
  render() {
    const translation = translate[this.props.lang || "en"]

    const SIZE = 75
    const treePositions = treeToPosition(this.state.tree)
    const height = treePositions.reduce((t, x) => Math.max(t, x.y), 0)
    return (
      <div
        onKeyDown={event => {
          if (event.key === "ArrowRight") {
            this.next()()
          }
        }}
        tabIndex="0"
      >
        <button onClick={this.next()}>{translation.next}</button>

        <div
          className={`${
            this.state.heightLimited ? "limit-height" : "free-height"
          } robot-left`}
        >
          <svg
            viewBox={`0 0 1000 ${100 * (height + 1)}`}
            style={{ width: "100%" }}
          >
            {treePositions.map(grid => (
              <React.Fragment key={grid.id}>
                <Board
                  width={SIZE}
                  height={SIZE}
                  state={grid.grid}
                  transform={`translate(${12 + grid.x * 100},${12 +
                    grid.y * 100})`}
                  winner={grid.isSelected ? "selected" : grid.winner}
                  victory={game.getVictory(grid.grid)}
                  addedIndex={
                    grid.id && parseInt(grid.id.charAt(grid.id.length - 1))
                  }
                />
                {grid.parent && (
                  <Link
                    x0={14 + grid.parent[0] * 100 + SIZE}
                    y0={12 + grid.parent[1] * 100 + SIZE / 2}
                    x1={10 + grid.x * 100}
                    y1={12 + grid.y * 100 + SIZE / 2}
                  />
                )}
              </React.Fragment>
            ))}
          </svg>
        </div>
        <div
          style={{
            width: "30%",
            display: "inline-block",
            verticalAlign: "top",
          }}
          className="robot-speak"
        >
          <p>
            {this.traduction(translation)} <span className="cursor">O</span>
          </p>
        </div>
        {100 * (height + 1) > 500 && (
          <button
            onClick={this.toogleHeightLimited()}
            className="treeExtension"
          >
            {this.state.heightLimited
              ? translation.extend
              : translation.retract}
          </button>
        )}
      </div>
    )
  }
}
export default TreeSearch
