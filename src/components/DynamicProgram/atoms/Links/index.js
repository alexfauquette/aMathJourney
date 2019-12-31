import React from "react"
import { COLUMN_SIZE, MEDIUM_CIRCLE_RADIUS, SQRT2 } from "../../constants.js"
import classes from "./styles.module.scss"

export const computeSolutions = (links, state, solutions) => {
  if (!links[state]) return solutions

  const [subWord1, subWord2] = state.split("-")
  return links[state].reduce((accumulator, { dx, dy }) => {
    const sw1 = subWord1.slice(0, subWord1.length + dx)
    const sw2 = subWord2.slice(0, subWord2.length + dy)
    const char1 = subWord1.slice(subWord1.length + dx, subWord1.length)
    const char2 = subWord2.slice(subWord2.length + dy, subWord2.length)

    const newState = `${sw1}-${sw2}`
    const newSolutions = solutions.map(({ word1, word2 }) => ({
      word1: `${char1 || "_"}${word1}`,
      word2: `${char2 || "_"}${word2}`,
    }))

    return [...accumulator, ...computeSolutions(links, newState, newSolutions)]
  }, [])
}

const Links = ({ links }) => {
  return (
    <>
      {Object.keys(links).reduce((accumulator, key) => {
        return [
          ...accumulator,
          ...links[key].map(({ dx, dy, paths }) => {
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
