import React from "react"
import { Graph } from "./Graph"

const getEvolution = ({ S0, I0, R0, D0, T, beta, lambda, mortality }) => {
  const data = [{ t: 0, r: R0, d: D0, i: I0, s: S0 }]

  for (let t = 1; t <= T; t++) {
    const { r: rt, i: it, d: dt, s: st } = data[data.length - 1]
    data.push({
      t: t,
      s: st - st * Math.min((beta * it) / (st + it), 1),
      r: rt + it * Math.min(1 / lambda, (1 - mortality) / lambda),
      d: dt + it * Math.min(mortality / lambda, 1),
      i:
        it -
        it * Math.min((1 + mortality) / lambda, 1) +
        st * Math.min((beta * it) / (st + it), 1),
    })
  }

  return data
}

export const SIRDplot = ({ lang }) => (
  <Graph
    lang={lang}
    variables={["s", "i", "r", "d"]}
    parameterNames={["duration", "mortality", "transmission", "metPeople"]}
    S={1000}
    I={1}
    R={0}
    D={0}
    getEvolution={getEvolution}
    initT={365}
  />
)
