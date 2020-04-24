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
    <div className={classes.firstLine}>
      <Link to={`/${languages[currentLanguage]}`} className={classes.title}>
        <h1 style={{ margin: 0 }}>{siteTitle}</h1>
      </Link>
      <LangSelector
        currentLanguage={currentLanguage}
        location={location}
        style={{ float: "right" }}
      />
    </div>
    {/* <ol className={classes.menu}>
      <li>
        <Link
          to={`/about/${languages[currentLanguage]}`}
          className={classes.subtitle}
        >
          About
        </Link>
      </li>
      <li>
        <Link to={`/${languages[currentLanguage]}`} className={classes.title}>
          Home
        </Link>
      </li>
    </ol> */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
