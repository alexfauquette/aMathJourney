import { element } from "prop-types"
import React, { useState, useEffect } from "react"

const computeTrajectory = (x0, lambda1, lambda2, s1, s2) => {
  const dt = 0.05
  const rep = []

  if (lambda1.y === 0) {
    for (let t = -10; t < 10; t += dt) {
      rep.push({
        x:
          Math.exp(t * lambda1.x) * x0.x * s1.x +
          Math.exp(t * lambda2.x) * x0.y * s2.x,
        y:
          Math.exp(t * lambda1.x) * x0.x * s1.y +
          Math.exp(t * lambda2.x) * x0.y * s2.y,
      })
    }
  } else {
    const r0 = Math.sqrt(x0.x ** 2 + x0.y ** 2)
    const theta0 = Math.atan2(x0.x, x0.y)

    for (let t = -5; t < 5; t += dt) {
      rep.push({
        x:
          Math.cos(theta0 - Math.abs(lambda1.y) * t) *
          r0 *
          Math.exp(lambda1.x * t),
        y:
          Math.sin(theta0 - Math.abs(lambda1.y) * t) *
          r0 *
          Math.exp(lambda1.x * t),
      })
    }
  }
  return rep
}

const computeLines = (lambda1, lambda2, s1, s2) => {
  const rep = []

  if (lambda1.y != 0) {
    for (let x = -5; x < 6; x += 2) {
      rep.push(computeTrajectory({ x, y: 0 }, lambda1, lambda2, s1, s2))
      rep.push(computeTrajectory({ x: 0, y: x - 1 }, lambda1, lambda2, s1, s2))
    }
  } else {
    for (let x = -5; x < 6; x++) {
      rep.push(computeTrajectory({ x, y: 5 }, lambda1, lambda2, s1, s2))
      rep.push(computeTrajectory({ x, y: -5 }, lambda1, lambda2, s1, s2))
    }
    for (let y = -4; y < 5; y++) {
      rep.push(computeTrajectory({ x: 5, y }, lambda1, lambda2, s1, s2))
      rep.push(computeTrajectory({ x: -5, y }, lambda1, lambda2, s1, s2))
    }
  }
  return rep
}

const SystemPlot = ({ lambda1, lambda2 }) => {
  const data = computeLines(lambda1, lambda2, { x: 1, y: 1 }, { x: 4, y: 1 })

  console.log(data[0])
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-50 -50 100 100"
      style={{ width: "500px", height: "500px" }}
      // onMouseUp={() => setDraggId(null)}
      // onMouseLeave={() => setDraggId(null)}
      // onMouseMove={
      //   draggId === null
      //     ? null
      //     : (event) => {
      //         let x = (5 * (event.nativeEvent.offsetX - 250)) / 250
      //         let y = (5 * (event.nativeEvent.offsetY - 250)) / 250
      //         x = x - (x % 0.1)
      //         y = y - (y % 0.1)

      //         if (lambda2.y === 0 && Math.abs(y) < 0.75) {
      //           // we are on real axis and do not move to much from it so we stay
      //           if (draggId === 1) {
      //             setLambda1({ ...lambda1, x })
      //           } else {
      //             setLambda2({ ...lambda2, x })
      //           }
      //         } else {
      //           // ware (or are going) to be in conjate complex case
      //           if (draggId === 1) {
      //             setLambda2({ x, y: -y })
      //             setLambda1({ x, y })
      //           } else {
      //             setLambda1({ x, y: -y })
      //             setLambda2({ x, y })
      //           }
      //         }
      //       }
      // }
    >
      <path d={`M -50 0 L 50 0`} style={{ stroke: "black" }} />
      <path d={`M 0 -50 L 0 50`} style={{ stroke: "black" }} />

      {data.map((element, index) => (
        <path
          key={index}
          d={`M ${element
            .map(({ x, y }) => `${10 * x} ${10 * y}`)
            .join(" L ")}`}
          style={{ stroke: "green", fill: "none" }}
        />
      ))}
    </svg>
  )
}

export default SystemPlot
