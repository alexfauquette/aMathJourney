import React, { useState } from "react"
import {
  Grid,
  InteractiveCircle,
  DisplayValues,
} from "src/components/DynamicProgram/atoms/Grid"
import { COLUMN_SIZE } from "src/components/DynamicProgram/constants.js"

import classes from "./styles.module.scss"

import RecurrenceRelation from "src/components/DynamicProgram/atoms/RecurrenceRelation"
import RecurrenceExplanation from "src/components/DynamicProgram/atoms/RecurrenceExplanation"
import Links from "src/components/DynamicProgram/atoms/Links"

const InteractiveRecurrence = ({ startWord1, startWord2 }) => {
  const [word1, setWord1] = useState(startWord1)
  const [word2, setWord2] = useState(startWord2)
  const [subWord1, setSubWord1] = useState(`_${startWord1}`)
  const [subWord2, setSubWord2] = useState(`_${startWord2}`)
  const [values, setValues] = useState({ "_-_": 0 })
  const [links, setLinks] = useState({})

  return (
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

          <RecurrenceRelation
            subWord1={subWord1}
            subWord2={subWord2}
            values={values}
            setValues={setValues}
            links={links}
            setLinks={setLinks}
            subStep="COMPUTE"
          />
          <InteractiveCircle
            word1={word1}
            word2={word2}
            onEnter={(sw1, sw2) => () => {
              setSubWord1(sw1)
              setSubWord2(sw2)
            }}
          />
          <Links links={links} />
        </svg>
      </div>
      <div className={classes.explanation}>
        <RecurrenceExplanation
          subWord1={subWord1}
          subWord2={subWord2}
          values={values}
        />
      </div>
    </div>
  )
}

export default InteractiveRecurrence
