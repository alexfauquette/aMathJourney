import React from "react"
import profilePicture from "./images/AlexF-150.jpg"

const About = () => (
  <>
    <h2>About</h2>
    <img src={profilePicture} alt="profile" />
    <p>
      Welcome on my website! I'm a french graduate engineer. I enjoy math an
      computer science. This web site is still at its beginning. However, I hope
      you will like those{" "}
      <a href="https://explorabl.es/">explorable explanations</a> (explications
      If you have questions, avises or comments, do not hesitate to contact me
      by mail, <a href="https://twitter.com/AleFauquette">twitter</a> or{" "}
      <a href="https://www.linkedin.com/in/alexandre-fauquette/">linkedIn</a>.
    </p>
  </>
)
export default About
