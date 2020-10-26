import React, { useState } from "react"

import Layout from "src/components/layout"
import SEO from "src/components/seo"

import EigenValueSelector from "src/components/linearSystem/eigenValueSelector"
import SystemPlot from "src/components/linearSystem/SystemPlot"
import BaseSelector from "src/components/linearSystem/baseSelector"

import classes from "./classes.module.scss"

const Page = () => {
  const [lambda1, setLambda1] = useState({ x: 1, y: 1 })
  const [lambda2, setLambda2] = useState({ x: -1, y: 1 })

  const [s1, setS1] = useState({ x: 1, y: 1 })
  const [s2, setS2] = useState({ x: -1, y: 1 })

  const [isDiagonalizable, setIsDiagonalizable] = useState(true)

  return (
    <Layout location="/referentiel">
      <SEO title="referentiel" />

      <noscript>You need to enable JavaScript to run this app.</noscript>
      <h1>Dyn Syst</h1>

      <div className={classes.paramameters}>
        <EigenValueSelector
          lambda1={lambda1}
          setLambda1={setLambda1}
          lambda2={lambda2}
          setLambda2={setLambda2}
          isDiagonalizable={isDiagonalizable}
          setIsDiagonalizable={setIsDiagonalizable}
        />
        <BaseSelector
          className={lambda1.y !== 0 ? classes.disable : classes.active}
          classes={classes}
          s1={s1}
          setS1={setS1}
          s2={s2}
          setS2={setS2}
        />
      </div>
      <SystemPlot
        lambda1={lambda1}
        lambda2={lambda2}
        s1={s1}
        s2={s2}
        isDiagonalizable={isDiagonalizable}
      />
    </Layout>
  )
}

export default Page
