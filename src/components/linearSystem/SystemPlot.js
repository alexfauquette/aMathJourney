import { element } from "prop-types"
import React, { useState, useEffect } from "react"
import Checkbox from "@material-ui/core/Checkbox"

import useDimensions from "../../utils/getDimensions"
const computeTrajectory = (
  x0,
  lambda1,
  lambda2,
  s1,
  s2,
  isDiagonalizable,
  t0,
  t1
) => {
  let dt = 0.05
  const rep = []

  if (lambda1.y === 0) {
    const det = s1.x * s2.y - s1.y * s2.x

    const z0 = {
      //S^-1 x
      x: (s2.y * x0.x - s2.x * x0.y) / det,
      y: (-s1.y * x0.x + s1.x * x0.y) / det,
    }

    if (t0 < t1) {
      for (let t = t0; t < t1; t += dt) {
        if (lambda2.x === lambda1.x && !isDiagonalizable) {
          rep.push({
            x:
              Math.exp(t * lambda1.x) * z0.x * s1.x +
              Math.exp(t * lambda2.x) * z0.y * s2.x +
              t * Math.exp(t * lambda1.x) * z0.y * s1.x,
            y:
              Math.exp(t * lambda1.x) * z0.x * s1.y +
              Math.exp(t * lambda2.x) * z0.y * s2.y +
              t * Math.exp(t * lambda1.x) * z0.y * s1.y,
          })
        } else {
          rep.push({
            x:
              Math.exp(t * lambda1.x) * z0.x * s1.x +
              Math.exp(t * lambda2.x) * z0.y * s2.x,
            y:
              Math.exp(t * lambda1.x) * z0.x * s1.y +
              Math.exp(t * lambda2.x) * z0.y * s2.y,
          })
        }

        if (
          Math.abs(rep[rep.length - 1].x) > 10 ||
          Math.abs(rep[rep.length - 1].x) > 10
        ) {
          return rep
        }
      }
    } else {
      for (let t = t0; t > t1; t -= dt) {
        if (lambda2.x === lambda1.x && !isDiagonalizable) {
          rep.push({
            x:
              Math.exp(t * lambda1.x) * z0.x * s1.x +
              Math.exp(t * lambda2.x) * z0.y * s2.x +
              t * Math.exp(t * lambda1.x) * z0.y * s1.x,
            y:
              Math.exp(t * lambda1.x) * z0.x * s1.y +
              Math.exp(t * lambda2.x) * z0.y * s2.y +
              t * Math.exp(t * lambda1.x) * z0.y * s1.y,
          })
        } else {
          rep.push({
            x:
              Math.exp(t * lambda1.x) * z0.x * s1.x +
              Math.exp(t * lambda2.x) * z0.y * s2.x,
            y:
              Math.exp(t * lambda1.x) * z0.x * s1.y +
              Math.exp(t * lambda2.x) * z0.y * s2.y,
          })
        }

        if (
          Math.abs(rep[rep.length - 1].x) > 10 ||
          Math.abs(rep[rep.length - 1].x) > 10
        ) {
          return rep
        }
      }
    }
    return rep
  } else {
    const r0 = Math.sqrt(x0.x ** 2 + x0.y ** 2)
    const theta0 = Math.atan2(x0.y, x0.x)
    if (t0 < t1) {
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

        if (
          Math.abs(rep[rep.length - 1].x) > 10 ||
          Math.abs(rep[rep.length - 1].x) > 10
        ) {
          return rep
        }
      }
    } else {
      for (let t = t0; t > t1; t -= dt) {
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

        if (
          Math.abs(rep[rep.length - 1].x) > 10 ||
          Math.abs(rep[rep.length - 1].x) > 10
        ) {
          return rep
        }
      }
    }
  }
  return rep
}

