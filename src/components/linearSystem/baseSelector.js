import React, { useState } from "react"
import useDimensions from "../../utils/getDimensions"

const BaseSelector = ({ s1, setS1, s2, setS2, classes, ...props }) => {
  const [draggId, setDraggId] = useState(null)
  const [ref, { width, height }] = useDimensions()

  return (
    <div {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-50 -50 100 100"
        ref={ref}
        onMouseUp={() => setDraggId(null)}
        onMouseLeave={() => setDraggId(null)}
        onMouseMove={
          draggId === null
            ? null
            : (event) => {
                let x = (10 * (event.nativeEvent.offsetX - width / 2)) / width
                let y = (10 * (event.nativeEvent.offsetY - height / 2)) / height
                x = x - (x % 0.1)
                y = y - (y % 0.1)

                if (x ** 2 + y ** 2 > 0.5) {
                  if (draggId === 1 && Math.abs(y * s2.x - x * s2.y) > 0.5) {
                    setS1({ x, y })
                  } else if (
                    draggId === 2 &&
                    Math.abs(y * s1.x - x * s1.y) > 0.5
                  ) {
                    setS2({ x, y })
                  }
                }
              }
        }
        className={draggId ? classes.dragging : ""}
      >
        <path d={`M -50 0 L 50 0`} style={{ stroke: "black" }} />
        <path d={`M 0 -50 L 0 50`} style={{ stroke: "black" }} />

        <path
          d={`M 0 0 L ${10 * s1.x} ${10 * s1.y}`}
          style={{ stroke: "black" }}
        />
        <path
          d={`M 0 0 L ${10 * s2.x} ${10 * s2.y}`}
          style={{ stroke: "red" }}
        />

        <circle
          className={`${draggId ? classes.dragging : classes.draggable} ${
            classes.fadeElement
          }`}
          cx={10 * s1.x}
          cy={10 * s1.y}
          r={5}
          onMouseDown={() => setDraggId(1)}
        />
        <circle
          className={`${draggId ? classes.dragging : classes.draggable} ${
            classes.fadeElement
          }`}
          cx={10 * s2.x}
          cy={10 * s2.y}
          r={5}
          onMouseDown={() => setDraggId(2)}
          style={{ fill: "red" }}
        />
      </svg>
    </div>
  )
}

export default BaseSelector
