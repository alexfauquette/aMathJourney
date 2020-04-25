import React from "react"
import Board from "src/components/tic-tac-toe/atoms/Board"
import Game from "src/components/tic-tac-toe/explanations/utils/game"
import { perfectPlayer } from "src/components/tic-tac-toe/explanations/utils"

import human from "../../images/human.svg"
import robot from "../../images/robot.svg"

import translate from "../../translation"

const game = new Game()

const DELAY = 500
class PlayableIntro extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      grid: ".........",
      currentPlayer: 0,
      robot: [0],
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
            ...this.state,
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
          ...this.state,
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

  setRobotRole(playerId) {
    if (this.state.robot[0] !== playerId) {
      clearTimeout(this.waitingAction)
      this.setState(
        {
          ...this.state,
          grid: ".........",
          currentPlayer: 0,
          robot: [playerId],
        },
        () => {
          this.waitingAction = setTimeout(() => {
            this.play(this)
          }, DELAY)
        }
      )
    }
  }
  render() {
    const translation = translate[this.props.lang || "en"]
    return (
      <div>
        <svg viewBox="0 0 200 200" style={{ height: "300px", width: "300px" }}>
          <Board
            width={200}
            height={200}
            state={this.state.grid}
            transform="translate(0,0)"
            localAction={this.playerAction()}
            winner={game.getWinner(this.state.grid)}
            victory={game.getVictory(this.state.grid)}
          />
        </svg>
        <div className="settings">
          <div className="horizontal-selection">
            <p>{translation.first_player}</p>
            <div
              className={`button-left ${
                this.state.robot[0] === 0 ? "selected" : "unselected"
              }`}
              onClick={() => this.setRobotRole(0)}
            >
              <img src={robot} alt="robot-icon" />
            </div>
            <div
              className={`button-right ${
                this.state.robot[0] !== 0 ? "selected" : "unselected"
              }`}
              onClick={() => this.setRobotRole(1)}
            >
              <img src={human} alt="human-icon" />
            </div>
          </div>
          <div className="horizontal-selection">
            <button onClick={this.reset()}>{translation.reset}</button>
          </div>
        </div>{" "}
      </div>
    )
  }
}
export default PlayableIntro
