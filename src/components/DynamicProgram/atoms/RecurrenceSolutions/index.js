import React, { useState } from "react"
import { Solution } from "src/components/DynamicProgram/atoms/Solutions"
import classes from "./styles.module.scss"

const RecurrenceSolutions = ({
  solutions,
  selectedSolution,
  setSelectedSolution,
  MAX_NUMBER_TO_DISPLAY,
}) => {
  const [startIndex, setStartIndex] = useState(0)

  return (
    <div>
      {solutions
        .slice(
          startIndex * MAX_NUMBER_TO_DISPLAY,
          (startIndex + 1) * MAX_NUMBER_TO_DISPLAY
        )
        .map(({ word1, word2 }) => (
          <Solution
            key={`${word1}-${word2}`}
            word1={word1}
            word2={word2}
            onEnter={() => setSelectedSolution(`${word1}-${word2}`)}
            isSelected={`${word1}-${word2}` === selectedSolution}
          />
        ))}
      {solutions.length > MAX_NUMBER_TO_DISPLAY && (
        <div className={classes.buttonContainer}>
          {startIndex > 0 ? (
            <button
              onClick={() => {
                setStartIndex(startIndex => startIndex - 1)
              }}
            >
              Prev
            </button>
          ) : (
            <div />
          )}
          <p>
            {startIndex * MAX_NUMBER_TO_DISPLAY + 1}-
            {(startIndex + 1) * MAX_NUMBER_TO_DISPLAY} / {solutions.length}
          </p>
          {solutions.length > (startIndex + 1) * MAX_NUMBER_TO_DISPLAY && (
            <button
              onClick={() => {
                setStartIndex(startIndex => startIndex + 1)
              }}
            >
              Next
            </button>
          )}
        </div>
      )}
    </div>
  )
}
export default RecurrenceSolutions
