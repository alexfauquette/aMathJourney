import React from "react"
import { Grid, InteractiveCircle } from "../atoms/Grid"

const InteractiveGrid = () => {
  return (
    <svg height="500" width="500">
      <Grid word1="ABC" word2="DEFGH" />
      <InteractiveCircle
        word1="ABC"
        word2="DEFGH"
        onEnter={(a, b) => () => {
          console.log({ a, b })
        }}
      />
    </svg>
  )
}

export default InteractiveGrid
