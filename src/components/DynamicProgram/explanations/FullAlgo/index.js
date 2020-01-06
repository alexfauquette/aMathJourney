import React, { useState, useEffect } from "react"
import {
  Grid,
  InteractiveCircle,
  DisplayValues,
} from "src/components/DynamicProgram/atoms/Grid"
import { COLUMN_SIZE } from "src/components/DynamicProgram/constants.js"

import classes from "./styles.module.scss"

import RecurrenceRelation from "src/components/DynamicProgram/atoms/RecurrenceRelation"
import RecurrenceExplanation from "src/components/DynamicProgram/atoms/RecurrenceExplanation"
import RecurrenceSolutions from "src/components/DynamicProgram/atoms/RecurrenceSolutions"
import Links, {
  computeSolutions,
  fillLinksWithPaths,
} from "src/components/DynamicProgram/atoms/Links"

const MAX_NUMBER_OF_SOLUTION_TO_DISPLAY = 10

const nextHorizontal = (subWord1, subWord2, word1, word2) => {
  if (subWord1.length < word1.length + 1)
    return { subWord1: `_${word1.slice(0, subWord1.length)}`, subWord2 }
  if (subWord2.length < word2.length + 1)
    return { subWord1: "_", subWord2: `_${word2.slice(0, subWord2.length)}` }
  return null
}
const nextVertical = (subWord1, subWord2, word1, word2) => {
  if (subWord2.length < word2.length + 1)
    return { subWord2: `_${word2.slice(0, subWord2.length)}`, subWord1 }
  if (subWord1.length < word1.length + 1)
    return { subWord2: "_", subWord1: `_${word1.slice(0, subWord1.length)}` }
  return null
}

const FullAlgo = ({ startWord1, startWord2 }) => {
  const [word1, setWord1] = useState(startWord1)
  const [word2, setWord2] = useState(startWord2)
  const [subWord1, setSubWord1] = useState(`_`)
  const [subWord2, setSubWord2] = useState(`_`)
  const [values, setValues] = useState({ "_-_": 0 })
  const [links, setLinks] = useState({})
  const [showRecurrenceRelation, setShowRecurrenceRelation] = useState(true)
  const [showSolutions, setShowSolutions] = useState(false)
  const [solutions, setSolutions] = useState([])
  const [selectedSolution, setSelectedSolution] = useState("")

  useEffect(() => {
    setValues({ "_-_": 0 })
    setLinks({})
    setShowRecurrenceRelation(true)
    setSubWord1(`_`)
    setSubWord2(`_`)
    setShowSolutions(false)
    setSolutions([])
  }, [word1, word2])

  const next = () => {
    const newValues = nextHorizontal(subWord1, subWord2, word1, word2)
    if (!newValues && !showSolutions) {
      const newSolutions = computeSolutions(links, `_${word1}-_${word2}`, [
        { word1: "", word2: "" },
      ])
      setSolutions(newSolutions)
      setLinks(fillLinksWithPaths(links, newSolutions))
      setShowRecurrenceRelation(false)
      setShowSolutions(true)
    } else if (!showSolutions) {
      const { subWord1, subWord2 } = newValues
      setSubWord1(subWord1)
      setSubWord2(subWord2)
    }
  }

  return (
    <>
      <div className={classes.container}>
        <div className={classes.grid}>
          <div className={classes.inputContainer}>
            <input
              onChange={event => setWord1(event.target.value.toUpperCase())}
              value={word1}
            />
            <input
              onChange={event => setWord2(event.target.value.toUpperCase())}
              value={word2}
            />
          </div>
          <svg
            viewBox={`0 0 ${COLUMN_SIZE * (word1.length + 2)} ${COLUMN_SIZE *
              (word2.length + 2)}`}
            style={{ width: "100%", maxHeight: "20cm" }}
          >
            <Grid word1={word1} word2={word2} />
            <DisplayValues word1={word1} word2={word2} values={values} />

            {showRecurrenceRelation && (
              <RecurrenceRelation
                subWord1={subWord1}
                subWord2={subWord2}
                values={values}
                setValues={setValues}
                links={links}
                setLinks={setLinks}
                subStep="COMPUTE"
              />
            )}
            <Links
              links={links}
              showSolutions={showSolutions}
              selectedSolution={selectedSolution}
            />
          </svg>
        </div>
        <div className={classes.explanation}>
          {showSolutions ? (
            <RecurrenceSolutions
              solutions={solutions}
              selectedSolution={selectedSolution}
              setSelectedSolution={setSelectedSolution}
              MAX_NUMBER_TO_DISPLAY={MAX_NUMBER_OF_SOLUTION_TO_DISPLAY}
            />
          ) : (
            <RecurrenceExplanation
              subWord1={subWord1}
              subWord2={subWord2}
              values={values}
            />
          )}
        </div>
      </div>
      <button onClick={next}>Next</button>
    </>
  )
}

export default FullAlgo
