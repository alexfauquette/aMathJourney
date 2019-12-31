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

export const getCost = (char1, char2) => {
  if (char1 === char2) return 0
  if (char1 === "_" || char2 === "_") return 1
  if (char1 === "" || char2 === "") return 1
  return 2
}

const RecurrenceRelation = ({
  subWord1,
  subWord2,
  values,
  setValues,
  links,
  setLinks,
  subStep,
}) => {
  subStep = subStep || PRESENT
  const key = `${subWord1}-${subWord2}`
  let isComputable = false
  let minValue
  const recurrentValues = {}

  isComputable = true
  RECURRENCE_DATA.slice(0, RECURRENCE_DATA.length - 1).forEach(
    ({ dx, dy }, index) => {
      if (subWord1.length + dx > 0 && subWord2.length + dy > 0) {
        const sw1 = subWord1.slice(0, subWord1.length + dx)
        const sw2 = subWord2.slice(0, subWord2.length + dy)
        const char1 = subWord1.slice(subWord1.length + dx, subWord1.length)
        const char2 = subWord2.slice(subWord2.length + dy, subWord2.length)
        if (typeof values[`${sw1}-${sw2}`] === "number") {
          recurrentValues[index] = {
            value: values[`${sw1}-${sw2}`] + getCost(char1, char2),
            dx,
            dy,
          }
        } else {
          isComputable = false
        }
      }
    }
  )
  if (isComputable) {
    minValue = Object.keys(recurrentValues)
      .map(key => recurrentValues[key].value)
      .sort((a, b) => a - b)[0]
    if (typeof values[key] !== "number") {
      setValues({ ...values, [key]: minValue })
      if (links && setLinks) {
        setLinks({
          ...links,
          [key]: Object.keys(recurrentValues)
            .filter(key => recurrentValues[key].value === minValue)
            .map(key => ({
              dx: recurrentValues[key].dx,
              dy: recurrentValues[key].dy,
              paths: [],
            })),
        })
      }
    }
  }

  return (
    <>
      {RECURRENCE_DATA.slice(0, RECURRENCE_DATA.length - 1).map(
        ({ dx, dy }, index) => {
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
              className={`${classes.link} ${
                subStep === SAVE
                  ? classes.saveLink
                  : subStep === COMPUTE &&
                    isComputable &&
                    recurrentValues[index] &&
                    recurrentValues[index].value === minValue
                  ? classes.goodLink
                  : subStep === COMPUTE && isComputable
                  ? classes.badLink
                  : classes.notComputableLink
              }`}
            />
          ) : null
        }
      )}
      {RECURRENCE_DATA.map(({ dx, dy, color }, index) =>
        subWord1.length + dx > 0 && subWord2.length + dy > 0 ? (
          <circle
            cx={COLUMN_SIZE * (subWord1.length + dx + 0.5)}
            cy={COLUMN_SIZE * (subWord2.length + dy + 0.5)}
            r={MEDIUM_CIRCLE_RADIUS}
            className={`${classes.circle}  ${
              subStep === SAVE
                ? classes.saveCircle
                : subStep === COMPUTE &&
                  isComputable &&
                  recurrentValues[index] &&
                  recurrentValues[index].value === minValue
                ? classes.goodCircle
                : RECURRENCE_DATA.length === index + 1
                ? classes.resultCircle
                : subStep === COMPUTE && isComputable
                ? classes.badCircle
                : classes.notComputableCircle
            }`}
            style={subStep === PRESENT ? { stroke: color } : {}}
          />
        ) : null
      )}
    </>
  )
}
export default RecurrenceRelation
