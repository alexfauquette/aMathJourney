import React from "react"

import Layout from "src/components/layout"
import SEO from "src/components/seo"

import EigenValueSelector from "src/components/linearSystem/eigenValueSelector"

const Page = () => (
  <Layout location="/referentiel">
    <SEO title="referentiel" />

    <noscript>You need to enable JavaScript to run this app.</noscript>
    <h1>Dyn Syst</h1>

    <EigenValueSelector />
  </Layout>
)

export default Page
