import { element } from "prop-types"
import React, { useState, useEffect } from "react"

const computeTrajectory = (x0, lambda1, lambda2, s1, s2, t0, t1) => {
  const dt = 0.05
  const rep = []

  if (lambda1.y === 0) {
    const det = s1.x * s2.y - s1.y * s2.x

    const z0 = {
      //S^-1 x
      x: (s2.y * x0.x - s2.x * x0.y) / det,
      y: (-s1.y * x0.x + s1.x * x0.y) / det,
    }
    for (let t = t0; t < t1; t += dt) {
      rep.push({
        x:
          Math.exp(t * lambda1.x) * z0.x * s1.x +
          Math.exp(t * lambda2.x) * z0.y * s2.x,
        y:
          Math.exp(t * lambda1.x) * z0.x * s1.y +
          Math.exp(t * lambda2.x) * z0.y * s2.y,
      })
    }
    return rep //.map(({ x, y }) => ({
    //   x: s1.x * x + s2.x * y,
    //   y: s1.y * x + s2.y * y,
    // }))
  } else {
    const r0 = Math.sqrt(x0.x ** 2 + x0.y ** 2)
    const theta0 = Math.atan2(x0.y, x0.x)

    for (let t = t0; t < t1; t += dt) {
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
      rep.push(computeTrajectory({ x, y: 0 }, lambda1, lambda2, s1, s2, -10, 5))
      rep.push(
        computeTrajectory({ x: 0, y: x - 1 }, lambda1, lambda2, s1, s2, -10, 5)
      )
    }
  } else {
    for (let x = -5; x < 6; x++) {
      rep.push(computeTrajectory({ x, y: 5 }, lambda1, lambda2, s1, s2, -5, 5))
      rep.push(computeTrajectory({ x, y: -5 }, lambda1, lambda2, s1, s2, -5, 5))
    }
    for (let y = -4; y < 5; y++) {
      rep.push(computeTrajectory({ x: 5, y }, lambda1, lambda2, s1, s2, -5, 5))
      rep.push(computeTrajectory({ x: -5, y }, lambda1, lambda2, s1, s2, -5, 5))
    }
  }
  return rep
}

const ELEMENT_SIZE = 500
const VIEW_SIZE = 100
const MAX_X = 5
const SystemPlot = ({ lambda1, lambda2 }) => {
  const s1 = { x: 1, y: 1 }
  const s2 = { x: 4, y: 1 }
  const data = computeLines(lambda1, lambda2, s1, s2)

  const [pointer, setPointer] = useState(null)
  const [path, setPath] = useState([])

  useEffect(() => {
    if (pointer === null) {
      setPath(null)
    } else {
      setPath(computeTrajectory(pointer, lambda1, lambda2, s1, s2, 0, 10))
    }
  }, [pointer])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`-${VIEW_SIZE / 2} -${VIEW_SIZE / 2} ${VIEW_SIZE} ${VIEW_SIZE}`}
      style={{ width: `${ELEMENT_SIZE}px`, height: `${ELEMENT_SIZE}px` }}
      onMouseLeave={() => setPointer(null)}
      onMouseMove={(event) => {
        const x =
          (MAX_X * (event.nativeEvent.offsetX - ELEMENT_SIZE / 2)) /
          ELEMENT_SIZE
        const y =
          (MAX_X * (event.nativeEvent.offsetY - ELEMENT_SIZE / 2)) /
          ELEMENT_SIZE
        setPointer({
          x: x,
          y: y,
        })
      }}
    >
      <path d={`M -50 0 L 50 0`} style={{ stroke: "black" }} />
      <path d={`M 0 -50 L 0 50`} style={{ stroke: "black" }} />
      {data.map((element, index) => (
        <path
          key={index}
          d={`M ${element
            .map(
              ({ x, y }) =>
                `${(VIEW_SIZE / MAX_X) * x} ${(VIEW_SIZE / MAX_X) * y}`
            )
            .join(" L ")}`}
          style={{ stroke: "green", fill: "none" }}
        />
      ))}
      {pointer && pointer.x && pointer.y && (
        <circle
          cx={(VIEW_SIZE / MAX_X) * pointer.x}
          cy={(VIEW_SIZE / MAX_X) * pointer.y}
          r={2}
          style={{ fill: "red" }}
        />
      )}
      {path && (
        <path
          d={`M ${path
            .map(
              ({ x, y }) =>
                `${(VIEW_SIZE / MAX_X) * x} ${(VIEW_SIZE / MAX_X) * y}`
            )
            .join(" L ")}`}
          style={{ stroke: "red", fill: "none" }}
        />
      )}
    </svg>
  )
}

export default SystemPlot
