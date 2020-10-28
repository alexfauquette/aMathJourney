import React, { useState } from "react"

import MathJax from "react-mathjax2"

import Layout from "src/components/layout"
import SEO from "src/components/seo"

import EigenValueSelector from "src/components/linearSystem/eigenValueSelector"
import SystemPlot from "src/components/linearSystem/SystemPlot"
import BaseSelector from "src/components/linearSystem/baseSelector"

import classes from "./classes.module.scss"

const displayImaginary = ({ x, y }) => {
  y = -y
  return `${x.toFixed(1)}${
    y > 0 ? `+i${y.toFixed(1)}` : y < 0 ? `-i${Math.abs(y.toFixed(1))}` : ""
  }`
}

const displayS = ({ x: x1, y: y1 }, { x: x2, y: y2 }) => {
  y1 = -y1
  y2 = -y2
  return `[[${x1.toFixed(1)}, ${x2.toFixed(1)}],[${y1.toFixed(1)}, ${y2.toFixed(
    1
  )}]]`
}

const displayA = (
  { x: l1Re, y: l1Im },
  { x: l2Re, y: l2Im },
  { x: s1x, y: s1y },
  { x: s2x, y: s2y },
  isDiagonalizable
) => {
  l1Im = -l1Im
  l2Im = -l2Im
  s1y = -s1y
  s2y = -s2y

  const det = s1x * s2y - s1y * s2x
  let DS11Re = l1Re * s1x
  let DS12Re = l1Re * s2x
  let DS21Re = l2Re * s1y
  let DS22Re = l2Re * s2y

  if (!isDiagonalizable && l1Im === 0) {
    DS11Re = DS11Re + s1y
    DS12Re = DS12Re + s2y
  }

  const a11Re = (s2y * DS11Re - s2x * DS21Re) / det
  const a12Re = (s2y * DS12Re - s2x * DS22Re) / det
  const a21Re = (-s1y * DS11Re + s1x * DS21Re) / det
  const a22Re = (-s1y * DS12Re + s1x * DS22Re) / det

  if (l1Im !== 0) {
    let DS11Im = l1Im * s1x
    let DS12Im = l1Im * s2x
    let DS21Im = l2Im * s1y
    let DS22Im = l2Im * s2y

    const a11Im = (s2y * DS11Im - s2x * DS21Im) / det
    const a12Im = (s2y * DS12Im - s2x * DS22Im) / det
    const a21Im = (-s1y * DS11Im + s1x * DS21Im) / det
    const a22Im = (-s1y * DS12Im + s1x * DS22Im) / det

    return `[[${displayImaginary({ x: a11Re, y: a11Im })}, ${displayImaginary({
      x: a12Re,
      y: a12Im,
    })}], [${displayImaginary({ x: a21Re, y: a21Im })}, ${displayImaginary({
      x: a22Re,
      y: a22Im,
    })}]]`
  }

  return `[[${a11Re.toFixed(1)}, ${a12Re.toFixed(1)}], [${a21Re.toFixed(
    1
  )}, ${a22Re.toFixed(1)}]]`
}
const Page = () => {
  const [lambda1, setLambda1] = useState({ x: -3, y: 0 })
  const [lambda2, setLambda2] = useState({ x: -1, y: 0 })

  const [s1, setS1] = useState({ x: 1, y: 1 })
  const [s2, setS2] = useState({ x: -1, y: 1 })

  const [isDiagonalizable, setIsDiagonalizable] = useState(true)

  return (
    <Layout location="/referentiel" isFull>
      <SEO title="referentiel" />

      <noscript>You need to enable JavaScript to run this app.</noscript>
      <h1>Dyn Syst</h1>

      <div className={classes.paramameters}>
        <div>
          <MathJax.Context input="ascii">
            <MathJax.Node inline>{`D = [[${displayImaginary(lambda1)}, ${
              !isDiagonalizable && lambda1.x === lambda2.x && lambda2.y === 0
                ? "1"
                : "0"
            }],[0,${displayImaginary(lambda2)}]]`}</MathJax.Node>
          </MathJax.Context>
        </div>
        <div>
          <MathJax.Context input="ascii">
            <MathJax.Node inline>{`S = ${displayS(s1, s2)}`}</MathJax.Node>
          </MathJax.Context>
        </div>

        <div>
          <MathJax.Context input="ascii">
            <MathJax.Node inline>{`A = S^{-1}DS = ${displayA(
              lambda1,
              lambda2,
              s1,
              s2,
              isDiagonalizable
            )}`}</MathJax.Node>
          </MathJax.Context>
        </div>
      </div>
      <div className={classes.paramameters}>
        <EigenValueSelector
          lambda1={lambda1}
          setLambda1={setLambda1}
          lambda2={lambda2}
          setLambda2={setLambda2}
          isDiagonalizable={isDiagonalizable}
          setIsDiagonalizable={setIsDiagonalizable}
          classes={classes}
        />
        <BaseSelector
          className={lambda1.y !== 0 ? classes.disable : classes.active}
          s1={s1}
          setS1={setS1}
          s2={s2}
          setS2={setS2}
          classes={classes}
        />
        <div></div>
      </div>
      <SystemPlot
        lambda1={lambda1}
        lambda2={lambda2}
        s1={s1}
        s2={s2}
        isDiagonalizable={isDiagonalizable}
        className={classes.removeInteractions}
      />
    </Layout>
  )
}

export default Page
