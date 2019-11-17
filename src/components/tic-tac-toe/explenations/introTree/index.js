import React from "react"
import Board from "src/components/tic-tac-toe/atoms/Board"
import Game from "src/components/tic-tac-toe/explenations/utils/game"
import Link from "src/components/tic-tac-toe/atoms/Link"
import { treeToPosition } from "src/components/tic-tac-toe/explenations/utils"

const game = new Game()

class IntroTree extends React.Component {
  constructor(props) {
    super(props)
    this.init = {
      "": { grid: ".........", childrenActions: [0] },
      "0": { grid: "X........", childrenActions: [3] },
      "03": { grid: "X..O.....", childrenActions: [8, 4] },
      "038": { grid: "X..O....X", childrenActions: [4] },
      "0384": { grid: "X..OO...X", childrenActions: [5] },
      "03845": { grid: "X..OOX..X", childrenActions: [2] },
      "038452": { grid: "X.OOOX..X", childrenActions: [6] },
      "0384526": { grid: "X.OOOXX.X", childrenActions: [7] },
      "03845267": { grid: "X.OOOXXOX", childrenActions: [1] },
      "038452671": { grid: "XXOOOXXOX", childrenActions: [] },
      "034": { grid: "X..OX....", childrenActions: [8] },
      "0348": { grid: "X..OX...O", childrenActions: [1] },
      "03481": { grid: "XX.OX...O", childrenActions: [2] },
      "034812": { grid: "XXOOX...O", childrenActions: [7] },
      "0348127": { grid: "XXOOX..XO", childrenActions: [] },
    }
    this.state = {
      tree: this.init,
      height: 2,
      heightLimited: false,
    }
  }

  playerAction(id, currentBoar) {
    return action => () => {
      const nextBoard = game.play(currentBoar, action)
      const newId = id + action

      const newHeight =
        this.state.tree[id].childrenActions.length === 0
          ? this.state.height
          : this.state.height + 1

      if (!this.state.tree[id].childrenActions.includes(action)) {
        this.setState({
          tree: {
            ...this.state.tree,
            [id]: {
              grid: currentBoar,
              childrenActions: [...this.state.tree[id].childrenActions, action],
            },
            [newId]: { grid: nextBoard, childrenActions: [] },
          },
          height: newHeight,
        })
      }
    }
  }

  reset() {
    return () => {
      this.setState({
        tree: this.init,
        height: 2,
      })
    }
  }

  render() {
    const SIZE = 75
    return (
      <>
        <div
          className={this.state.heightLimited ? "limit-height" : "free-height"}
        >
          <svg
            viewBox={`0 0 1000 ${100 * this.state.height}`}
            style={{ width: "100%" }}
          >
            {treeToPosition(this.state.tree).map(grid => (
              <React.Fragment key={grid.id}>
                <Board
                  width={SIZE}
                  height={SIZE}
                  state={grid.grid}
                  transform={`translate(${12 + grid.x * 100},${12 +
                    grid.y * 100})`}
                  localAction={
                    !game.isFinished(grid.grid) &&
                    this.playerAction(grid.id, grid.grid)
                  }
                  winner={game.getWinner(grid.grid)}
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
        <button onClick={this.reset()}>RESET</button>
      </>
    )
  }
}
export default IntroTree
