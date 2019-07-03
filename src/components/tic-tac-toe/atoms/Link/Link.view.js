import React from "react"

const Link = ({ x0, y0, x1, y1 }) => (
  <path
    style={{
      stroke: "var(--gray-700)",
      strokeWidth: 3,
      fill: "none",
    }}
    d={`M${x0} ${y0} H${(x1 + x0) / 2} V${y1} H${x1}`}
  />
)

export default Link
