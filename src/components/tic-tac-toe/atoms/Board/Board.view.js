import React from "react"
import classes from "./Board.module.scss"

const Board = ({
  width,
  height,
  state,
  winner,
  solution,
  transform,
  localAction,
  globalAction,
  victory,
}) => (
  <g
    className={`${classes.board} ${classes.winner} ${
      globalAction ? classes.pointerClickable : ""
    }`}
    transform={transform}
    onClick={globalAction ? globalAction() : undefined}
  >
    <rect
      x={0}
      y={0}
      width={width}
      height={height}
      className={`${
        winner
          ? winner.toLowerCase() === "x"
            ? classes.winnerX
            : winner.toLowerCase() === "o"
            ? classes.winnerO
            : winner.toLowerCase() === "."
            ? classes.winnerUnKnoned
            : winner.toLowerCase() === "n"
            ? classes.winnerNull
            : winner.toLowerCase() === "n"
            ? classes.winnerSelected
            : ""
          : ""
      }`}

      // onClick={globalAction && globalAction()}
    />
    <g className={classes.elements}>
      {state.split("").map((player, index) => {
        let x = width / 6 + (Math.floor(index % 3) * width) / 3
        let y = height / 6 + (Math.floor(index / 3) * height) / 3

        switch (player) {
          case "X":
            return (
              <g key={index} className={classes.X}>
                <line
                  x1={x - (width * 0.4) / 3}
                  y1={y - (height * 0.4) / 3}
                  x2={x + (width * 0.4) / 3}
                  y2={y + (height * 0.4) / 3}
                />
                <line
                  x1={x + (width * 0.4) / 3}
                  y1={y - (height * 0.4) / 3}
                  x2={x - (width * 0.4) / 3}
                  y2={y + (height * 0.4) / 3}
                />
              </g>
            )
          case "O":
            return (
              <g key={index} className={classes.O}>
                <circle r={(Math.min(width, height) * 0.4) / 3} cx={x} cy={y} />
              </g>
            )

          default:
            return (
              <rect
                key={index}
                x={x - (width * 0.4) / 3}
                y={y - (height * 0.4) / 3}
                width={(width * 0.8) / 3}
                height={(height * 0.8) / 3}
                className={`${solution &&
                  (solution[index] === "x"
                    ? classes.solutionX
                    : solution[index] === "o"
                    ? classes.solutionO
                    : solution[index] === "."
                    ? classes.solutionUnKnoned
                    : solution[index] === "n"
                    ? classes.solutionNull
                    : solution[index] === "n"
                    ? classes.solutionSelected
                    : classes.empty)} ${
                  !solution && localAction ? classes.clickable : ""
                } `}
                onClick={localAction ? localAction(index) : undefined}
              />
            )
        }
      })}
    </g>
    <g className={classes.grid}>
      <line x1={(width * 1) / 3} y1="0" x2={(width * 1) / 3} y2={height} />
      <line x1={(width * 2) / 3} y1="0" x2={(width * 2) / 3} y2={height} />

      <line x1="0" y1={(height * 1) / 3} x2={width} y2={(height * 1) / 3} />
      <line x1="0" y1={(height * 2) / 3} x2={width} y2={(height * 2) / 3} />
    </g>
    {victory && victory.length === 2 && (
      <line
        x1={width / 6 + (width * victory[1].col) / 3}
        y1={height / 6 + (height * victory[1].line) / 3}
        x2={width / 6 + (width * victory[0].col) / 3}
        y2={height / 6 + (height * victory[0].line) / 3}
        className={classes.winningLine}
      />
    )}
  </g>
)

export default Board
