import React, { useState, useEffect } from "react"
// import classes from "./BulletGame.module.scss"
import BulletGameVue from "./bulletGameVue.js"
import PauseIcon from "@material-ui/icons/Pause"
import PlayArrowIcon from "@material-ui/icons/PlayArrow"
import StopIcon from "@material-ui/icons/Stop"

import {
  getCloudCoord,
  getPersoCoord,
  getBulletCoord,
  getCanonCoord,
  getFloorCoord,
} from "./coordinates.js"

const END_TIME = 16

const getCoord = time => ({
  bullet: getBulletCoord(time),
  perso: getPersoCoord(time),
  cloud: getCloudCoord(time),
  canon: getCanonCoord(time),
  floor: getFloorCoord(time),
})

const BulletGame = () => {
  const [time, setTime] = useState(-1)
  const [pause, setPause] = useState(true)
  const [coords, setCoords] = useState(getCoord(0))

  const [referentiel, setReferentiel] = useState("bullet")

  useEffect(() => {
    if (time < END_TIME && time >= 0 && !pause) {
      setCoords(getCoord(time))

      const timer = setTimeout(function() {
        setTime(time + 1)
      }, 100)

      return () => clearTimeout(timer)
    }
    if (time === -1) {
      setCoords(getCoord(0))
    }
  }, [time, pause])

  useEffect(() => {
    setCoords(getCoord(0))
    setTime(-1)
  }, [referentiel])

  return (
    <>
      <BulletGameVue coords={coords} referentiel={referentiel} />
      <BulletGameVue coords={coords} referentiel="floor" />

      <div style={{ display: "-webkit-inline-box" }}>
        <button
          style={{
            width: "1.5rem",
            height: "1.5rem",
          }}
          onClick={() => {
            if (time < END_TIME && time > 0) {
              setPause(!pause)
            } else {
              setTime(0)
              setPause(false)
            }
          }}
        >
          {time < END_TIME && time > 0 && !pause ? (
            <PauseIcon />
          ) : (
            <PlayArrowIcon />
          )}
        </button>
        <button
          style={{
            width: "1.5rem",
            height: "1.5rem",
          }}
          onClick={() => {
            setTime(-1)
            setPause(false)
          }}
        >
          <StopIcon />
        </button>
        <label for="referentiel">referentiel : </label>
        <select
          id="referentiel"
          onChange={event => setReferentiel(event.target.value)}
          value={referentiel}
        >
          {Object.keys(getCoord(0)).map(key => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}
export default BulletGame
