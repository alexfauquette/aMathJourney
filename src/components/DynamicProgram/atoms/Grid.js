import React, { useState } from "react"
import classes from "./gridStyle.module.scss"

const COLUMN_SIZE = 30

export const Grid = ({ word1, word2 }) => (
  <>
    {`_${word1}`.split("").map((char, index) => (
      <>
        <line
          x1={COLUMN_SIZE * (index + 1)}
          y1={0}
          x2={COLUMN_SIZE * (index + 1)}
          y2={COLUMN_SIZE * (word2.length + 2)}
          className={classes.tableLine}
        />
        <text
          text-anchor="middle"
          dominant-baseline="middle"
          x={COLUMN_SIZE * (index + 1.5)}
          y={COLUMN_SIZE * 0.5}
        >
          {char}
        </text>
      </>
    ))}
    {`_${word2}`.split("").map((char, index) => (
      <>
        <line
          x1={0}
          y1={COLUMN_SIZE * (index + 1)}
          x2={COLUMN_SIZE * (word1.length + 2)}
          y2={COLUMN_SIZE * (index + 1)}
          className={classes.tableLine}
        />
        <text
          text-anchor="middle"
          dominant-baseline="middle"
          y={COLUMN_SIZE * (index + 1.5)}
          x={COLUMN_SIZE * 0.5}
        >
          {char}
        </text>
      </>
    ))}
  </>
)

export const InteractiveCircle = ({ word1, word2, onEnter }) => (
  <>
    {`_${word1}`.split("").reduce(
      (accu, _, index1) => [
        ...accu,
        ...`_${word2}`
          .split("")
          .map((_, index2) => (
            <circle
              className={classes.circle}
              cx={COLUMN_SIZE * (index1 + 1.5)}
              cy={COLUMN_SIZE * (index2 + 1.5)}
              r={COLUMN_SIZE / 2 - 1}
              onMouseEnter={onEnter(
                `_${word1}`.slice(0, index1 + 1),
                `_${word2}`.slice(0, index2 + 1)
              )}
            />
          )),
      ],
      `_${word2}`
        .split("")
        .map((_, index2) => (
          <circle
            className={classes.circle}
            cx={COLUMN_SIZE * (0 + 1.5)}
            cy={COLUMN_SIZE * (index2 + 1.5)}
            r={COLUMN_SIZE / 2 - 1}
            onMouseEnter={onEnter(
              `_${word1}`.slice(0, 0 + 1),
              `_${word2}`.slice(0, index2 + 1)
            )}
          />
        ))
    )}
  </>
)
