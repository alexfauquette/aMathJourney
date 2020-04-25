import React from "react"
import { Link } from "gatsby"

import Layout from "src/components/layout"
import SEO from "src/components/seo"

//components
import CompletTree from "src/components/tic-tac-toe/explanations/completTree"

const Page = () => (
  <Layout location="/tic-tac-toe/second-player-tree">
    <SEO title="Morpion" />
    <p>
      This web page expose the tree of possibilities at tic-tac-toe for the
      first player against a specific AI. You can find explanations about the
      tree and the AI algorithm in{" "}
      <Link to="/tic-tac-toe/fr">the related article</Link>.
    </p>

    <noscript>You need to enable JavaScript to run this app.</noscript>

    <CompletTree robot={1} lang="en" />
  </Layout>
)

export default Page
