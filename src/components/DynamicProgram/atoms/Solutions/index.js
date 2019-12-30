import React from "react"
import classes from "./styles.module.scss"
import { getCost } from "../RecurrenceRelation"

export const Words = ({ word1, word2, color }) => (
  <div
    className={classes.wordsContainer}
    style={color ? { borderColor: color } : {}}
  >
    <p className={classes.word1}>{word1 || "_"}</p>
    <p className={classes.word2}>{word2 || "_"}</p>
  </div>
)

export const Chars = ({ char1, char2 }) => (
  <div
    className={`${classes.charsContainer} ${
      char1 === char2
        ? classes.match
        : !char1 || !char2
        ? classes.withEmpty
        : classes.mismatch
    }`}
  >
    <p className={classes.char1}>{char1 || "_"}</p>
    <p className={classes.char2}>{char2 || "_"}</p>
  </div>
)

export const Score = ({ value, color }) => (
  <span className={classes.score} style={color ? { borderColor: color } : {}}>
    {typeof value === "number" ? value : "?"}
  </span>
)

export const Value = ({ char1, char2 }) => (
  <span
    className={`${
      char1 === char2
        ? classes.matchValue
        : !char1 || !char2
        ? classes.withEmptyValue
        : classes.mismatchValue
    }`}
  >
    {getCost(char1, char2)}
  </span>
)
