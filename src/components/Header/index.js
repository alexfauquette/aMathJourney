import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import LangSelector from "../LangSelector"
import classes from "./style.module.scss"

const Header = ({
  siteTitle,
  currentLanguage = "English",
  location,
  languages = { Français: "fr", English: "" },
}) => (
  <header className={classes.header}>
    <div className={classes.container}>
      <h1 style={{ margin: 0 }}>
        <Link to={`/${languages[currentLanguage]}`} className={classes.title}>
          {siteTitle}
        </Link>{" "}
        {`${currentLanguage === "Français" ? "par" : "from"} `}
        <Link
          to={`/about/${languages[currentLanguage]}`}
          className={classes.subtitle}
        >
          Alexandre Fauquette
        </Link>
      </h1>
      <LangSelector
        currentLanguage={currentLanguage}
        location={location}
        style={{ float: "right" }}
      />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
