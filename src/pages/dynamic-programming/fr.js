import React, { useState } from "react"

import Layout from "src/components/layout"
import { Link } from "gatsby"
import SEO from "src/components/seo"

import InteractiveGrid from "src/components/DynamicProgram/explanations/InteractiveGrid"
import InteractiveRecurrence from "src/components/DynamicProgram/explanations/InteractiveRecurrence"
import FullAlgo from "src/components/DynamicProgram/explanations/FullAlgo"

import { Match, MissMatch, Deletion } from "src/components/DynamicProgram/utils"

import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"

//import images
import simplification_ADN from "./images/simplification_ADN.png"
import alignement from "./images/alignement.png"
import calcul_score from "./images/calcul_score.png"
import trois_possibilites from "./images/trois_possibilites.png"
import formule_rec_ADN from "./images/formule_rec_ADN.png"
import arbre_min from "./images/arbre_min.svg"
import arbre_coupe1 from "./images/arbre_coupe1.svg"
import arbre_coupe2 from "./images/arbre_coupe2.svg"
import arbre_coupe3 from "./images/arbre_coupe3.svg"
import arbre_elague from "./images/arbre_elague.png"
import recurrence_tableau from "./images/recurrence_tableau.png"
import parcourt_tableau from "./images/parcourt_tableau.png"

import classes from "./style.module.scss"

