import React, { useState, useCallback } from "react"
import { Grid, InteractiveCircle, COLUMN_SIZE } from "../atoms/Grid"
import classes from "./styles.module.scss"

const InteractiveGrid = ({ startWord1, startWord2 }) => {
  const [word1, setWord1] = useState(startWord1)
  const [word2, setWord2] = useState(startWord2)
  const [subWord1, setSubWord1] = useState(`_${startWord1}`)
  const [subWord2, setSubWord2] = useState(`_${startWord2}`)

  return (
    <div className={classes.container}>
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
        <Grid
          word1={word1}
          word2={word2}
          subWord1={subWord1}
          subWord2={subWord2}
        />
        <InteractiveCircle
          word1={word1}
          word2={word2}
          onEnter={(sw1, sw2) => () => {
            setSubWord1(sw1)
            setSubWord2(sw2)
          }}
        />
        <circle
          className={classes.activeCircle}
          cx={COLUMN_SIZE * (subWord1.length + 0.5)}
          cy={COLUMN_SIZE * (subWord2.length + 0.5)}
          r={COLUMN_SIZE / 4}
        ></circle>
      </svg>
      <p className={`${classes.text} ${classes.text1}`}>
        {subWord1.slice(1) || "_"}
      </p>
      <p className={`${classes.text} ${classes.text2}`}>
        {subWord2.slice(1) || "_"}
      </p>
    </div>
  )
}

export default InteractiveGrid
