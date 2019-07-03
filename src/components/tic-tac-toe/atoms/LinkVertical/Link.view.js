import React from "react"

const Link = ({ x0, y0, x1, y1 }) => (
  <path
    style={{
      stroke: "var(--gray-700)",
      strokeWidth: 3,
      fill: "none",
    }}
    d={`M${x0} ${y0} V${(y1 + y0) / 2} H${x1} V${y1}`}
  />
)

export default Link
