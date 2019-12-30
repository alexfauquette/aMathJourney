import React from "react"
import {
  COLUMN_SIZE,
  RECURRENCE_DATA,
  MEDIUM_CIRCLE_RADIUS,
  SQRT2,
  PRESENT,
  COMPUTE,
  SAVE,
} from "../../constants.js"
import classes from "./styles.module.scss"

const Links = ({ links }) => {
  return (
    <>
      {Object.keys(links).reduce((accumulator, key) => {
        return [
          ...accumulator,
          ...links[key].map(({ dx, dy, state, paths }) => {
            const [subWord1, subWord2] = key.split("-")

            const Dx =
              dx === 0
                ? 0
                : dy === 0
                ? MEDIUM_CIRCLE_RADIUS
                : MEDIUM_CIRCLE_RADIUS / SQRT2

            const Dy =
              dy === 0
                ? 0
                : dx === 0
                ? MEDIUM_CIRCLE_RADIUS
                : MEDIUM_CIRCLE_RADIUS / SQRT2

            return subWord1.length + dx > 0 && subWord2.length + dy > 0 ? (
              <line
                x1={COLUMN_SIZE * (subWord1.length + dx + 0.5) + Dx}
                y1={COLUMN_SIZE * (subWord2.length + dy + 0.5) + Dy}
                x2={COLUMN_SIZE * (subWord1.length + 0.5) - Dx}
                y2={COLUMN_SIZE * (subWord2.length + 0.5) - Dy}
                className={`${classes.link}`}
              />
            ) : null
          }),
        ]
      }, [])}
    </>
  )
}
export default Links