const computeLines = (lambda1, lambda2, s1, s2, isDiagonalizable) => {
  const rep = []

  if (lambda1.y != 0) {
    for (let x = -5; x < 6; x += 10) {
      if (Math.abs(lambda1.x) > 1) {
        rep.push(
          computeTrajectory(
            { x, y: -x },
            lambda1,
            lambda2,
            s1,
            s2,
            isDiagonalizable,
            0,
            5
          )
        )
        rep.push(
          computeTrajectory(
            { x, y: x },
            lambda1,
            lambda2,
            s1,
            s2,
            isDiagonalizable,
            0,
            5
          )
        )
        rep.push(
          computeTrajectory(
            { x, y: -x },
            lambda1,
            lambda2,
            s1,
            s2,
            isDiagonalizable,
            0,
            -5
          )
        )
        rep.push(
          computeTrajectory(
            { x, y: x },
            lambda1,
            lambda2,
            s1,
            s2,
            isDiagonalizable,
            0,
            -5
          )
        )
      }
      if (lambda1.x !== 0) {
        rep.push(
          computeTrajectory(
            { x, y: 0 },
            lambda1,
            lambda2,
            s1,
            s2,
            isDiagonalizable,
            0,
            5
          )
        )
        rep.push(
          computeTrajectory(
            { x: 0, y: x },
            lambda1,
            lambda2,
            s1,
            s2,
            isDiagonalizable,
            0,
            5
          )
        )
        rep.push(
          computeTrajectory(
            { x, y: 0 },
            lambda1,
            lambda2,
            s1,
            s2,
            isDiagonalizable,
            0,
            -5
          )
        )
        rep.push(
          computeTrajectory(
            { x: 0, y: x },
            lambda1,
            lambda2,
            s1,
            s2,
            isDiagonalizable,
            0,
            -5
          )
        )
      }
      if (lambda1.x === 0) {
        rep.push(
          computeTrajectory(
            { x: 0, y: 1 },
            lambda1,
            lambda2,
            s1,
            s2,
            isDiagonalizable,
            0,
            10
          )
        )
        rep.push(
          computeTrajectory(
            { x: 0, y: 3 },
            lambda1,
            lambda2,
            s1,
            s2,
            isDiagonalizable,
            0,
            10
          )
        )
        rep.push(
          computeTrajectory(
            { x: 0, y: 5 },
            lambda1,
            lambda2,
            s1,
            s2,
            isDiagonalizable,
            0,
            10
          )
        )
      }
    }
  } else {
    let t0 = 0
    let t1 = 5
    if (lambda1.x >= 0 && lambda2.x >= 0) {
      t0 = -5
      t1 = 0
    }
    for (let x = -5.5; x < 6; x += 2) {
      rep.push(
        computeTrajectory(
          { x, y: 5 },
          lambda1,
          lambda2,
          s1,
          s2,
          isDiagonalizable,
          t0,
          t1
        )
      )
      rep.push(
        computeTrajectory(
          { x, y: -5 },
          lambda1,
          lambda2,
          s1,
          s2,
          isDiagonalizable,
          t0,
          t1
        )
      )
    }
    for (let y = -4.5; y < 5; y += 2) {
      rep.push(
        computeTrajectory(
          { x: 5, y },
          lambda1,
          lambda2,
          s1,
          s2,
          isDiagonalizable,
          t0,
          t1
        )
      )
      rep.push(
        computeTrajectory(
          { x: -5, y },
          lambda1,
          lambda2,
          s1,
          s2,
          isDiagonalizable,
          t0,
          t1
        )
      )
    }
  }
  return rep
}

const ELEMENT_SIZE = 500
const VIEW_SIZE = 100
const MAX_X = 10
const SystemPlot = ({
  lambda1,
  lambda2,
  s1,
  s2,
  isDiagonalizable,
  ...props
}) => {
  const data = computeLines(lambda1, lambda2, s1, s2, isDiagonalizable)

  const [pointer, setPointer] = useState(null)
  const [showBaseVectors, setShowBaseVectors] = useState(true)
  const [path, setPath] = useState([])

  const [ref, { width, height }] = useDimensions()

  useEffect(() => {
    if (pointer === null) {
      setPath(null)
    } else {
      setPath(
        computeTrajectory(
          pointer,
          lambda1,
          lambda2,
          s1,
          s2,
          isDiagonalizable,
          0,
          10
        )
      )
    }
  }, [pointer])

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "left",
        alignItems: "flex-start",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        viewBox={`-${VIEW_SIZE / 2} -${
          VIEW_SIZE / 2
        } ${VIEW_SIZE} ${VIEW_SIZE}`}
        style={{ width: "fit-content" }}
        onMouseLeave={() => setPointer(null)}
        onMouseMove={(event) => {
          const x = (MAX_X * (event.nativeEvent.offsetX - width / 2)) / width
          const y = (MAX_X * (event.nativeEvent.offsetY - height / 2)) / height
          setPointer({
            x: x,
            y: y,
          })
        }}
        {...props}
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
            style={{ fill: "gray" }}
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
            style={{ stroke: "gray", fill: "none" }}
          />
        )}

        {showBaseVectors && (
          <>
            {s1.x === 0 ? (
              <path
                d={`M 0 50 L 0 -50`}
                style={{
                  stroke: "black",
                  fill: "none",
                  strokeDasharray: "4, 4",
                }}
              />
            ) : (
              <path
                d={`M ${-50} ${(-s1.y * 50) / s1.x} L ${50} ${
                  (s1.y * 50) / s1.x
                }`}
                style={{
                  stroke: "black",
                  fill: "none",
                  strokeDasharray: "4, 4",
                }}
              />
            )}
            {s2.x === 0 ? (
              <path
                d={`M 0 50 L 0 -50`}
                style={{ stroke: "red", fill: "none", strokeDasharray: "4, 4" }}
              />
            ) : (
              <path
                d={`M ${-50} ${(-s2.y * 50) / s2.x} L ${50} ${
                  (s2.y * 50) / s2.x
                }`}
                style={{ stroke: "red", fill: "none", strokeDasharray: "4, 4" }}
              />
            )}
          </>
        )}
      </svg>

      <Checkbox
        checked={showBaseVectors}
        onChange={(event) => setShowBaseVectors(event.target.checked)}
      />
      <label>Show S vectors</label>
    </div>
  )
}

export default SystemPlot
