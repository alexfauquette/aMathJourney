import React, { useRef, useState, useEffect, useCallback } from "react"

import classes from "./style.module.scss"

const DisplayCat = ({ status }) => {
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    if (status) {
      setInitialized(true)
    }
  }, [status])

  switch (status) {
    case "OK":
      return (
        <div
          className={`${classes.cat} ${
            initialized ? classes.init : classes.notInit
          }`}
        >
          <span role="img" aria-label="cat in love">
            😻
          </span>
        </div>
      )
    case "KO":
      return (
        <div
          className={`${classes.cat} ${
            initialized ? classes.init : classes.notInit
          }`}
        >
          <span role="img" aria-label="cat disgusted">
            🙀
          </span>
        </div>
      )
    default:
      return (
        <div
          className={`${classes.cat} ${
            initialized ? classes.init : classes.notInit
          }`}
        >
          <span role="img" aria-label="cat waiting for food">
            😺
          </span>
        </div>
      )
  }
}

const DisplaySeenCat = ({ status, color }) => {
  switch (status) {
    case "OK":
      return (
        <div
          className={classes.seenCats}
          style={{ backgroundColor: color }} //, order: 2 * foodIndex + 1
        >
          <span role="img" aria-label="cat in love">
            😻
          </span>
        </div>
      )
    case "KO":
      return (
        <div
          className={classes.seenCats}
          style={{ backgroundColor: color }} //, order: 2 * foodIndex + 2
        >
          <span role="img" aria-label="cat disgusted">
            🙀
          </span>
        </div>
      )
  }
}

const ResultsSynthesis = ({ nbOK, nbKO, color }) => (
  <table style={{ backgroundColor: color }} className={classes.stats}>
    <tbody>
      <tr>
        <td>
          <span role="img" aria-label="cat in love">
            😻
          </span>
        </td>
        <td>
          <span role="img" aria-label="cat disgusted">
            🙀
          </span>
        </td>
      </tr>
      <tr>
        <td>{nbOK}</td>
        <td>{nbKO}</td>
      </tr>
      <tr>
        {nbOK + nbKO === 0 ? (
          <td colSpan={2}>No stats</td>
        ) : (
          <>
            <td>
              {Math.round((nbOK / (nbOK + nbKO) + Number.EPSILON) * 100) ||
                Math.round((nbOK / (nbOK + nbKO) + Number.EPSILON) * 10000) /
                  100}
              %
            </td>
            <td>
              {Math.round((nbKO / (nbOK + nbKO) + Number.EPSILON) * 100) ||
                Math.round((nbKO / (nbOK + nbKO) + Number.EPSILON) * 10000) /
                  100}
              %
            </td>
          </>
        )}
      </tr>
    </tbody>
  </table>
)

const getStatistic = (results, wantedStatus, wantedIndex) =>
  results.filter(
    ({ status, foodIndex }) =>
      status === wantedStatus && foodIndex === wantedIndex
  ).length

const ResultsCats = ({ results, colors }) => (
  <div>
    <div className={classes.resultsContainer}>
      {results.map(({ id, status, foodIndex }) => (
        <DisplaySeenCat key={id} status={status} color={colors[foodIndex]} />
      ))}
    </div>
    <div className={classes.statsContainer}>
      <ResultsSynthesis
        nbOK={getStatistic(results, "OK", 0)}
        nbKO={getStatistic(results, "KO", 0)}
        color={colors[0]}
      />
      <ResultsSynthesis
        nbOK={getStatistic(results, "OK", 1)}
        nbKO={getStatistic(results, "KO", 1)}
        color={colors[1]}
      />
    </div>
  </div>
)

const initialiseCats = N => {
  return [...Array(N).keys()].map(id => ({
    id: id,
    status: "",
  }))
}

export const CatList = ({ catNumber, probaHappy, buttonsColor }) => {
  const [cats, setCats] = useState(initialiseCats(catNumber))
  const clearCatTimer = useRef(false)

  const [results, setResults] = useState([])

  const giveFood = useCallback(
    (foodIndex, cats) => {
      clearTimeout(clearCatTimer.current)

      const [head, ...rest] = cats.filter(
        cat => cat.status !== "KO" && cat.status !== "OK"
      )
      if (head) {
        const newStatus = Math.random() <= probaHappy[foodIndex] ? "OK" : "KO"

        setCats([
          {
            id: head.id,
            status: newStatus,
          },
          ...rest,
        ])
        setResults(results => [
          ...results,
          { id: head.id, status: newStatus, foodIndex: foodIndex },
        ])

        clearCatTimer.current = setTimeout(() => {
          setCats(rest)
        }, 1000)
      }
    },
    [clearCatTimer, probaHappy, setCats, setResults]
  )

  return (
    <div>
      <div>
        <p className={classes.catList}>
          {cats.map(({ id, status }) => (
            <DisplayCat key={id} status={status} />
          ))}
        </p>
      </div>
      <div className={classes.foodOptions}>
        <button
          onClick={() => giveFood(0, cats)}
          style={{ backgroundColor: buttonsColor[0] }}
        >
          🐟
        </button>
        <button
          onClick={() => giveFood(1, cats)}
          style={{ backgroundColor: buttonsColor[1] }}
        >
          🍖
        </button>
      </div>

      <ResultsCats results={results} colors={buttonsColor} />
    </div>
  )
}
