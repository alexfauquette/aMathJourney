import React from "react"
import classes from "./styles.module.scss"
import {
  COLUMN_SIZE,
  LARGE_CIRCLE_RADIUS,
  MEDIUM_CIRCLE_RADIUS,
} from "src/components/DynamicProgram/constants.js"

export const Grid = ({ word1, word2, subWord1, subWord2 }) => (
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
          className={
            subWord1 && index < subWord1.length
              ? classes.subWord1
              : classes.nomalWord
          }
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
          className={
            subWord2 && index < subWord2.length
              ? classes.subWord2
              : classes.nomalWord
          }
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
              className={classes.interactiveCircle}
              cx={COLUMN_SIZE * (index1 + 1.5)}
              cy={COLUMN_SIZE * (index2 + 1.5)}
              r={LARGE_CIRCLE_RADIUS}
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
            className={classes.interactiveCircle}
            cx={COLUMN_SIZE * (0 + 1.5)}
            cy={COLUMN_SIZE * (index2 + 1.5)}
            r={LARGE_CIRCLE_RADIUS}
            onMouseEnter={onEnter(
              `_${word1}`.slice(0, 0 + 1),
              `_${word2}`.slice(0, index2 + 1)
            )}
          />
        ))
    )}
  </>
)

export const DisplayValues = ({ word1, word2, values }) => {
  return (
    <>
      {`_${word1}`.split("").reduce(
        (accu, _, index1) => [
          ...accu,
          ...`_${word2}`.split("").map((_, index2) => {
            const key =
              `_${word1}`.slice(0, index1 + 1) +
              "-" +
              `_${word2}`.slice(0, index2 + 1)
            const v = values[key]
            return v !== undefined ? (
              <>
                <circle
                  className={classes.interactiveCircle}
                  cx={COLUMN_SIZE * (index1 + 1.5)}
                  cy={COLUMN_SIZE * (index2 + 1.5)}
                  r={MEDIUM_CIRCLE_RADIUS}
                />
                <text
                  text-anchor="middle"
                  dominant-baseline="middle"
                  x={COLUMN_SIZE * (index1 + 1.5)}
                  y={COLUMN_SIZE * (index2 + 1.5)}
                >
                  {v}
                </text>
              </>
            ) : null
          }),
        ],
        `_${word2}`.split("").map((_, index2) => {
          const key = "_-" + `_${word2}`.slice(0, index2 + 1)
          const v = values[key]
          return v ? (
            <>
              <circle
                className={classes.interactiveCircle}
                cx={COLUMN_SIZE * 1.5}
                cy={COLUMN_SIZE * (index2 + 1.5)}
                r={MEDIUM_CIRCLE_RADIUS}
              />
              <text
                text-anchor="middle"
                dominant-baseline="middle"
                x={COLUMN_SIZE * 1.5}
                y={COLUMN_SIZE * (index2 + 1.5)}
              >
                {v}
              </text>
            </>
          ) : null
        })
      )}
    </>
  )
}
