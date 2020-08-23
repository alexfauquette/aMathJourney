import React from "react"

import Layout from "src/components/layout"
import SEO from "src/components/seo"

import BulletGame from "src/components/referentiel/bulletGame"
import GridGame from "src/components/referentiel/gridGame.js"
const Page = () => (
  <Layout location="/referentiel">
    <SEO title="referentiel" />

    <noscript>You need to enable JavaScript to run this app.</noscript>
    <h1>Mais t'es où (pas là)</h1>

    <p>
      Avant d'envoyer des fusées sur la lune, les physiciens ont du répondre à
      une question bien plus fondamentale : "Où sommes nous ?". Ca semble un peu
      bateau comme question. Mais testez l'exercice suivant : donnez au client
      la nouriture qu'il veut.
    </p>
    <GridGame />

    <p>
      Vous l'aurez remarqué, le premier client n'est pas très précis. Alors que
      le deuxième client peut être servit du premier coup. En effet, elle vous
      dit vouloir l'article située sur la{" "}
      <span style={{ color: "green" }}>deuxième ligne</span> et la{" "}
      <span style={{ color: "green" }}>troisième colone</span>. On appel cela
      les "<span style={{ color: "green" }}>coordonnées</span>". En plus, elle
      précise qu'elle compte les lignes et colonnes en partant{" "}
      <span style={{ color: "red" }}>du bas</span> et{" "}
      <span style={{ color: "red" }}>de la gauche</span>. On dit alors qu'elle
      vous donne "<span style={{ color: "red" }}>l'origine</span>". Si vous avez
      une <span style={{ color: "red" }}>origine</span> et un système de{" "}
      <span style={{ color: "green" }}>coordonnées</span>, vous obtenez un "
      <span style={{ color: "blue" }}>referentiel</span>".
    </p>
    <p>
      Le cas le plus courant reste les coordonnées terrestre. SI vous voulez
      indiquer votre position sur Terre, vous allez donnez votre latitude et
      votre longitude. Et par convention, on sait qu'il faut compter en partant
      de l'équateur et du méridien de Greenwich
    </p>

    <p>
      En mécanique, avant toute étude d'un système, il faut définir le
      référentiel que l'on va utiliser. Qu'est-ce qui va nous servir de repère
      lors de notre expérience. Ca peut être n'importe quoi. La Terre, la lune,
      un arbre. Évidement, il faut faire au plus simple. Si vous voulez étudier
      la chute d'un pomme, prenez le sol où l'arbre comme référentiel. Évitez de
      prendre un oiseau en plein vol. Ca ne serait pas impossible, mais beaucoup
      plus compliqué.
    </p>
    <p>
      Imaginez que vous tirez un boulet de canon. Qu'utiliseriez vous comme
      referentiel ? le sol, le canon, le boulet, votre cible ou un nuage de
      passage ? Testez, vous pouvez choisir ce que vous voulez comme référentiel
      pour l'image de gauche. Pour celle de droite, c'est le référentiel du sol
      qui est fixé.
    </p>
    <BulletGame />
  </Layout>
)

export default Page
