import React from "react"

import MathJax from "react-mathjax2"

import Layout from "src/components/layout"
import SEO from "src/components/seo"

import { SIplot } from "src/components/virus/SI"
import { IRplot } from "src/components/virus/IR"
import { IRDplot } from "src/components/virus/IRD"
import { SIRDplot } from "src/components/virus/SIRD"

import classes from "./style.module.scss"
{
  /* <div>
        <MathJax.Context>
        <MathJax.Node inline>{"ascii"}</MathJax.Node>
        </MathJax.Context>
          <div>
            This is an inline formula written in AsciiMath:{" "}
            <MathJax.Node inline>{"ascii"}</MathJax.Node>
          </div>
        </MathJax.Context>
      </div> */
}
const Page = () => {
  // deal with page state

  //render
  return (
    <Layout location="/virus" currentLanguage="Français">
      <SEO title="Comment les asociaux (et les vaccins) empêchent les épidémies ?" />
      <h1>Comment les asociaux (et les vaccins) empêchent les épidémies ?</h1>

      <h2>Avant propos</h2>

      <p>
        Cet article traite d’un modèle mathématique pour la modélisation des
        épidémies. Il est très bien pour observer le comportement général d’une
        épidémie. Mais si au moment de lire ces ligne il y a une épidémie,
        inutile de rentrer les données de l’OMS ou d’un autre organisme de santé
        pour prédire l’avenir. Les statisticiens de ces organismes ont des
        modèles bien plus précis qui prennent en compte plus de paramètres.
        Gardez à l’esprit que j’ai fait des études de mathématiques, il peut
        donc y avoir des parties médicalement peu réaliste. Si vous en croisez
        n'hésitez pas à me le faire savoir.
      </p>

      <h2>Introduction</h2>

      <p>
        Est-ce vraiment util de se laver les mains, de fermer des écoles ou de
        faire du télétravail ? Après tout, il suffit d’une seule personne pour
        transmettre un virus, donc quoi qu’on fasse tout le monde va être
        contaminé. Pourquoi le comportement de la maladie est plus complexe que
        ce raisonnement.
      </p>

      <h2>Etape 1: tomber malade - le modèle SI</h2>

      <p>
        Pour modéliser une épidémie, il faut au moins pouvoir tomber malade
        (captain obvious). Pour ça on va diviser notre population en deux
        catégories : les personnes saines, et les personnes malades. Et il faut
        que ces groupes ne soient pas vide, car si il n’y a pas de malades au
        début, on ne peut pas attraper la maladie, et si il n’y a pas de
        personnes saine, c’est qu’il ne reste plus personne à contaminer.
      </p>

      <p>
        A un jour{" "}
        <MathJax.Context>
          <MathJax.Node inline>{"t"}</MathJax.Node>
        </MathJax.Context>
        , les personnes saines (
        <MathJax.Context>
          <MathJax.Node inline>{"S_t"}</MathJax.Node>
        </MathJax.Context>
        ) et malades (
        <MathJax.Context>
          <MathJax.Node inline>{"M_t"}</MathJax.Node>
        </MathJax.Context>
        ) peuvent se rencontrer. Quelle proportion de la population saine va
        être contaminée ? On peut distinguer trois facteurs :
        <ul>
          <li>
            La <strong>quantité relative de malade</strong> dans la population{" "}
            <MathJax.Context>
              <MathJax.Node inline>{"\\frac{S_t}{S_t+M_t}"}</MathJax.Node>
            </MathJax.Context>
            . Plus il y a de malades, plus vous avez de chance d’en croiser un.
          </li>
          <li>
            Le <strong>nombre de personnes rencontrées par jours</strong>. Et
            oui, plus vous voyez de personne plus vous avez de chance de croiser
            une personne contaminée
          </li>

          <li>
            Le <strong>taux de transmission</strong> qui correspond à la
            probabilité de tomber malade si vous rencontrez une personne
            infectée
          </li>
        </ul>
        Si on a{" "}
        <MathJax.Context>
          <MathJax.Node inline>{"M_t"}</MathJax.Node>
        </MathJax.Context>{" "}
        malade et{" "}
        <MathJax.Context>
          <MathJax.Node inline>{"S_t"}</MathJax.Node>
        </MathJax.Context>{" "}
        personnes saine au jour{" "}
        <MathJax.Context>
          <MathJax.Node inline>{"t"}</MathJax.Node>
        </MathJax.Context>
        , alors on peut calculer le nombre moyen de personnes qui vont être
        infectées :{" "}
        <div className={classes.equation}>
          <MathJax.Context>
            <MathJax.Node>
              {
                "nb Rencontre \\times transmission \\times  \\frac{S_t}{S_t+M_t} \\times M_t = \\beta \\frac{S_t}{S_t+M_t} M_t"
              }
            </MathJax.Node>
          </MathJax.Context>
        </div>
        Pour le suite, on va résumer le taux de transmission et le nombre de
        rencontres par la variable{" "}
        <MathJax.Context>
          <MathJax.Node inline>{"\\beta"}</MathJax.Node>
        </MathJax.Context>{" "}
        pour raccourcir les formules.
      </p>
      <p> On peut donc calculer l’état de la population au jour suivant:</p>

      <div className={classes.equation}>
        <MathJax.Context input="tex">
          <MathJax.Node>
            {` \\begin{align} S_{t+1}\&=S_{t} - \\beta \\frac{S_t}{S_t+M_t} M_t \\\\ M_{t+1}\&=M_{t} + \\beta \\frac{S_t}{S_t+M_t} M_t \\end{align}`}
          </MathJax.Node>
        </MathJax.Context>
      </div>

      <p>
        L'équation n'est pas difficile à interpréter, on enlève des personnes
        saines les personnes infectées, et on les ajoute au nombre de personnes
        malades. Le résultat est tout aussi simple:
      </p>
      <SIplot lang="fr" />

      <p>
        Conclusion de la simulation pas très positif. On va tous choper la
        maladie. On peut rester confiné chez nous, ca ne fera que repousser
        l'inéluctable. Au mieux, on peut distiller dans le temps l'arrivée des
        malades pour ne pas surcharger les hôpitaux français déjà saturés, mais
        au final tout le monde sera atteint.
      </p>

      <h2>Etape 2 guérir ou mourir</h2>

      <p>
        Pour l’instant quand une personne tombe malade elle le reste. Or une
        maladie au bout d’un moment ça s'arrête (sauf les maladies chroniques).
        On va donc ajouter un groupe à notre simulation un état guérit (
        <MathJax.Context>
          <MathJax.Node inline>{"\\G_t"}</MathJax.Node>
        </MathJax.Context>
        ). Si la maladie dure en moyenne{" "}
        <MathJax.Context>
          <MathJax.Node inline>{"d"}</MathJax.Node>
        </MathJax.Context>{" "}
        jours, on peut estimer que chaque jour le taux de guérison des malades
        est de{" "}
        <MathJax.Context>
          <MathJax.Node inline>{"\\frac{1}{d}"}</MathJax.Node>
        </MathJax.Context>
        . Ce qui donne:
      </p>
      <div className={classes.equation}>
        <MathJax.Context input="tex">
          <MathJax.Node>
            {` \\begin{align} G_{t+1}\&=G_{t} + \\frac{1}{d} M_t \\\\ M_{t+1}\&=M_{t} - \\frac{1}{d} M_t \\end{align}`}
          </MathJax.Node>
        </MathJax.Context>
      </div>
      <p>
        Même logique que précédemment, on calcule le nombre de personnes qui
        guérissent dans la journée:{" "}
        <MathJax.Context>
          <MathJax.Node inline>{"\\frac{1}{d} M_t"}</MathJax.Node>
        </MathJax.Context>{" "}
        . On ajoute ces guérisons au nombre de personnes guérit et on l'enlève
        au nombre de personnes malades.
      </p>
      <IRplot lang="fr" />
      <p>
        Ici aussi pas de surprise, tous le monde va guérir. Par contre, sur les
        100 malades que l'on a au début, certains guérissent en un jour, et
        d’autres qui guérissent après plus de 30 jours. Ce n’est pas parfait,
        mais si on regarde en moyenne, les personnes sont bien restées malades
        le bon nombre de jours.
      </p>

      <p>
        Hélas, il reste un paramètre à prendre en compte, le taux de mortalité{" "}
        <MathJax.Context>
          <MathJax.Node inline>{"m"}</MathJax.Node>
        </MathJax.Context>
        de la maladie. Le taux de guérison est donc{" "}
        <MathJax.Context>
          <MathJax.Node inline>{"1-m"}</MathJax.Node>
        </MathJax.Context>{" "}
        . Comme précédemment, on peut calculer le nombre de décès et de
        guérisons du jour pour mettre à jour le nombre de personnes décédées,{" "}
        <MathJax.Context>
          <MathJax.Node inline>{"D_t"}</MathJax.Node>
        </MathJax.Context>{" "}
        malades,{" "}
        <MathJax.Context>
          <MathJax.Node inline>{"M_t"}</MathJax.Node>
        </MathJax.Context>{" "}
        ou guérit{" "}
        <MathJax.Context>
          <MathJax.Node inline>{"G_t"}</MathJax.Node>
        </MathJax.Context>
        .
      </p>

      <div className={classes.equation}>
        <MathJax.Context input="tex">
          <MathJax.Node>
            {` \\begin{align} M_{t+1}\&=M_{t} - \\frac{1}{d} M_t \\\\ G_{t+1}\&=G_{t} + \\frac{1-m}{d} M_t \\\\ D_{t+1}\&=D_{t} + \\frac{m}{d} M_t \\end{align}`}
          </MathJax.Node>
        </MathJax.Context>
      </div>

      <IRDplot lang="fr" />

      <p>
        Ce modèle ne nous en apprend pas beaucoup plus. On sait juste que si
        j’augmente le taux de mortalité il y a au final plus de morts. Pas
        besoin de simulation pour comprendre ca.
      </p>

      <h2>Etape 3 Tout regrouper.</h2>

      <p>
        Si on met ces deux systèmes ensemble, on obtient le modèle SIRD
        (Susceptible, Infectious, Recovered, Dead). On a des personnes qui
        peuvent être Saine, Malade, Guéri ou Décédée. Et le passage d'un état à
        un autre se fait d'apres les règles que l'on a vue avant.
      </p>
      <p>
        Commençons par une épidémie avec 1 malade pour 1000 personnes. Avec les
        paramètres par défaut, tout le monde finit par être contaminé. Mais si
        vous baissez les facteurs de propagation (Nb individus rencontrés et
        taux contagions) il y a un point de bascule à partir du quel vous
        détruisez l'épidémie. Le nombre de malade va chuter si brutalement que
        le virus va disparaître avant d'avoir pu contaminer tout le monde.
      </p>

      <SIRDplot lang="fr" />
    </Layout>
  )
}

export default Page
