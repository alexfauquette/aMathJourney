import React from "react"
import Board from "src/components/tic-tac-toe/atoms/Board"
import Game from "src/components/tic-tac-toe/explanations/utils/game"
import Link from "src/components/tic-tac-toe/atoms/LinkVertical"
import { completTree as tree } from "src/components/tic-tac-toe/explanations/utils"
const game = new Game()

class RecurrenceExample extends React.Component {
  constructor(props) {
    super(props)
    this.gridsInit = ["...XXO.O.", "OX.X...O.", "X..X..OO."]
    this.childsInit = this.gridsInit.map(state =>
      game.actions(state).map(action => game.play(state, action))
    )

    this.state = {
      grids: this.gridsInit,
      childs: this.childsInit,
    }
  }

  playerAction(boardIndex, newGrid) {
    if (newGrid) {
      const children = game.isFinished(newGrid)
        ? []
        : game.actions(newGrid).map(action => game.play(newGrid, action))
      return () => () => {
        this.setState({
          grids: [
            ...this.state.grids.slice(0, boardIndex),
            newGrid,
            ...this.state.grids.slice(boardIndex + 1),
          ],
          childs: [
            ...this.state.childs.slice(0, boardIndex),
            children,
            ...this.state.childs.slice(boardIndex + 1),
          ],
        })
      }
    } else {
      return action => () => {
        const newGrid = game.play(this.state.grids[boardIndex], action)
        const children = game.isFinished(newGrid)
          ? []
          : game.actions(newGrid).map(action => game.play(newGrid, action))
        this.setState({
          grids: [
            ...this.state.grids.slice(0, boardIndex),
            newGrid,
            ...this.state.grids.slice(boardIndex + 1),
          ],
          childs: [
            ...this.state.childs.slice(0, boardIndex),
            children,
            ...this.state.childs.slice(boardIndex + 1),
          ],
        })
      }
    }
  }

  reset() {
    return () => {
      this.setState({
        grids: this.gridsInit,
        childs: this.childsInit,
      })
    }
  }

  render() {
    const maxChildren = Math.max(
      Math.max(this.state.childs[0].length, this.state.childs[1].length),
      this.state.childs[2].length
    )
    const totalWidth = 1000
    const paritalWidth = totalWidth / 3
    const maxWidth = 100
    const childWidth = Math.min(maxWidth, paritalWidth / (maxChildren + 3))

    return (
      <>
        <svg viewBox={`0 0 ${totalWidth} 300`} style={{ width: "100%" }}>
          {this.state.grids.map((grid, gridIndex) => (
            <React.Fragment key={gridIndex + "-" + grid}>
              <Board
                width={maxWidth}
                height={maxWidth}
                state={grid}
                transform={`translate(${(gridIndex + 0.5) * paritalWidth -
                  maxWidth / 2},10)`}
                localAction={
                  !game.isFinished(grid) && this.playerAction(gridIndex)
                }
                winner={tree[grid].winner}
                solution={tree[grid].ends}
                victory={game.getVictory(grid)}
              />
              {this.state.childs[gridIndex].map((childGrid, childIndex) => {
                const nbChildren = this.state.childs[gridIndex].length
                return (
                  <React.Fragment
                    key={
                      gridIndex +
                      "-" +
                      grid +
                      "-" +
                      childIndex +
                      "-" +
                      childGrid
                    }
                  >
                    <Board
                      width={childWidth}
                      height={childWidth}
                      state={childGrid}
                      transform={`translate(${
                        nbChildren === 1
                          ? (gridIndex + 0.5) * paritalWidth - childWidth / 2
                          : gridIndex * paritalWidth +
                            ((childIndex + 1) / (nbChildren + 1)) *
                              (paritalWidth - childWidth)
                      },200)`}
                      globalAction={this.playerAction(gridIndex, childGrid)}
                      winner={tree[childGrid].winner}
                      solution={tree[grid].ends}
                      victory={game.getVictory(childGrid)}
                    />
                    <Link
                      x0={(gridIndex + 0.5) * paritalWidth}
                      y0={10 + maxWidth}
                      x1={
                        nbChildren === 1
                          ? (gridIndex + 0.5) * paritalWidth
                          : gridIndex * paritalWidth +
                            ((childIndex + 1) / (nbChildren + 1)) *
                              (paritalWidth - childWidth) +
                            childWidth / 2
                      }
                      y1={200}
                    />
                  </React.Fragment>
                )
              })}
            </React.Fragment>
          ))}
        </svg>
        <button onClick={this.reset()}>RESET</button>
      </>
    )
  }
}
export default RecurrenceExample
