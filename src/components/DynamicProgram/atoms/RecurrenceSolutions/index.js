import React from "react"
import { Solution } from "src/components/DynamicProgram/atoms/Solutions"

const RecurrenceSolutions = ({
  solutions,
  selectedSolution,
  setSelectedSolution,
}) => {
  return (
    <div>
      {solutions.map(({ word1, word2 }) => (
        <Solution
          key={`${word1}-${word2}`}
          word1={word1}
          word2={word2}
          onEnter={() => setSelectedSolution(`${word1}-${word2}`)}
          isSelected={`${word1}-${word2}` === selectedSolution}
        />
      ))}
    </div>
  )
}
export default RecurrenceSolutions
