import { element } from "prop-types"
import React, { useState, useEffect } from "react"
import Slider from "@material-ui/core/Slider"
import SystemPlot from "./SystemPlot"

const EigenValueSelector = () => {
  const [lambda1, setLambda1] = useState({ x: 1, y: 1 })
  const [lambda2, setLambda2] = useState({ x: -1, y: 1 })
  const [draggId, setDraggId] = useState(null)

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-50 -50 100 100"
        style={{ width: "500px", height: "500px" }}
        onMouseUp={() => setDraggId(null)}
        onMouseLeave={() => setDraggId(null)}
        onMouseMove={
          draggId === null
            ? null
            : (event) => {
                let x = (5 * (event.nativeEvent.offsetX - 250)) / 250
                let y = (5 * (event.nativeEvent.offsetY - 250)) / 250
                x = x - (x % 0.1)
                y = y - (y % 0.1)

                if (lambda2.y === 0 && Math.abs(y) < 0.75) {
                  // we are on real axis and do not move to much from it so we stay
                  if (draggId === 1) {
                    setLambda1({ ...lambda1, x })
                  } else {
                    setLambda2({ ...lambda2, x })
                  }
                } else {
                  // ware (or are going) to be in conjate complex case
                  if (draggId === 1) {
                    setLambda2({ x, y: -y })
                    setLambda1({ x, y })
                  } else {
                    setLambda1({ x, y: -y })
                    setLambda2({ x, y })
                  }
                }
              }
        }
      >
        <path d={`M -50 0 L 50 0`} style={{ stroke: "black" }} />
        <path d={`M 0 -50 L 0 50`} style={{ stroke: "black" }} />
        <circle
          cx={10 * lambda1.x}
          cy={10 * lambda1.y}
          r={5}
          onMouseDown={() => setDraggId(1)}
        />
        <circle
          cx={10 * lambda2.x}
          cy={10 * lambda2.y}
          r={5}
          onMouseDown={() => setDraggId(2)}
          style={{ fill: "red" }}
        />
      </svg>
      <Slider
        value={lambda1.x}
        onChange={(_, newValue) => {
          if (lambda1.y === 0) {
            setLambda1({ ...lambda1, x: newValue })
          } else {
            setLambda1({ ...lambda1, x: newValue })
            setLambda2({ ...lambda2, x: newValue })
          }
        }}
        aria-labelledby="continuous-slider"
        min={-5}
        max={5}
        name={"Re(L1)"}
        step={0.1}
      />

      <Slider
        value={lambda2.x}
        onChange={(_, newValue) => {
          if (lambda2.y === 0) {
            setLambda2({ ...lambda2, x: newValue })
          } else {
            setLambda1({ ...lambda1, x: newValue })
            setLambda2({ ...lambda2, x: newValue })
          }
        }}
        aria-labelledby="continuous-slider"
        min={-5}
        max={5}
        name={"Re(L2)"}
        step={0.1}
      />

      <Slider
        value={lambda1.y}
        onChange={(_, newValue) => {
          setLambda1({ ...lambda1, y: newValue })
          setLambda2({ ...lambda1, y: -newValue })
        }}
        aria-labelledby="continuous-slider"
        min={0}
        max={5}
        name={"Im(L1)"}
        step={0.1}
      />

      <SystemPlot lambda1={lambda1} lambda2={lambda2} />
    </>
  )
}

export default EigenValueSelector
