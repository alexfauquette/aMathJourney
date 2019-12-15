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
import { default as AboutEn } from "src/components/About/en"
import { default as AboutFr } from "src/components/About/fr"

const Layout = ({
  children,
  location,
  currentLanguage = "English",
  showAbout = false,
}) => (
  <div className={classes.root}>
    <Header
      siteTitle="A Mathematical Journey"
      {...{ currentLanguage, location }}
    />
    <main className={classes.main}>
      <article className={classes.article}>{children}</article>
      {showAbout ? (
        <div className={classes.aboutContainer}>
          {currentLanguage === "Français" ? <AboutFr /> : <AboutEn />}
        </div>
      ) : null}
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
