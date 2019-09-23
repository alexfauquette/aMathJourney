import React from "react"
import Node from "./node"
import Link from "./link"

const Graph = ({ graph }) => {
  return (
    <svg>
      {graph.links.map(link => {
        const node1 = graph.nodes[link.from]
        const node2 = graph.nodes[link.to]
        return (
          <Link
            x1={node1.x}
            y1={node1.y}
            r1={node1.r}
            x2={node2.x}
            y2={node2.y}
            r2={node2.r}
            key={`${link.from}-${link.to}`}
          />
        )
      })}
      {Object.keys(graph.nodes).map(nodeKey => (
        <Node {...graph.nodes[nodeKey]} id={nodeKey} key={nodeKey} />
      ))}
    </svg>
  )
}

export default Graph