const Page = () => {
  const [openFullTree, setOpenFullTree] = useState(false)

  const handleClickOpen = () => {
    setOpenFullTree(true)
  }

  const handleClose = () => {
    setOpenFullTree(false)
  }
  return (
    <Layout location="/dynamic-programming" currentLanguage="Français">
      <SEO title="Morpion" />

      <p>
        Dans <Link to="/tic-tac-toe/fr">l'article sur le morpion</Link>, on a
        vue comment résoudre un problème à l'aide d'une relation de récurrence.
        Mais il est possible de faire des algorithmes qui vont plus vite grace à
        la{" "}
        <a href="https://fr.wikipedia.org/wiki/Programmation_dynamique">
          programmation dynamique
        </a>
        . Fini les jeu de morpions sans utilité. Ici on va prendre comme exemple
        l'alignement des séquences génétiques avec l'algorithme de{" "}
        <a href="https://fr.wikipedia.org/wiki/Algorithme_de_Needleman-Wunsch">
          Needleman-Wunsch
        </a>
        .
      </p>
      <p>
        Comme notre <Link to="/tic-tac-toe/fr">problème du morpion</Link>,
        l'alignement des séquences génétiques peut se résoudre avec une
        relations de récurrence. On va voir qu'appliquer naïvement cette
        relation nous fait faire de de nombreuses fois le même calcul. On va
        donc proposer de sauvegarder ces résultats en mémoire pour éviter de
        devoir les refaire.
      </p>
      <h2>Mise en contexte (Un peu de SVT)</h2>
      <p>
        Petit rappel de génétique. Pour faire bref, votre information génétique
        est codée sur de longues molécules nommées{" "}
        <a href="https://fr.wikipedia.org/wiki/Acide_désoxyribonucléique">
          Acide DésoxyriboNucléique (ADN)
        </a>
        . Mais cette information n'est pas écrite en français, ni même en
        allemand. Cette molécule est composé de 4 bloques de bases qui
        s'assemblent les uns à la suites des autres. On utilise des lettres pour
        noter l'ordre d'apparition de ces motifs. On obtient alors un mot
        composé uniquement de <strong>4 symboles</strong> notés{" "}
        <strong>A</strong>, <strong>C</strong>, <strong>G</strong>,{" "}
        <strong>T</strong>.
      </p>
      <p>
        Voici un petit dessin pour résumer la simplification de notre
        représentation de l'ADN. On part de la représentation moléculaire. Que
        l'on simplifie en ne représentant chaque groupe par un modif et une
        couleur. Puis on ne prend qu'un des deux brins. Enfin on utilise des
        lettres pour simplifier.
      </p>
      <img src={simplification_ADN} />
      <p>
        Pourquoi on ne peut se permettre de ne garder qu'un brin sur les deux ?
        Car en face d'un "T" il y a toujours un "A" et en face d'un "C" il y a
        toujours un "G". Ainsi si le premier brin contient le chaîne "ACAGT", le
        second contiendra "TGTCA". Donc connaître un brin sur les deux suffit.
      </p>
      <p>
        Maintenant le but est de comparer deux ADNs entre eux. Pour cela, on ve
        prendre deux ADNs et tenter de fair correspondre le plus de lettre
        possible en ajoutant quelques espaces. Dans l'exemple ci-dessous, en
        ajoutant 2 espaces, on a pu aligner toutes les lettres
      </p>
      <img src={alignement} />
      <h2>Formalisation</h2>
      <p>
        Il nous reste à définir ce qu'est un "bon alignement". Pour celà on
        défini un <strong>score</strong> aux alignements. De sorte qu'un{" "}
        <strong>bon alignement</strong> ait un <strong>score élevé</strong>, et
        un <strong>mauvais alignement</strong>, un <strong>score bas</strong>.
      </p>
      <p>Dans un alignement, on peut rencontrer 3 configurations&nbsp;:</p>
      <ul>
        <li>
          Les lettres sont <Match>identiques</Match> : on dit alors qu'elles{" "}
          <Match>matchent</Match>. C'est ce que l'on veut voir le plus souvent.
          On va donc dire qu'à chaque fois que 2 lettres sont identiques cela
          vaut <Match>+1</Match>.{" "}
        </li>
        <li>
          Les lettres sont <MissMatch>différentes</MissMatch> : par exemple un A
          est remplacé par un T dans l'autre séquence. On appelle cela une{" "}
          <MissMatch>substitution</MissMatch>, et ce n'est pas ce que l'on
          cherche. On va donc dire que ça vaut <MissMatch>-1</MissMatch>
        </li>
        <li>
          Il n'y a <Deletion>rien en face</Deletion> de la lettre. Pour mieux
          aligner d'autres parties on a décidé de laisser un espace à cet
          endroit. On appelle cela une <Deletion>délétion</Deletion>, ça peut
          arriver mais c'est plus rare qu'une substitution. On lui donnera donc
          un score de <Deletion>-2</Deletion> pour montrer que l'on préfère
          avoir une substitution.
        </li>
      </ul>
      <p></p>
      <p>
        Le score est alors l'addition de toutes ces valeurs. Voici un exemple de
        calcul du score d'un alignement. Il suffit de compter le nombre de{" "}
        <Match>matchs</Match>, de <Deletion>délétions</Deletion> et de{" "}
        <MissMatch>substitutions</MissMatch> et d'y appliquer le{" "}
        <strong>score</strong> associé.
        <br /> le score est donc : <Match>1</Match> +{" "}
        <MissMatch>(-1)</MissMatch> + <Match>1</Match> +{" "}
        <Deletion>(-2)</Deletion> + <Match>1</Match> +{" "}
        <MissMatch>(-1)</MissMatch> + <MissMatch>(-1)</MissMatch> +{" "}
        <Match>1</Match> = -1
      </p>
      <img src={calcul_score} />
      <p>
        Vous pouvez bien sûr choisir d'autres valeurs. En biologie, il existe
        des tableaux basés sur des études statistiques pour savoir s'il est plus
        fréquent qu'un A se transforme en C ou qu'un T se transforme en G pour
        avoir des scores plus adaptés à la réalité des mutations. Le calcul du
        score est plus précis, mais l'algorithme reste le même, et c'est tout ce
        qui nous intéresse ici.
      </p>
      <h2>Impossible d'y aller naïvement</h2>
      <p>
        Concrètement, tout ce qu'on a à faire, c'est placer des trous aux bons
        endroits. En effet, on ne peut pas changer l'ordre des lettres, on peut
        juste se dire "Tiens je vais mettre une délétion ici pour obtenir de
        meilleurs alignements après". Ca ne devrait pas être trop dur de trouver
        une solution. En effet, avec 10 lettres, on peut s'en sortir à la main.
        Mais pour être sûr d'avoir le meilleur score, il faudrait tester toutes
        les possibilités. Et là, c'est beaucoup plus dur. Pour 1 délétion, on a
        20 configurations différentes. Pour 2 délétions, on a 180 possibilités.
        Pour 3 délétions, on passe à 1140 possibilités. Vous trouvez que ça
        monte vite&nbsp;? Attendez, là ce n'est que pour des ADNs de 10 lettres.
        Normalement, les gènes contiennent des centaines de lettres, du coup
        pour 2 délétions, ca fait 19.900 possibilités. Pour 3 délétions&nbsp;?
        On a 1.313.400 possibilités.
      </p>
      <p>
        Vous l'aurez compris, écrire toutes les possibilités, calculer leur
        score et retenir celles qui ont le score minimal n'est pas vraiment la
        bonne solution.
      </p>
      <h2>Une relation de récurrence insuffisante</h2>
      <p>
        Tout tester c'était un peu barbare comme méthode. On va donc tenter de
        prendre du recul et regarder ce que l'on connaît déjà en informatique.
        Si on y réfléchi, ce problème peut se résoudre par{" "}
        <strong>récurrence</strong>. Je m'explique. On cherche à obtenir une
        fonction qui nous donne le meilleur alignement de deux séquences ADN.
        Quand on nous donne les deux séquences, on sait que le meilleur
        alignement ne peut finir que de 3 manières différentes.
      </p>
      <ul>
        <li>
          On prend la dernière lettre des deux séquences, ce qui donne un{" "}
          <Match>match</Match> ou une <MissMatch>substitution</MissMatch>
        </li>
        <li>
          On fait une <Deletion>délétion</Deletion> en haut
        </li>
        <li>
          On fait une <Deletion>délétion</Deletion> en bas
        </li>
      </ul>
      <p></p>
      <p>
        Pour ceux qui préfèrent un schéma, voici un exemple des trois
        possibilités.
      </p>
      <img src={trois_possibilites} />
      <p>
        Pour chaque un des trois cas, on va appliquer notre fonction aux
        séquences restantes pour calculer le <strong>score maximal</strong>, et
        ainsi de suite. Comme pour le problème du morpion, on va{" "}
        <strong>réduire la longueur des séquences à aligner</strong>, et donc la
        taille du problème au fur et à mesure que la fonction est appelée. Et ce
        jusqu'à ce qu'une des deux séquences soit vide. On ne pourra alors que
        mettre des <Deletion>délétions</Deletion> pour compléter les nucléotides
        restants.
      </p>
      <p>
        Mathématiquement la relation de récurrence que l'on utilise est celle
        ci&nbsp;:
      </p>
      <img src={formule_rec_ADN} />
      <p>
        Ne paniquez pas si vous ne la comprenez pas directement la relation de
        récurrence. Soit vous prenez le temps de la lire doucement, et vous
        verrez qu'il ne s'agit que de la traduction de ce que l'on a dit
        précédemment. Soit vous attendez, j'ai dessiné l'arbre de récurrence
        qu'elle produit plus loin.
      </p>
      <p>
        <strong>Problème</strong>&nbsp;: à chaque appelle à la fonction, on
        appel à nouveau la fonction 3 fois. Autant le dire tout de suite, ça
        sent la <strong>complexité exponentielle</strong> à plein nez. Tant
        d'efforts pour rien&nbsp;? Oui, car que fait cette relation de
        récurrence ? Elle teste tous les alignements possibles. Exactement ce
        que l'on voulait éviter. Mais regardons de plus prêt ce que fait cet
        algorithme sur un petit exemple.
      </p>
      <h2>Une impression de déjà vue</h2>
      <p>
        Voici donc l'arbre de <strong>arbre de récurrence</strong> pour un cas
        très simple mais aussi très éclairant. Simple car on cherche juste
        l'alignement de "ACGT" avec "AGT". Ce qui fait déjà dans les 130 lignes.
        Il n'est bien entendu pas nécessaire de le lire en entier (cliquez sur
        l'image pour afficher la totalité de l'arbre). Il est juste là pour vous
        montrer comment fonctionne cette représentation (observez le bien, il
        m'a fallut beaucoup de temps pour le faire ^^)
      </p>
      <p>
        Vous pouvez entre autre remarquer qu'à chaque problème sont associés 3
        sous-problèmes. Et que tous les cas terminaux (ceux qui finissent les
        lignes) sont tous des sous-problèmes où l'une des séquences est vide.
      </p>
      <img src={arbre_min} onClick={handleClickOpen} />
      <Dialog onClose={handleClose} open={openFullTree}>
        <DialogTitle>Arbre complet des alignements possibles</DialogTitle>
        <DialogContent>
          <img src="" alt="" />
        </DialogContent>
      </Dialog>
      <p>
        Avez-vous remarqué quelque chose ? Non ? Normal, vous avez forcément le
        nez collé au dessin. Nous allons donc prendre un peu de hauteur en
        coupant ce dessin en trois parti pour tenter de tout faire tenir sur une
        page. Et pour vous facilite d'avantage la tache, j'ai pris encore un peu
        de mon temps pour faire du coloriage. A chaque fois que vous voyez dans
        le fond deux rectangles de la <strong>même couleur</strong>, c'est que
        ces parties de l'arbres font exactement la même chose. C'est le{" "}
        <strong>même calcul</strong>. car les séquences qui restent à aligner
        sont les mêmes.
      </p>
      <div className={classes.row}>
        <div>
          <img src={arbre_coupe1} />
        </div>
        <div>
          <img src={arbre_coupe2} />
        </div>
        <div>
          <img src={arbre_coupe3} />
        </div>
      </div>
      <p>
        Voici quelques exemples. A chaque fois qu'il y a un rectangle{" "}
        <strong>vert pâle</strong>, c'est que l'on cherche à maximiser
        l'alignement entre <strong>A et A</strong>. Les{" "}
        <strong>bleu clair</strong> correspondent à l'alignement de{" "}
        <strong>ACG et A</strong>. Les <strong>jaunes</strong> correspondent à
        l'alignement de <strong>ACG et AG</strong>. Et ainsi de suite.
        <br /> Conclusion, on peut voir sur ce dessin que l'on calcule :
      </p>
      <ul>
        <li>
          <strong>25 fois</strong> l'alignement de <strong>A</strong> et{" "}
          <strong>A</strong>
        </li>
        <li>
          <strong>5 fois</strong> l'alignement de <strong>ACG</strong> et{" "}
          <strong>A</strong>
        </li>
        <li>
          <strong>3 fois</strong> l'alignement de <strong>ACG</strong> et{" "}
          <strong>AG</strong>
        </li>
      </ul>
      <p>
        Il faut mettre un terme à ce gaspillage grossier de{" "}
        <strong>capacité de calcul</strong>
        .&nbsp;Mais pour cela, il va falloir stocker les résultats quelque part.
        On va diminuer la <strong>complexité en temps</strong>, mais en échange,
        nous allons devoir augmenter la <strong>complexité en mémoire</strong>.
        Cette phrase vous parait obscure ? Pas de panique, vous l'aurez comprise
        à la fin du prochain paragraphe.
      </p>
      <h2>La mémoïzation à la rescousse</h2>
      <p>
        Si on <strong>mémorise les résultats des sous problèmes</strong>, on
        aura besoin de faire le calcul qu'une seule fois. On calculera alors une
        fois l'arbre associé à l'alignement de A et A. Et à chaque fois que l'on
        aura besoin d'aligner A et A, on aura juste à prendre son score maximal
        en mémoire. De même pour l'alignement de ACG et A ou de ACG et AG. Du
        coup, dans notre arbre, on verra{" "}
        <strong>un seul gros rectangle jaune</strong>. Puis quand on retombera
        sur un rectangle jaune, inutile de calculer l'arbre qui est à
        l'intérieur, on a déjà la réponse en mémoire.
        <br /> Vous pouvez voir le résultat de cette simplification sur l'arbre
        ci-dessous. C'est le même calcul qu'avant, sauf que j'ai supprimé tous
        les sous-arbre devenus inutiles. Plutôt efficace comme élagage, vous ne
        trouvez pas ?
      </p>
      <img src={arbre_elague} />
      <p>
        Dire que l'on va mémoriser les résultats c'est bien. Mais pour ça, il
        nous faut une méthode pratique/rapide pour stocker et retrouver le score
        de nos <strong>sous-problèmes</strong> en mémoire. Pour commencer, il
        faut savoir combien de sous-problèmes nous devrons mémoriser.
      </p>
      <p>
        Nos sous problèmes consistent à trouver le meilleur alignement pour deux{" "}
        <strong>séquences génétiques</strong> plus petites que les deux
        séquences initiales. Par exemple, si au début une des séquences est
        "ACGTCG" les <strong>sous-séquences</strong> seront "ACGTCG", "ACGTC",
        "ACGT", "ACG", "AC", "A" et ""
      </p>
      <p>
        Si les deux <strong>séquences</strong> contiennent n et m nucléoïdes, il
        y a donc (n+1) <strong>sous-séquences</strong> pour la première, et
        (m+1) <strong>sous-séquences</strong> pour la seconde séquence. En les
        combinant, on obtient un total de (n+1)(m+1)
        <strong>sous-problèmes</strong>. Ce qui se rangera facilement dans un
        tableau de n+1 lignes et m+1 colonnes.
      </p>
      <p>
        C'est fou&nbsp;! On vient de partir d'une{" "}
        <strong>relation de récurrence</strong> qui nous demande de faire des
        tas et des tas de calculs, et on obtient un simple tableau à remplir.
      </p>
      <p>
        Voici un exemple de comment mémoriser les scores dans le tableau. C'est
        compliqué à expliquer avec de mots, mais vous devriez comprendre avec le
        dessin. Il vous suffit de passer votre souris par dessus une case pour
        voir à quel <strong>sous-problème</strong> correspond cette case.
      </p>

      <InteractiveGrid startWord1="ABCDEFGHIJ" startWord2="DEFGH" lang="fr" />

      <h2>Relation de récurrence nouvelle version</h2>
      <p>
        On sait maintenant qu'on peut aller beaucoup plus vite en mémorisant nos
        résultats dans un tableau. Mais il nous reste à{" "}
        <strong>adapter notre relation de récurrence au tableau</strong>. On a
        fait assez de théorie, donc on va passer directement à un exemple.
        Trouver la relation de récurrence pour "ACGTC" et "AGGA" Comme pour
        notre première fonction, on a 3 possibilités qui donnent les relations
        dessinées ci-dessous, représentées chacune d'une couleur.
      </p>
      <img src={recurrence_tableau} />
      <p>
        Les deux <Deletion>délétions</Deletion> seront toujours des{" "}
        <Deletion>délétions</Deletion>. Par contre, la troisième relation peut
        être soit un <Match>match</Match>, soit une{" "}
        <MissMatch>substitution</MissMatch>. On aura un <Match>match</Match> si
        les lettres associées à la ligne et à la colonne sont les mêmes, et une{" "}
        <MissMatch>substitution</MissMatch>
        dans le cas contraire.
      </p>

      <p>
        Ci dessous vous pouvez compléter le tableau en utilisant la relation de
        récurrence. Lorsque votre souris passe sur une case, on tente
        d'appliquer la relation. Si toutes les informations sont présentes, la
        relation de récurrence sera calculée.
      </p>
      <InteractiveRecurrence
        startWord1="ATCGTCGA"
        startWord2="AGGTGCGTA"
        lang="fr"
      />
      <p>
        Vous avez sans doute remarqué, que pour calculer un score, il faut en
        connaître déjà 3. Celui situé en <strong>haut</strong>, celui à{" "}
        <strong>gauche</strong> et celui en <strong>haut à gauche</strong>.
        Après avoir rempli la première ligne et la première colonne, on peut
        compléter le tableau ligne par ligne, ou colonne par colonne, ou en
        diagonale. Voici un schéma des 3 chemins de base à suivre pour calculer
        l'ensemble du tableau.
      </p>
      <img src={parcourt_tableau} />
      <p>
        Vous pouvez bien sûr faire des chemins plus étranges si cela vous amuse
        tant que ça vous pouvez appliquer la relation de récurrence.
      </p>

      <p>
        <strong>Conclusions</strong>, on a maintenant tous les{" "}
        <strong>sous-problèmes</strong> possibles calculés. Remarquez au passage
        qu'on a inversé l'ordre de résolution. Avant on partait des deux
        séquences à aligner, et on simplifiait le problème en sous-problèmes, ce
        qui ne fonctionnait pas. Et là, on est parti du problème le plus simple,
        pour calculer petit à petit des sous-problèmes de plus en plus gros
        jusqu'à atteindre le problème demandé.
      </p>
      <p>
        On connaît maintenant le <strong>score maximal</strong> qu'un alignement
        peut obtenir. Si vous avez suivi, vous savez que c'est le score trouvé
        dans la case tout en bas à droite du tableau. Mais il n'est pas indiqué{" "}
        <strong>comment on obtient ce score optimal</strong>. Pas indiqué ? Vous
        êtes sur ? Disons que ce n'est pas écrit explicitement, mais cela se
        retrouve très facilement en faisant le chemin inverse.
      </p>
      <p>
        Pour obtenir ce <strong>score maximal</strong>, on ne peut venir que de{" "}
        <strong>3 sous-problèmes</strong>. En appliquant l'algorithme dans
        l'autre sens, on sait de <strong>quel(s) sous-problème(s)</strong> vient
        notre score maximal. On peut ainsi remonter tout le tableau, et donc
        trouver l'alignement correspondant. Remarquez au passage que la solution
        optimale d'un sous-problème peut venir de plusieurs sous-problèmes. En
        effet, il n'y a pas forcément un seul alignement optimal, il peut y en
        avoir plusieurs. Et cet algorithm les donne tous.
      </p>
      <FullAlgo startWord1="ACGTCATC" startWord2="ATGCGGC" lang="fr" />
    </Layout>
  )
}

export default Page
