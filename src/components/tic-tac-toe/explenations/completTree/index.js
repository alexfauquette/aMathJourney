import React from "react"
import Board from "src/components/tic-tac-toe/atoms/Board"
import Game from "src/components/tic-tac-toe/explenations/utils/game"
import Link from "src/components/tic-tac-toe/atoms/Link"
import {
  treeToPosition,
  feelSolutions,
  reduceToOpimalTree,
} from "src/components/tic-tac-toe/explenations/utils"

const game = new Game()

class CompletTree extends React.Component {
  constructor(props) {
    super(props)

    let treeRobot = {}

    feelSolutions(treeRobot, ".........", 0, props.robot)

    let optTreeRobot = {}
    reduceToOpimalTree(treeRobot, optTreeRobot, "", ".........", 0, props.robot)
    this.state = {
      robot: props.robot,
      tree: optTreeRobot,
      initialTree: optTreeRobot,
      height: optTreeRobot[""].timeToWin,
      heightLimited: true,
    }
  }

  toogleChildrens(id) {
    return () => () => {
      this.setState({
        tree: {
          ...this.state.tree,
          [id]: {
            ...this.state.tree[id],
            retracted: !this.state.tree[id].retracted,
          },
        },
      })
    }
  }

  reset() {
    return () => {
      this.setState({
        ...this.state,
        tree: this.state.initialTree,
      })
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
    const SIZE = 75
    const treePositions = treeToPosition(this.state.tree)
    const height = treePositions.reduce((t, x) => Math.max(t, x.y), 0)
    return (
      <>
        <div
          className={this.state.heightLimited ? "limit-height" : "free-height"}
        >
          <svg
            viewBox={`0 0 1000 ${100 * (height + 1)}`}
            style={{ width: "100%" }}
          >
            {treePositions.map(state => (
              <React.Fragment key={state.id}>
                <Board
                  width={SIZE}
                  height={SIZE}
                  state={state.grid}
                  transform={`translate(${12 + state.x * 100},${12 +
                    state.y * 100})`}
                  globalAction={this.toogleChildrens(state.id)}
                  winner={state.winner}
                  victory={game.getVictory(state.grid)}
                  addedIndex={
                    state.id && parseInt(state.id.charAt(state.id.length - 1))
                  }
                />
                {state.parent && (
                  <Link
                    x0={14 + state.parent[0] * 100 + SIZE}
                    y0={12 + state.parent[1] * 100 + SIZE / 2}
                    x1={10 + state.x * 100}
                    y1={12 + state.y * 100 + SIZE / 2}
                  />
                )}
              </React.Fragment>
            ))}
          </svg>
        </div>
        {100 * (height + 1) > 500 && (
          <button
            onClick={this.toogleHeightLimited()}
            className="treeExtension"
          >
            {this.state.heightLimited ? "Extend" : "Retract"}
          </button>
        )}
        <button onClick={this.reset()}>RESET</button>
      </>
    )
  }
}
export default CompletTree
