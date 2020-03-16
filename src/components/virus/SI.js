import React from "react"
import { Graph } from "./Graph"

const getEvolution = ({ S0, I0, T, beta }) => {
  const data = [{ t: 0, s: S0, i: I0 }]

  for (let t = 1; t <= T; t++) {
    const { s: st, i: it } = data[data.length - 1]
    data.push({
      t: t,
      s: st - st * Math.min((beta * it) / (st + it), 1),
      i: it + st * Math.min((beta * it) / (st + it), 1),
    })
  }
  return data
}

export const SIplot = ({ lang }) => (
  <Graph
    lang={lang}
    variables={["s", "i"]}
    parameterNames={["transmission", "metPeople"]}
    S={1000}
    I={1}
    getEvolution={getEvolution}
  />
)
