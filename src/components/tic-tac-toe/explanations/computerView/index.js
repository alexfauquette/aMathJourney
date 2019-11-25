import React from "react"
import Board from "../recurrence/node_modules/src/components/tic-tac-toe/atoms/Board"
import Game from "../recurrence/node_modules/src/components/tic-tac-toe/explanations/utils/game"
import { completTree as tree } from "../recurrence/node_modules/src/components/tic-tac-toe/explanations/utils"

import { perfectPlayer } from "../recurrence/node_modules/src/components/tic-tac-toe/explanations/utils"

import human from "../../images/human.svg"
import robot from "../../images/robot.svg"

const game = new Game()
const DELAY = 2000

class PlayableComputerView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      grid: ".........",
      solution: tree["........."].ends,
      currentPlayer: 0,
      robot: [1],
      firstPlayer: 0,
      showRobot: true,
      showHuman: false,
    }
    this.clickable = true

    this.waitingAction = null

    this.robotChoice = this.props.robotChoice
      ? this.props.robotChoice
      : perfectPlayer
  }

  componentDidMount() {
    this.play(this)
  }

  play(contxt) {
    let action
    let newGrid
    if (
      contxt.state.robot.includes(contxt.state.currentPlayer) &&
      !game.isFinished(contxt.state.grid)
    ) {
      action = contxt.robotChoice(contxt.state.grid)
      newGrid = game.play(contxt.state.grid, action)
      contxt.waitingAction = setTimeout(() => {
        contxt.setState(
          {
            solution: tree[newGrid].ends,
            grid: newGrid,
            currentPlayer: game.getPlayerID(newGrid),
          },
          () => {
            contxt.play(contxt)
          }
        )
      }, DELAY)
    } else {
      this.clickable = true
    }
  }
  playerAction() {
    if (
      !game.isFinished(this.state.grid) &&
      !this.state.robot.includes(this.state.currentPlayer)
    ) {
      return action => {
        return this.state.robot.includes(this.state.currentPlayer)
          ? () => null
          : () => {
              if (this.clickable) {
                const newGrid = game.play(this.state.grid, action)
                this.setState(
                  {
                    solution: tree[newGrid].ends,
                    grid: newGrid,
                    currentPlayer: game.getPlayerID(newGrid),
                  },
                  () => {
                    this.play(this)
                  }
                )
              }
            }
      }
    } else {
      return null
    }
  }

  reset() {
    return () => {
      clearTimeout(this.waitingAction)
      this.setState(
        {
          solution: tree["........."].ends,
          grid: ".........",
          currentPlayer: 0,
        },
        () => {
          this.waitingAction = setTimeout(() => {
            this.play(this)
          }, DELAY)
        }
      )
    }
  }

  toogleVisibility(who) {
    return () => {
      // eslint-disable-next-line default-case
      switch (who) {
        case "robot":
          this.setState({ showRobot: !this.state.showRobot })
          break
        case "human":
          this.setState({ showHuman: !this.state.showHuman })
          break
      }
    }
  }

  addRobot(playerId) {
    return () => {
      if (!this.state.robot.includes(playerId)) {
        clearTimeout(this.waitingAction)
        this.setState(
          {
            solution: tree["........."].ends,
            grid: ".........",
            currentPlayer: 0,
            robot: [...this.state.robot, playerId],
          },
          () => {
            this.waitingAction = setTimeout(() => {
              this.play(this)
            }, DELAY)
          }
        )
      }
    }
  }
  removeRobot(playerId) {
    return () => {
      if (this.state.robot.includes(playerId)) {
        clearTimeout(this.waitingAction)
        this.setState(
          {
            solution: tree["........."].ends,
            grid: ".........",
            currentPlayer: 0,
            robot: this.state.robot.filter(robotId => robotId !== playerId),
          },
          () => {
            this.waitingAction = setTimeout(() => {
              this.play(this)
            }, DELAY)
          }
        )
      }
    }
  }

  render() {
    return (
      <>
        <svg viewBox="0 0 200 200" style={{ height: "300px", width: "300px" }}>
          <Board
            width={200}
            height={200}
            state={this.state.grid}
            transform="translate(0,0)"
            localAction={this.playerAction()}
            winner={game.getWinner(this.state.grid)}
            solution={
              ((this.state.showRobot &&
                this.state.robot.includes(this.state.currentPlayer)) ||
                (this.state.showHuman &&
                  !this.state.robot.includes(this.state.currentPlayer))) &&
              this.state.solution
            }
            victory={game.getVictory(this.state.grid)}
          />
        </svg>
        <div className="settings">
          <div className="horizontal-selection">
            <p>First player : </p>
            <div
              className={`button-left ${
                this.state.robot.includes(0) ? "selected" : "unselected"
              }`}
              onClick={this.addRobot(0)}
            >
              <img src={robot} alt="robot-icon" />
            </div>
            <div
              className={`button-right ${
                !this.state.robot.includes(0) ? "selected" : "unselected"
              }`}
              onClick={this.removeRobot(0)}
            >
              <img src={human} alt="human-icon" />
            </div>
          </div>

          <div className="horizontal-selection">
            <p>Second player : </p>
            <div
              className={`button-left ${
                this.state.robot.includes(1) ? "selected" : "unselected"
              }`}
              onClick={this.addRobot(1)}
            >
              <img src={robot} alt="robot-icon" />
            </div>
            <div
              className={`button-right ${
                !this.state.robot.includes(1) ? "selected" : "unselected"
              }`}
              onClick={this.removeRobot(1)}
            >
              <img src={human} alt="human-icon" />
            </div>
          </div>

          <div className="horizontal-selection">
            <p>Show solutions for : </p>
            <div
              className={`button-left ${
                this.state.showRobot
                  ? "selected selected-selectable"
                  : "unselected"
              }`}
              onClick={this.toogleVisibility("robot")}
            >
              <img src={robot} alt="robot-icon" />
            </div>
            <div
              className={`button-right ${
                this.state.showHuman
                  ? "selected selected-selectable"
                  : "unselected"
              }`}
              onClick={this.toogleVisibility("human")}
            >
              <img src={human} alt="human-icon" />
            </div>
          </div>

          <div className="horizontal-selection">
            <button onClick={this.reset()}>RESET</button>
          </div>
        </div>
      </>
    )
  }
}
export default PlayableComputerView
