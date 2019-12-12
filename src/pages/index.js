import React from "react"

import Layout from "../components/layout"
import ArticleCard from "src/components/ArticleCard"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout location="/" showAbout>
    <SEO title="Home" />
    <ArticleCard
      articleLocation="/tic-tac-toe/"
      title="tic-tac-toe AI"
      description="Can you defeat an AI at tic-tac-toe? That's the challenge of this article. Lets try to beat it before studying how it works."
    />
  </Layout>
)

export default IndexPage
