import React from "react"

import Layout from "src/components/layout"
import { Link } from "gatsby"
import SEO from "src/components/seo"

//components
import CompletTree from "src/components/tic-tac-toe/explanations/completTree"

//images
// import algoPicture from "src/components/tic-tac-toe/explanations/completTree"

const Page = () => (
  <Layout location="/tic-tac-toe/second-player-tree" currentLanguage="Français">
    <SEO title="Morpion" />

    <p>
      Cette page présente l'arbre des possibilités du premier joueur face à une
      IA. Le fonctionnement de l'IA, et les clés de lecture de cet arbre se
      trouvent dans <Link to="/tic-tac-toe/fr">l'article principal</Link>.
    </p>
    <noscript>
      Pour faire fonctionner les animations, merci d'activer votre javscript.
    </noscript>

    <CompletTree robot={1} lang="fr" />
  </Layout>
)

export default Page
