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

export const fillLinksWithPaths = (links, solutions) => {
  solutions.forEach(({ word1, word2 }) => {
    for (let i = 1; i <= word1.length; i++) {
      const subWord1 = word1
        .slice(0, i)
        .split("")
        .filter(e => e !== "_")
        .join("")
      const subWord2 = word2
        .slice(0, i)
        .split("")
        .filter(e => e !== "_")
        .join("")

      const char1 = word1.slice(i - 1, i)
      const char2 = word2.slice(i - 1, i)

      const used_dx = char1 === "_" ? 0 : -1
      const used_dy = char2 === "_" ? 0 : -1
      const key = `_${subWord1}-_${subWord2}`
      links[key] = links[key].map(({ dx, dy, paths }) =>
        dx === used_dx && dy === used_dy
          ? { dx, dy, paths: [...paths, `${word1}-${word2}`] }
          : { dx, dy, paths }
      )
    }
  })
  return links
}

const isSelected = (selectedSolution, paths) => paths.includes(selectedSolution)

const Links = ({ links, showSolutions, selectedSolution }) => {
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
                className={`${classes.link} ${
                  showSolutions && paths.length === 0 ? classes.transparent : ""
                } ${
                  showSolutions && isSelected(selectedSolution, paths)
                    ? dx === dy
                      ? subWord1[subWord1.length - 1] ===
                        subWord2[subWord2.length - 1]
                        ? classes.matchLink
                        : classes.missmatchLink
                      : classes.emptyLink
                    : ""
                }`}
              />
            ) : null
          }),
        ]
      }, [])}
    </>
  )
}
export default Links
