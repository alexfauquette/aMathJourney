import React from "react"
import { Graph } from "./Graph"

const getEvolution = ({ R0, I0, T, lambda }) => {
  const data = [{ t: 0, r: R0, i: I0 }]

  for (let t = 1; t <= T; t++) {
    const { r: rt, i: it } = data[data.length - 1]
    data.push({
      t: t,
      r: rt + it * Math.min(1 / lambda, 1),
      i: it - it * Math.min(1 / lambda, 1),
    })
  }
  return data
}

export const IRplot = ({ lang }) => (
  <Graph
    lang={lang}
    variables={["i", "r"]}
    parameterNames={["duration"]}
    I={100}
    R={0}
    getEvolution={getEvolution}
    initT={100}
  />
)
