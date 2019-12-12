import React from "react"

import Layout from "src/components/layout"
import SEO from "src/components/seo"

import classes from "./About.module.scss"
import About from "src/components/About/en"

const IndexPage = () => (
  <Layout location="/about">
    <SEO title="About" />
    <div className={classes.root}>
      <About />
    </div>
  </Layout>
)

export default IndexPage
