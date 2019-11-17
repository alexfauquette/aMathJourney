import React from "react"
import Board from "src/components/tic-tac-toe/atoms/Board"
import Game from "src/components/tic-tac-toe/explenations/utils/game"
import Link from "src/components/tic-tac-toe/atoms/Link"

const game = new Game()

class History extends React.Component {
  constructor(props) {
    super(props)
    this.init = [".........", "......X..", "...O..X.."]
    this.initActions = [6, 3]
    this.state = {
      grids: this.init,
      actions: this.initActions,
    }
  }

  playerAction(index) {
    return action => () => {
      let grids = this.state.grids.slice(0, index + 1)
      let actions = this.state.actions.slice(0, index)

      grids.push(game.play(this.state.grids[index], action))
      actions.push(action)
      this.setState({ grids, actions })
    }
  }

  reset() {
    return () => {
      this.setState({
        grids: this.init,
        actions: this.initActions,
      })
    }
  }

  render() {
    return (
      <>
        <svg viewBox="0 0 1000 100" style={{ height: "100px", width: "100%" }}>
          {this.state.grids.map((grid, gridIndex) => (
            <React.Fragment key={gridIndex}>
              <Board
                width={75}
                height={75}
                state={grid}
                transform={`translate(${gridIndex * 100},12)`}
                localAction={
                  !game.isFinished(grid) && this.playerAction(gridIndex)
                }
                winner={game.getWinner(grid)}
                victory={game.getVictory(grid)}
                addedIndex={gridIndex > 0 && this.state.actions[gridIndex - 1]}
              />
              {gridIndex > 0 && (
                <Link
                  x0={gridIndex * 100 - 2}
                  y0={12 + 75 / 2}
                  x1={(gridIndex - 1) * 100 + 75 + 2}
                  y1={12 + 75 / 2}
                />
              )}
            </React.Fragment>
          ))}
        </svg>
        <button onClick={this.reset()}>RESET</button>
      </>
    )
  }
}
export default History
