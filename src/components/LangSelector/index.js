import React from "react"
import Button from "@material-ui/core/Button"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import { Link } from "gatsby"
import LanguageIcon from "@material-ui/icons/Language"
import classes from "./style.module.css"

const LangSelector = ({
  currentLanguage = "English",
  languages = [{ name: "Français", file: "fr" }, { name: "English", file: "" }],
  location = "/",
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  function handleClick(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.menuTitle}
      >
        <LanguageIcon />
        <span>{currentLanguage}</span>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        className={classes.menu}
      >
        {languages.map(language => (
          <MenuItem
            key={language.file}
            selected={currentLanguage === language.name}
          >
            {/* <p>{`${location}/${language.file}`}</p> */}
            <Link className={classes.link} to={`${location}/${language.file}`}>
              {language.name}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

export default LangSelector
