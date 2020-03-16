import React, { useState, useEffect } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ReferenceDot,
  Tooltip,
  Legend,
} from "recharts"

import translate from "./translate"
import {
  defaultT,
  defaultParameters,
  parametersParams,
  virusParameters,
  societyParameters,
  variablesParams,
  colors,
} from "./constants"
import classes from "./style.module.scss"

export const Graph = ({
  lang,
  variables,
  parameterNames,
  S,
  I,
  R,
  D,
  initT,
  getEvolution,
}) => {
  const [T, setT] = useState(initT || defaultT)

  const [initialVars, setInitialVars] = useState({ s: S, r: R, i: I, d: D })

  const [parameters, setParameters] = useState(defaultParameters)
  const [data, setData] = useState([initialVars])

  useEffect(() => {
    setData(
      getEvolution({
        I0: initialVars.i,
        R0: initialVars.r,
        D0: initialVars.d,
        S0: initialVars.s,
        T,
        beta: (parameters.transmission / 100) * parameters.metPeople,
        lambda: parameters.duration,
        mortality: parameters.mortality / 100,
      })
    )
    console.log(
      getEvolution({
        I0: initialVars.i,
        R0: initialVars.r,
        D0: initialVars.d,
        S0: initialVars.s,
        T,
        beta: (parameters.transmission / 100) * parameters.metPeople,
        lambda: parameters.duration,
        mortality: parameters.mortality / 100,
      })
    )
  }, [T, initialVars, parameters])

  let maxY = 0
  variables.forEach(v => {
    maxY += data[0][v] || 0
  })
  return (
    <>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="t" type="number" allowDecimals={false} />
        <YAxis
          dataKey={variables[0]}
          type="number"
          allowDecimals={false}
          domain={[0, maxY]}
        />
        <Tooltip
          formatter={(value, name) => [
            Math.round(value) + " " + translate[lang][name],
          ]}
          labelFormatter={x => translate[lang]["day"] + " " + x}
        />
        <Legend formatter={name => [translate[lang][name]]} />
        {variables.map(v => (
          <Line
            key={v}
            dataKey={v}
            stroke={colors[v]}
            dot={false}
            strokeWidth={3}
            isAnimationActive={false}
          />
        ))}

        <ReferenceDot xAxisId="t" yAxisId="s" />
      </LineChart>
      <div className={classes.params}>
        {parameterNames.filter(name => societyParameters.includes(name))
          .length ? (
          <div className={classes.societyParams}>
            <p>{translate[lang]["societyParams"]}</p>
            <ul>
              {parameterNames
                .filter(name => societyParameters.includes(name))
                .map(parameterName => (
                  <li key={parameterName}>
                    <label htmlFor={parameterName}>
                      {translate[lang][parameterName]}
                    </label>
                    <input
                      {...parametersParams[parameterName]}
                      id={parameterName}
                      name={parameterName}
                      onChange={event => {
                        setParameters({
                          ...parameters,
                          [parameterName]:
                            event.target && parseFloat(event.target.value),
                        })
                      }}
                      value={parameters[parameterName]}
                    />
                  </li>
                ))}
            </ul>
          </div>
        ) : null}
        {parameterNames.filter(name => virusParameters.includes(name))
          .length ? (
          <div className={classes.virusParams}>
            <p>{translate[lang]["virusParams"]}</p>
            <ul>
              {parameterNames
                .filter(name => virusParameters.includes(name))
                .map(parameterName => (
                  <li key={parameterName}>
                    <label htmlFor={parameterName}>
                      {translate[lang][parameterName]}
                    </label>
                    <input
                      {...parametersParams[parameterName]}
                      id={parameterName}
                      name={parameterName}
                      onChange={event => {
                        setParameters({
                          ...parameters,
                          [parameterName]:
                            event.target && parseFloat(event.target.value),
                        })
                      }}
                      value={parameters[parameterName]}
                    />
                  </li>
                ))}
            </ul>
          </div>
        ) : null}
        {parameterNames.filter(name => virusParameters.includes(name))
          .length ? (
          <div className={classes.initialParams}>
            <p>{translate[lang]["initialParams"]}</p>
            <ul>
              {variables.map(variableName => (
                <li key={variableName}>
                  <label htmlFor={variableName}>
                    {translate[lang][variableName]}
                  </label>
                  <input
                    {...variablesParams[variableName]}
                    id={variableName}
                    name={variableName}
                    onChange={event => {
                      setInitialVars({
                        ...initialVars,
                        [variableName]: parseFloat(event.target.value),
                      })
                    }}
                    value={initialVars[variableName]}
                  />
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
      {parameterNames.includes("transmission") &&
        parameterNames.includes("metPeople") &&
        parameterNames.includes("duration") && (
          <p className={classes.R0}>
            R0 ={" "}
            {`${Math.round(
              (parameters.transmission / 100) *
                parameters.metPeople *
                parameters.duration
            )},${Math.round(
              parameters.transmission *
                parameters.metPeople *
                parameters.duration
            ) -
              100 *
                Math.floor(
                  (parameters.transmission / 100) *
                    parameters.metPeople *
                    parameters.duration
                )}
            `}
          </p>
        )}
    </>
  )
}
