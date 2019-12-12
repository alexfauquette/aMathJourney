import React from "react"
import profilePicture from "./images/AlexF-150.jpg"

const About = () => (
  <>
    <h2>A propos</h2>
    <img src={profilePicture} alt="profile" />
    <p>
      Bienvenu sur mon site (en pleine construction). Je suis un jeune ingénieur
      français, passionné de mathématiques et d'informatique. J'espère que ces{" "}
      <a href="https://explorabl.es/">explorable explanations</a> (explications
      explorables ?) vous plairont. Si vous avez des questions, remarques, avis,
      ou si vous voulez juste discutez, vous pouvez me contacter par mail, sur{" "}
      <a href="https://twitter.com/AleFauquette">twitter</a> ou{" "}
      <a href="https://www.linkedin.com/in/alexandre-fauquette/">linkedin</a>.
    </p>
  </>
)
export default About
