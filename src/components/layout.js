/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"

import Header from "./Header"
import "./layout.css"
import classes from "./layout.module.scss"

const Layout = ({ children, location, currentLanguage = "English" }) => (
  <div className={classes.root}>
    <Header
      siteTitle="A Mathematical Journey"
      {...{ currentLanguage, location }}
    />
    <main>
      <article className={classes.article}>{children}</article>
    </main>
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
