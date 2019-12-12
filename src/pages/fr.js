import React from "react"

import Layout from "src/components/layout"
import ArticleCard from "src/components/ArticleCard"
import SEO from "src/components/seo"

const IndexPage = () => (
  <Layout location="/" currentLanguage="Français" showAbout>
    <SEO title="Accueil" />
    <ArticleCard
      articleLocation="/tic-tac-toe/fr"
      title="Peut on battre une IA au morpion ?"
      description="La plupart des articles scientifiques en intelligences artificielle qui
      font sensation parlent d'ordinateur battant le champion du monde d’échec,
      de Go, et bientôt Dota. Dans cet article, on va retourner à l'age de
      pierre de l'IA pour jouer au morpion."
    />
  </Layout>
)

export default IndexPage
