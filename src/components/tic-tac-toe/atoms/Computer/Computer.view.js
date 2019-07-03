import React from "react"

const Computer = ({ x, y, width, height }) => (
  <path
    style={{
      stroke: "var(--gray-700)",
      strokeWidth: 3,
      fill: "none",
    }}
    d={`M${x0} ${y0} H${(x0 + x1) / 2} ${(x0 + x1) / 2} V${(y0 + y1) /
      2} ${y0} H${x1} ${y1}`}
  />
)

export default Computer
