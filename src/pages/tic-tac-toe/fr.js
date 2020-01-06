import React from "react"

import Layout from "src/components/layout"
import { Link } from "gatsby"
import SEO from "src/components/seo"

//components
import PlayableIntro from "src/components/tic-tac-toe/explanations/intro"
import History from "src/components/tic-tac-toe/explanations/history"
import TreeIntro from "src/components/tic-tac-toe/explanations/introTree"
import RecurrenceExample from "src/components/tic-tac-toe/explanations/recurrence"
import ComputerView from "src/components/tic-tac-toe/explanations/computerView"
import TreeSearch from "src/components/tic-tac-toe/explanations/treeSearch"
import CompletTree from "src/components/tic-tac-toe/explanations/completTree"

//images
import algoPicture from "./images/algo.svg"
import possibleEnds from "./images/ends.svg"
const Page = () => (
  <Layout location="/tic-tac-toe" currentLanguage="Français">
    <SEO title="Morpion" />

    <noscript>
      Pour faire fonctionner les animations, merci d'activer votre javscript.
    </noscript>

    <h1>Peut on battre une IA au morpion?</h1>

    <p>
      La plupart des articles scientifiques en intelligences artificielle qui
      font sensation parlent d'ordinateur battant le champion du monde d’échec,
      de Go, et bientôt Dota. Dans cet article, on va retourner à l'age de
      pierre de l'IA pour jouer au morpion.
    </p>
    <p>
      Mais avant d'en dire plus, voyons à quel point votre ordinateur est bon au
      morpion. Pour rappel, le morpion se joue sur une grille de taille 3x3. Les
      joueurs posent l'un après l'autre leur symbole dans une case, le premier à
      en avoir aligné 3 à gagner. Par défaut, le premier joueur joue les croix,
      et le deuxième les ronds.
    </p>

    <PlayableIntro />

    <h2>Comment votre ordinateur voit le monde.</h2>

    <p>
      Pour votre ordinateur, le monde se limite à des grilles de morpion. C'est
      un peu limité comme vision du monde, mais ça lui suffit pour vous mettre
      la pâtée. Quand on commence une partie, l'ordinateur voit une grille vide.
      Si c'est son tour de jouer, il choisit une case et affiche le plateau en
      remplissant la case qu'il a choisi. Quand c'est à vous de jouer il attend
      que vous choisissiez une case pour faire avancer le jeu.
    </p>

    <History />

    <p>
      Jusque-là pas grand-chose de spécial. Une partie de morpion c'est une
      suite de différentes grilles, de plus en plus complète. Mais la puissance
      de l'ordinateur, c'est qu'il peut retourner facilement dans le passer pour
      tester d'autre possibilités. Dans l'exemple ci-dessous, le premier joueur
      réalise qu'il s'est trompé en choisissant son deuxième coup. Qu'il aurait
      pu gagner en jouant autrement. Ce n'est qu'un exemple, mais avec beaucoup
      de patience, vous pouvez afficher toutes les parties possibles et
      imaginables.
    </p>

    <TreeIntro />

    <p>
      Et voila, un magnifique arbre, avec à gauche sa racine d'où partent toutes
      les parties de morpion imaginable, et une ramification à chaque grille.
      Bien sur pour un humain, tester toutes les possibilités serait long et
      ennuyeux. Mais votre ordinateur, ne se plein (presque) jamais lui. On peut
      donc lui demander de calculer toutes les parties de morpion possibles. À
      partir de cette connaissance, on va pouvoir calculer si un joueur à une
      stratégie gagnante ou pas, et devenir les maitres de morpion{" "}
      <span role="img" aria-label="evil">
        👹
      </span>
      .
    </p>

    <p>
      Pour être précis, l'ordinateur peut classer les grilles de morpion en
      trois catégories.
    </p>
    <ol>
      <li>
        <b>
          <span style={{ color: "blue" }}>X</span> gagne
        </b>{" "}
        : Le joueur <span style={{ color: "blue" }}>X</span> à un moyen de
        gagner quelque soit les choix de <span style={{ color: "red" }}>O</span>
        .
      </li>
      <li>
        <b>
          <span style={{ color: "red" }}>O</span> gagne
        </b>
        : Le joueur <span style={{ color: "red" }}>O</span> à un moyen de gagner
        quelque soit les choix de <span style={{ color: "blue" }}>X</span>
      </li>
      <li>
        <b>
          <span style={{ color: "orange" }}>nul</span>
        </b>
        : Aucun des deux joueurs n'a de stratégie pour gagner avec certitude.
      </li>
    </ol>
    <p>
      Bien sur, l'ordinateur prendra toujours le meilleur choix pour lui. Il va
      tester toutes les actions qu'il peut jouer, et regarder à quelle catégorie
      appartient la grille qu'il obtient. Il jouera en priorité les actions qui
      donne une grille le faisant gagner (eh oui, il veut gagner{" "}
      <span role="img" aria-label="angel">
        👼
      </span>
      ). Sinon, il va jouer une action qui donne match nul (c'est la vie, on ne
      peut pas toujours gagner{" "}
      <span role="img" aria-label="disapointed">
        😒
      </span>
      ). Et s'il n'y en a pas, il est obligé de jouer un coup qui donne une
      grille gagnante pour son adversaire{" "}
      <span role="img" aria-label="crying">
        😭
      </span>
      .
    </p>
    <p>
      Voilà, vous pouvez rejouer contre l'ordinateur, et décidant de regarder ou
      non, quelle action fait gagner <span style={{ color: "blue" }}>X</span>,{" "}
      <span style={{ color: "red" }}>O</span> ou fait{" "}
      <span style={{ color: "orange" }}>nul</span>. Vous pouvez même jouer
      contre vous même si vous en avez mare de perdre{" "}
      <span role="img" aria-label="smile">
        😉
      </span>
    </p>

    <ComputerView />

    <h2>Comment savoir si une grille est gagnante?</h2>
    <p>
      On va commencer par des cas simple, voire basique. Si il y a trois{" "}
      <span style={{ color: "blue" }}>X</span> (ou trois{" "}
      <span style={{ color: "red" }}>O</span>) alignés, alors c'est une grille
      gagnante pour <span style={{ color: "blue" }}>X</span> (ou{" "}
      <span style={{ color: "red" }}>O</span>). Et si la grille est remplie sans
      que 3 symbols soient alignés, c'est une grille{" "}
      <span style={{ color: "orange" }}>nul</span>. #CaptainObvious C'est
      basique, mais ça va mieux en le disant.
    </p>

    <img
      src={possibleEnds}
      alt="exemple de cas finaux possible pour le morpion"
    />

    <p>
      Maintenant on va gérer les cas plus compliqués. Premièrement on va
      supposer que tout le monde est un bon joueur. Si un bon joueur peut jouer
      une action qui est gagnant pour lui il la joue. Sinon il joue pour obtenir
      un nul, et sinon il est obligé de perdre. Bref, la même logique que notre
      ordinateur.
    </p>
    <p>
      Conclusion, si parmi les actions possibles il y en a une qui fait gagner
      le joueur dont c'est le tour, on va dire que la grille est gagnante pour
      ce joueur. S'il n'a pas de coup gagnant mais au moins un coup qui lui
      permet d'avoir un nul, on dit que c'est une grille nul. Et si tous les
      coups donnent une grille gagnante pour son adversaire, on dit que la
      grille actuelle est gagnante pour l'adversaire.
    </p>
    <p>
      Avec un exemple ça sera plus simple. Dans les 3 cas c'est à{" "}
      <span style={{ color: "blue" }}>X</span> de jouer. Dans le premier cas, il
      a une action qui l'amène sur une grille gagnante pour lui. Dans le second
      cas, il y a des actions <span style={{ color: "orange" }}>nul</span> et
      des actions gagnantes pour <span style={{ color: "red" }}>O</span>, c'est
      donc une grille <span style={{ color: "orange" }}>nul</span>. Et le
      dernier cas, quoi que fasse <span style={{ color: "blue" }}>X</span>, il
      arrivera sur une grille permettant à{" "}
      <span style={{ color: "red" }}>O</span> de gagner. C'est donc une grille
      gagnante pour <span style={{ color: "red" }}>O</span>.
    </p>

    <RecurrenceExample />

    <p>
      La façon la plus simple de calculer qui va gagner est d'appliquer les
      règles que l'on vient de présenter. On crée une fonction "getWinner"
      ("donne le gagnant" en anglais), qui pour une grille de morpion donnée
      renvoi le gagnant associé. Si c'est un cas final, la fonction revoit le
      gagnant. Si non, on test toutes les actions possibles, on appel
      "getWinner" pour savoir si ces actions font gagner{" "}
      <span style={{ color: "blue" }}>X</span>,{" "}
      <span style={{ color: "red" }}>O</span> ou{" "}
      <span style={{ color: "orange" }}>nul</span>. Maintenant que l'on connaît
      le résultat de toute les actions possibles, on peut utiliser la relation
      de récurrence précédente pour savoir qui sera le gagnant.
    </p>

    <img src={algoPicture} alt="schemat de l'algorithme" />

    <p>
      What ?!? Pour calculer le résultat de "getWinner" il faut utiliser ...
      "getWinner" ? Pas d'inquietude, c'est normal, c'est une fonction
      récursive. A chaque fois que "getWinner" appelle "getWinner", elle lui
      demande de calculer le résultat pour une grille un peu plus remplie. Donc
      si "getWinner" appel "getWinner" qui appel "getWinner", etc 9 fois, on
      arrive forcément à un cas final, car chaque fonction ajoute un symbole, et
      avec 9 symboles, la grille est remplie. Grace au résultat des grilles
      remplies, on va pouvoir calculer les "getWinner" précédents, puis avec
      leurs résultats on calcul les "getWinner" précédents, et on continue comme
      ça jusque à arriver au premier.
    </p>
    <p>
      Pas convaincu ? En appuyant sur next, faite défiler l'algorithme étape par
      étape.
    </p>
    <TreeSearch />

    <h2>Et le résultat est ...</h2>
    <p>
      Les plus curieux d'entre vous l'auront remarqué, le morpion est un jeu se
      finissant par un match <span style={{ color: "orange" }}>nul</span>, si
      les deux joueurs sont parfait. Pour le prouver, le plus simple serait
      d'afficher tout l'arbre. Ca serait un peu compliqué à lire. On propose
      donc de prouver que le premier joueur à une stratégie pour obtenir{" "}
      <span style={{ color: "orange" }}>nul</span>
      quoi que fasse le deuxième joueur. Puis de faire la même chose pour le
      deuxième joueur. Comme le premier joueur à une stratégie pour faire match
      nul, les deuxième joueur ne peut pas avoir de stratégie gagnante, et
      inversement.
    </p>
    <p>
      Ci-dessous, l'arbre pour le premier joueur. Quand c'est à lui de jouer, on
      affiche une seule action. Cette action est celle de sa stratégie. Quand
      c'est le tour du deuxième joueur, on affiche toutes les possibilités, pour
      être sur que quoi qu'il fasse, le premier joueur aura moyen d'obtenir au
      moins un match nul.
    </p>
    <p>Astuce: cliquez sur les grilles pour réduire l'arbre.</p>

    <CompletTree robot={0} />

    <p>
      Pourquoi commencer par premier joueur ? Parce que c'est l'arbre le plus
      petit. Celui du deuxième joueur étant un peu plus gros, il est dans une
      autre page{" "}
      <Link to={"/tic-tac-toe/second-player-tree/fr"}>(celle-ci)</Link>
    </p>
  </Layout>
)

export default Page
