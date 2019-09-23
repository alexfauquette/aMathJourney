import React from "react"

import Layout from "src/components/layout"
import ArticleCard from "src/components/ArticleCard"
import SEO from "src/components/seo"

import Graph from "src/components/Graph"

const g = {
  links: [{ from: "A", to: "B" }],
  nodes: { A: { x: 200, y: 100, r: 20 }, B: { x: 50, y: 50, r: 30 } },
}
const IndexPage = () => (
  <Layout location="/" currentLanguage="Français">
    <SEO title="Accueil" />
    <p>
      Bienvenu sur mon site, Je vous y trouverez des exmplications interactives.
    </p>

    <ArticleCard
      articleLocation="/tic-tac-toe/fr"
      title="AI pour un morpion"
      description="Pouvez vous battre une intelligence au morpion ? Tel est la défis de cet article. Essayez de battre mon IA avant de découvrir comment elle fonctionne."
    />

    <Graph graph={g} />
  </Layout>
)

export default IndexPage
