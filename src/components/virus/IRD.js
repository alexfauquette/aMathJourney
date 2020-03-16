import React from "react"
import { Graph } from "./Graph"

const getEvolution = ({ I0, R0, D0, T, lambda, mortality }) => {
  const data = [{ t: 0, r: R0, d: D0, i: I0 }]

  for (let t = 1; t <= T; t++) {
    const { r: rt, i: it, d: dt } = data[data.length - 1]
    data.push({
      t: t,
      r: rt + it * Math.min(1 / lambda, (1 - mortality) / lambda),
      d: dt + it * Math.min(mortality / lambda, 1),
      i: it - it * Math.min(1 / lambda, 1),
    })
  }
  return data
}

export const IRDplot = ({ lang }) => (
  <Graph
    lang={lang}
    variables={["i", "r", "d"]}
    parameterNames={["duration", "mortality"]}
    I={100}
    R={0}
    D={0}
    initT={100}
    getEvolution={getEvolution}
  />
)
