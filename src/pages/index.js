import React from "react"

import Layout from "../components/layout"
import ArticleCard from "src/components/ArticleCard"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout location="/" showAbout>
    <SEO title="Home" />
    <ArticleCard
      articleLocation="/tic-tac-toe/"
      title="Can you defeat an AI at tic-tac-toe?"
      description="Most of the exciting scientific articles in artificial intelligence are
      about computer defeating human at famous game. For this article lets just
      consider the simple game of tic-tac-toe and solve it with technics coming
      from the stone age of AI."
    />
    <ArticleCard
      articleLocation="/dynamic-programming/"
      title="Align DNA"
      description="Improve your complexity with dynamic programming"
    />
  </Layout>
)

export default IndexPage
