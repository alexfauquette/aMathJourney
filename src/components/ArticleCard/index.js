import React from "react"
import { Link } from "gatsby"
import classes from "./style.module.scss"

const ArticleCard = ({ articleLocation, title, image, description }) => {
  return (
    <Link to={articleLocation}>
      <div className={classes.root}>
        <h2>{title}</h2>
        {image && <img src={image} />}
        <p>{description}</p>
      </div>
    </Link>
  )
}

export default ArticleCard
