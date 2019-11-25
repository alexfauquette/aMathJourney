import React from "react"

import Layout from "src/components/layout"
import SEO from "src/components/seo"

import classes from "./About.module.scss"
import profilePicture from "./images/AlexF-150.jpg"

const IndexPage = () => (
  <Layout location="/about">
    <SEO title="About" />
    <div className={classes.root}>
      <h2>About</h2>
      <img src={profilePicture} alt="profile" />
      <p>
        Welcome on my website! I'm a french graduate engineer. I enjoy math an
        computer science. This web site is still at its beginning. However, I
        hope you will like those{" "}
        <a href="https://explorabl.es/">explorable explanations</a>{" "}
        (explications If you have questions, avises or comments, do not hesitate
        to contact me by mail,{" "}
        <a href="https://twitter.com/AleFauquette">twitter</a> or{" "}
        <a href="https://www.linkedin.com/in/alexandre-fauquette/">linkedIn</a>.
      </p>
    </div>
  </Layout>
)

export default IndexPage
