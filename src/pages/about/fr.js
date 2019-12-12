import React from "react"

import Layout from "src/components/layout"
import SEO from "src/components/seo"

import classes from "./About.module.scss"
import About from "src/components/About/fr"

const IndexPage = () => (
  <Layout location="/about" currentLanguage="Français">
    <SEO title="A propos" />
    <div className={classes.root}>
      <About />
    </div>
  </Layout>
)

export default IndexPage
