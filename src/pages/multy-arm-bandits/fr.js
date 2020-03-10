import React, { useState } from "react"

import Layout from "src/components/layout"
// import { Link } from "gatsby"
import SEO from "src/components/seo"

// import classes from "./style.module.scss"

import { CatList } from "src/components/MAB/demo"

const Page = () => {
  // deal with page state

  //render
  return (
    <Layout location="/multy-arm-bandits" currentLanguage="Français">
      <SEO title="Comment choisir son repas" />
      <h1>Comment choisir son repas</h1>
      <CatList
        catNumber={200}
        probaHappy={[0.7, 0.4]}
        buttonsColor={["blue", "red"]}
      />
    </Layout>
  )
}

export default Page
