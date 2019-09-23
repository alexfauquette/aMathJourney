import React from "react"

const Node = ({ id, x, y, r, label }) => {
  return (
    <React.Fragment>
      <circle cx={x} cy={y} r={r} stroke="black" strokeWidth="1" fill="white" />
      <text x={x} y={y} textAnchor="middle" alignmentBaseline="middle" stroke="black" strokeWidth="1px">
        {label ? label : id ? id : ""}
      </text>
    </React.Fragment>
  )
}

export default Node
