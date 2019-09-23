import React from "react"

const Link = ({ x1, y1, r1, x2, y2, r2, label }) => {
  return <path d={`M${x1} ${y1} L${x2} ${y2}`} stroke="black" stroke-width="1px" />
}
export default Link
