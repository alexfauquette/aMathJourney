import React from "react"
import { PRESENT, COMPUTE, SAVE, RECURRENCE_DATA } from "../../constants.js"
import classes from "./styles.module.scss"
import {
  Words,
  Chars,
  Score,
  Value,
} from "src/components/DynamicProgram/atoms/Solutions"
import { getCost } from "../RecurrenceRelation"

const RecurrenceExplanation = ({ subWord1, subWord2, values, subStep }) => {
  subStep = subStep || PRESENT

  const key = `${subWord1}-${subWord2}`

  const subSolutions = RECURRENCE_DATA.slice(0, RECURRENCE_DATA.length - 1)
    .map(({ dx, dy, color }) => {
      if (subWord1.length + dx > 0 && subWord2.length + dy > 0) {
        const subSolution1 = subWord1.slice(0, subWord1.length + dx)
        const subSolution2 = subWord2.slice(0, subWord2.length + dy)
        const char1 = subWord1.slice(subWord1.length + dx, subWord1.length)
        const char2 = subWord2.slice(subWord2.length + dy, subWord2.length)

        const value = values[`${subSolution1}-${subSolution2}`]
        const score =
          typeof value === "number" ? value + getCost(char1, char2) : "?"
        return { subSolution1, subSolution2, char1, char2, value, score, color }
      }
    })
    .filter(x => !!x)

  const computationProblem = subSolutions.find(
    //return the first element with missing value for recurrence computation
    ({ score }) => score === "?"
  )

  return (
    <div className={classes.container}>
      {/* SHOW */}
      <div className={classes.recurrenceShowBlock}>
        <Words word1={subWord1} word2={subWord2} /> =
        <div className={classes.solutionsContainer}>
          {subSolutions.map(
            ({ subSolution2, subSolution1, char2, char1, color }) => (
              <div className={classes.alignLeft}>
                <Words
                  word1={subSolution1}
                  word2={subSolution2}
                  color={color}
                />
                <Chars char1={char1} char2={char2} />
              </div>
            )
          )}
        </div>
      </div>
      {/* compute */}
      {computationProblem ? (
        <>
          <p>
            We don't know the minimal cost of{" "}
            <Words
              word1={computationProblem.subSolution1}
              word2={computationProblem.subSolution2}
            />
          </p>
          <p>
            You need it to compute the minimal cost of{" "}
            <Words word1={subWord1} word2={subWord2} />
          </p>
        </>
      ) : (
        <div className={classes.recurrenceShowBlock}>
          <Score value={values[`${subWord1}-${subWord2}`]} />=
          {subSolutions.length > 1 ? " min " : ""}
          <div
            className={`${classes.solutionsContainer}
              ${subSolutions.length > 1 ? classes.leftBar : ""}`}
          >
            {subSolutions.map(
              ({ subSolution2, subSolution1, char2, char1, color, score }) => (
                <div
                  className={`${classes.alignLeft} ${classes.computationLine} ${
                    score !== values[key] ? classes.hideLine : ""
                  }`}
                >
                  <Score
                    value={values[`${subSolution1}-${subSolution2}`]}
                    color={color}
                  />
                  {" + "}
                  <Value char1={char1} char2={char2} />
                  {` = ${score}`}
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  )
}
export default RecurrenceExplanation
