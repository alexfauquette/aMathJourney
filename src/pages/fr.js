import React from "react"

import Layout from "src/components/layout"
import ArticleCard from "src/components/ArticleCard"
import SEO from "src/components/seo"

const IndexPage = () => (
  <Layout location="/" currentLanguage="Français" showAbout>
    <SEO title="Accueil" />
    <ArticleCard
      articleLocation="/tic-tac-toe/fr"
      title="AI pour un morpion"
      description="Pouvez vous battre une intelligence au morpion ? Tel est la défis de cet article. Essayez de battre mon IA avant de découvrir comment elle fonctionne."
    />
  </Layout>
)

export default IndexPage
