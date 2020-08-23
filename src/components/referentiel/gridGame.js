import React, { useState, useEffect } from "react"

import classes from "./gridGame.module.scss"

import GridView from "src/components/referentiel/gridView.js"

const client1Reaction = (line, column, alreadyTested) => {
  if (line > 1) {
    return ["plus haut", false]
  }
  if (column < 3) {
    return ["plus à droite", false]
  }

  //since it is in the good corner, we add logic to avoid lucky try
  const testedTopRight = alreadyTested.filter(
    x => x["line"] <= 1 && x["column"] >= 3
  )
  if (testedTopRight.length === 0) {
    return [line === 0 ? "plus bas" : "plus haut", false]
  }
  if (testedTopRight.length === 1) {
    return [column === 3 ? "plus à droite" : "plus à gauche", false]
  }
  if (testedTopRight.length >= 2) {
    const goalLine = testedTopRight[0]["line"] === 0 ? 1 : 0
    const goalColumn = testedTopRight[1]["column"] === 3 ? 4 : 3
    if (line === goalLine && column === goalColumn) {
      return ["C'est ça, merci :)", true]
    } else if (line !== goalLine) {
      return [`Non, c'est un peu plus en ${line === 0 ? "bas" : "haut"}`, false]
    } else {
      return [
        `Non, c'est un peu plus à ${column === 3 ? "droite" : "gauche"}`,
        false,
      ]
    }
  }
}

const client2Reaction = (line, column, alreadyTested) => {
  const goalLine = 3
  const goalColumn = 2

  if (line !== goalLine) {
    const humanLine = 5 - line
    return [
      [
        "Non, là tu es sur ",
        <span className={classes.coordinate}>la ligne {humanLine}</span>,
      ],
      false,
    ]
  }
  if (column !== goalColumn) {
    return [
      [
        "Non, là tu es sur ",
        <span className={classes.coordinate}>la colone {column + 1}</span>,
      ],
      false,
    ]
  } else {
    return [`Merci, t'es trop fort ;)`, true]
  }
}

const GridGame = () => {
  const [currentClient, setCurrentClient] = useState(1)
  const [alreadyTested, setAlreadyTested] = useState([])
  const [clientMessage, setClientMessage] = useState([
    "Je voudrais le produit en haut à droite",
  ])
  const [pause, setPause] = useState(false)

  const action = (line, column) => {
    if (pause) {
      return 0
    }

    if (
      alreadyTested.filter(x => x.line === line && x.column === column).length >
      0
    ) {
      setClientMessage([...clientMessage, "Ta m'a déjà proposé ça :@"])
    } else {
      if (currentClient === 1) {
        const [response, nextClient] = client1Reaction(
          line,
          column,
          alreadyTested
        )
        setClientMessage([...clientMessage, response])
        setAlreadyTested([
          ...alreadyTested,
          { line: line, column: column, good: nextClient },
        ])

        if (nextClient) {
          setPause(true)
          setTimeout(() => {
            setPause(false)
            setCurrentClient(2)
            setAlreadyTested([])
            setClientMessage([
              [
                "Salut, moi je voudrais l'article sur la ",
                <span className={classes.coordinate}>deuxième ligne</span>,
                " en partant ",
                <span className={classes.origine}>du bas</span>,
                " et la ",
                <span className={classes.coordinate}>troisième colone</span>,
                " en partant ",
                <span className={classes.origine}>de la gauche</span>,
              ],
            ])
          }, 1000)
        }
      } else if (currentClient === 2) {
        const [response, nextClient] = client2Reaction(
          line,
          column,
          alreadyTested
        )

        setClientMessage([...clientMessage, response])
        setAlreadyTested([
          ...alreadyTested,
          { line: line, column: column, good: nextClient },
        ])

        if (nextClient) {
          setPause(true)
          setTimeout(() => {
            setCurrentClient(3)
            setClientMessage(["Bravo, tu as réussi à servir les deux clients"])
            setAlreadyTested([])
          }, 1000)
        }
      }
    }
  }

  return (
    <>
      <div className={classes.container}>
        <GridView action={action} alreadyTested={alreadyTested} />
        <div>
          <p className={classes.clientHeader}>
            <div>
              {currentClient === 1 && (
                <span role="img" aria-label="client 1 a child">
                  🧒
                </span>
              )}
              {currentClient === 2 && (
                <span role="img" aria-label="client 2 a scientist">
                  👩‍🔬
                </span>
              )}
              {currentClient === 3 && (
                <span role="img" aria-label="celerbating person">
                  🥳
                </span>
              )}
            </div>
            {currentClient < 3 ? `Client ${currentClient}` : "Responsable"}
          </p>
          <div className={classes.messages}>
            {clientMessage &&
              [...clientMessage].reverse().map((message, id) => (
                <p className={classes.message} key={clientMessage.length - id}>
                  {message}
                </p>
              ))}
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          setCurrentClient(1)
          setAlreadyTested([])
          setClientMessage(["Je voudrais le produit en haut à droite"])
          setPause(false)
        }}
      >
        Restart
      </button>
    </>
  )
}

export default GridGame
