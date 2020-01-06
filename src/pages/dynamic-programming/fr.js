import React, { useState } from "react"

import Layout from "src/components/layout"
import SEO from "src/components/seo"

import InteractiveGrid from "src/components/DynamicProgram/explanations/InteractiveGrid"
import InteractiveRecurrence from "src/components/DynamicProgram/explanations/InteractiveRecurrence"
import FullAlgo from "src/components/DynamicProgram/explanations/FullAlgo"
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

const Page = () => {
  const [openFullTree, setOpenFullTree] = useState(false)

  const handleClickOpen = () => {
    setOpenFullTree(true)
  }

  const handleClose = () => {
    setOpenFullTree(false)
  }
  return (
    <Layout location="/tic-tac-toe" currentLanguage="Français">
      <SEO title="Morpion" />

      <p>
        Nous allons voir ici un exemple extrêmement classique de programmation
        dynamique : l'algorithme de{" "}
        <a href="https://fr.wikipedia.org/wiki/Algorithme_de_Needleman-Wunsch">
          Needleman-Wunsch
        </a>
        . Il a l'avantage de partir d'un problème qui semble complexe avec de
        nombreux cas à calculer pour se ramener à la simple écriture d'un
        tableau à deux dimensions.
      </p>
      <p>
        Nous allons voir ici un exemple extrêmement classique de{" "}
        <strong>programmation dynamique</strong> : l'algorithme de
        Needleman-Wunsch. Il a l'avantage de partir d'un problème qui semble
        complexe avec de nombreux cas à calculer pour se ramener à la simple
        écriture d'un tableau à deux dimensions.
      </p>
      <h2>Mise en contexte (Un peu de SVT)</h2>
      <p>
        Pour une fois, nous n'allons pas commencer directement par de
        l'informatique, mais par un peu de SVT, et plus précisément de la
        génétique. Vous savez sans doute que votre corps est composé de
        cellules. Mais savez vous comment ces cellules savent ce qu'elles
        doivent faire&nbsp;? Pourquoi produisent-elles des cheveux bruns chez
        certaines personnes, alors que chez d'autres ce sont des cheveux
        blonds&nbsp;? Cette <strong>information</strong> est cachée au milieu de
        vos cellules, dans le noyau. Mais cette information n'est pas écrite en
        français, ni même en allemand. Il s'agit de plusieurs molécules
        extrêmement longues sur lesquelles 4 motifs se répètent et que l'on
        appelle <strong>ADN</strong>. On pourrait toujours s'amuser à dessiner
        chaque atome de cette molécule. Mais comme on l'a dit, on peut la
        simplifier par une succession de 4 motifs différents. On a plus qu'à
        dérouler un des deux bruns d'ADN, ce qui nous donne une chaîne composée
        de nos 4 motifs. Et comme des dessins ce n'est pas très pratique, on va
        représenter ces motifs par des lettres. On obtient donc une langue
        composée uniquement de <strong>4 symboles</strong> que l'on notera{" "}
        <strong>A</strong>, <strong>C</strong>, <strong>G</strong>,{" "}
        <strong>T</strong>, et qui sont appelés <strong>nucléotïdes</strong>.
        Voici un petit dessin pour résumer la simplification de notre
        représentation de l'ADN, en partant de la représentation moléculaire
        vers la représentation sous forme de lettres.
      </p>
      <img src={simplification_ADN} />
      <p>
        Il reste alors à trouver l'utilité de chaque code. Pour cela, on suppose
        que des codes qui se ressemblent ont la même utilité. Du coup, il faut
        savoir si deux codes se ressemblent. Et c'est là qu'intervient
        l'algorithme que nous allons voir. Le problème c'est que si deux codes
        paraissent différents à première vue, peut être qu'en ajoutant des
        espaces, on se rendra compte que ces codes ne sont pas si différents,
        voire quasiment identiques. Le but pour l'informaticien, est donc de
        proposer un algorithme qui prend deux séquences d'ADN est qui essaie de
        les aligner au mieux. Comme vous le voyez si dessous, ajouter deux
        espaces permet d'améliorer l'alignement des deux séquences.
      </p>
      <img src={alignement} />
      <h2>Formalisation</h2>
      <p>
        Comme dit précédemment, il va falloir aligner deux{" "}
        <strong>séquences</strong> d'ADN (deux mots composés des lettres A, C, G
        et T). Pour cela, il faut donner à l'algorithme les deux séquences à
        aligner. Mais il faut aussi lui donner un moyen de comparer différents
        alignements. Pour cela, nous allons définir une fonction qui va donner
        un <strong>score</strong> aux alignements de sorte qu'un{" "}
        <strong>bon alignement</strong> ait un <strong>score élevé</strong>, et
        un <strong>mauvais alignement</strong>, un <strong>score bas</strong>.
      </p>
      <p>Dans un alignement, on peut rencontrer 3 configurations&nbsp;:</p>
      <ul>
        <li>
          Les lettres sont <strong>identiques</strong> : on dit alors qu'elles{" "}
          <strong>matchent</strong>. C'est ce que l'on veut voir le plus
          souvent. On va donc dire qu'à chaque fois que 2 lettres sont
          identiques cela vaut <strong>+1</strong>.{" "}
        </li>
        <li>
          Les lettres sont <strong>différentes</strong> : par exemple un A est
          remplacé par un T dans l'autre séquence. On appelle cela une{" "}
          <strong>substitution</strong>, et ce n'est pas ce que l'on cherche. On
          va donc dire que ça vaut <strong>-1</strong>
        </li>
        <li>
          Il n'y a <strong>rien en face</strong> de la lettre. Pour mieux
          aligner d'autres parties on a décidé de laisser un espace à cet
          endroit. On appelle cela une <strong>délétion</strong>, ça peut
          arriver mais c'est plus rare qu'une substitution. On lui donnera donc
          un score de <strong>-2</strong> pour montrer que l'on préfère avoir
          une substitution.
        </li>
      </ul>
      <p></p>
      <p>
        Le score est alors l'addition de toutes ces valeurs. Voici un exemple de
        calcul du score d'un alignement. Il suffit de compter le nombre de{" "}
        <strong>matchs</strong>, de <strong>délétions</strong> et de{" "}
        <strong>substitutions</strong> et d'y appliquer le{" "}
        <strong>score</strong> associé.
        <br /> le score est donc : 1 + (-1) + 1 + (-2) + 1 + (-1) + (-1) + 1 =
        -1
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
        Bon, concrètement tout ce qu'on a à faire, c'est placer des trous aux
        bons endroits. En effet, on ne peut pas changer l'ordre des lettres, on
        peut juste se dire «&nbsp;Tiens je vais mettre une délétion ici pour
        obtenir de meilleurs alignements après&nbsp;». Du coup ça ne devrait pas
        être trop dur de trouver une solution. Bon ok, avec 10 lettres, on peut
        s'en sortir à la main. Mais pour être sûr d'avoir le meilleur score, il
        faudrait tester toutes les possibilités. Et là, c'est beaucoup plus dur.
        Pour 1 délétion, on a 20 configurations différentes. Pour 2 délétions,
        on a 180 possibilités. Pour 3 délétions, on passe à 1140 possibilités.
        Vous trouvez que ça monte vite&nbsp;? Attendez, là ce n'est que pour des
        ADNs de 10 lettres. Normalement, les gènes contiennent des centaines de
        lettres, du coup pour 2 délétions, ca fait 19.900 possibilités. Pour 3
        délétions&nbsp;? On a 1.313.400 possibilités.
        <br /> Vous l'aurez compris, écrire toutes les possibilités, calculer
        leur score et retenir celles qui ont le score minimal n'est pas vraiment
        la bonne solution.
      </p>
      <h2>Une relation de récurrence insuffisante</h2>
      <p>
        Bon, tout tester c'était un peu barbare comme méthode. On va donc tenter
        de prendre du recul et regarder ce que l'on connaît déjà en
        informatique. Si on y réfléchi, ce problème peut se résoudre par{" "}
        <strong>récurrence</strong>. Je m'explique. On cherche à obtenir une
        fonction qui nous donne le meilleur alignement de deux séquences ADN.
        Quand on nous donne les deux séquences, on sait que le meilleur
        alignement ne peut finir que de 3 manières différentes.
      </p>
      <ul>
        <li>
          On prend la dernière lettre des deux séquences, ce qui donne un{" "}
          <strong>match</strong> ou une <strong>substitution</strong>
        </li>
        <li>
          On fait une <strong>délétion</strong> en haut
        </li>
        <li>
          On fait une <strong>délétion</strong> en bas
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
        ainsi de suite. On va donc{" "}
        <strong>réduire la longueur des séquences</strong> à aligner au fur et à
        mesure que la fonction est appelée. Et ce jusqu'à ce qu'une des deux
        séquences soit vide. On ne pourra alors que mettre des{" "}
        <strong>délétions</strong> pour compléter les nucléotides restants.
      </p>
      <p>
        Mathématiquement la relation de récurrence que l'on utilise est celle
        ci&nbsp;:{" "}
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
        d'efforts pour rien&nbsp;? Moïra aurait, elle, dévolu aux gènes les
        complexités renverse-ordinateurs&nbsp;? (#LesPerses #Eschil) Que nenni,
        cette relation de récurrence vaincra&nbsp;! Il suffit d'ouvrir les yeux
        sur notre bêtise.
      </p>
      <h2>Une impression de déjà vue</h2>
      <p>
        Bon, ouvrir les yeux sur une relation de récurrence, ce n'est pas
        évident, surtout si elle est écrite sous une forme mathématique
        élégante, mais admettons le, <strong>peu visuelle</strong>. Et que fait
        on quand on ne visualise pas bien une formule ? On la teste \o/ ! C'est
        donc avec une énorme gentillesse, que je vous ai dessiné de notre{" "}
        <strong>arbre de récurrence</strong> pour un cas très simple mais aussi
        très éclairant. Enfin très simple ... il fait déjà dans les 130 lignes.
        Il n'est bien entendu pas nécessaire de le lire en entier (cliquez sur
        l'image pour afficher la totalité de l'image). Il est juste là pour vous
        montrer comment fonctionne cette représentation (observez le bien, il
        m'a fallut beaucoup de temps pour le faire ^^)
      </p>
      <p>
        Vous pouvez entre autre remarquer qu'à chaque problème sont associés 3
        sous-problèmes. Et que tous les cas terminaux (ceux qui finissent les
        lignes) sont tous des sous-problèmes où l'une des séquences est vide.
        Vous pouvez <strong>cliquer sur l'image</strong> pour l'afficher.{" "}
        <strong>Attention, c'est une grosse image</strong>.
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
        coupant ce dessin en trois parti pour essailler de tout faire tenir sur
        une page.Et pour vous facilite d'avantage la tache, j'ai pris encore un
        peu de mon temps pour faire du coloriage. Il est temps que je vous
        explique pourquoi. A chaque fois que vous voyez dans le fond deux
        rectangles de la <strong>même couleur</strong>, c'est que ces parties de
        l'arbres font exactement la même chose. C'est le{" "}
        <strong>même calcul</strong>, car les séquences qui restent à aligner
        sont les mêmes. S'il n'y a pas de rectangle, c'est que ce calcul
        n'apparaît qu'une fois.
      </p>
      <div class="row">
        <div class="col-sm-4">
          <img src={arbre_coupe1} />
        </div>
        <div class="col-sm-4">
          <img src={arbre_coupe2} />
        </div>
        <div class="col-sm-4">
          <img src={arbre_coupe3} />
        </div>
      </div>
      <p>
        Si vous n'avez pas compris ce que je viens de dire, voici quelques
        exemples. Vous pouvez aller vérifier juste au dessus. A chaque fois
        qu'il y a un rectangle <strong>vert pâle</strong>, c'est que l'on
        cherche à maximiser l'alignement entre <strong>A et A</strong>. Les{" "}
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
        Et encore, là c'est parce que j'ai eu pitié du logiciel de dessin. Car
        avec des séquences ADN comportant des centaines de nucléotïdes (ici
        elles font seulement 4 et 3 nucléotïdes), calculer plusieurs fois la
        même chose risque vite de devenir l'enfer. Bref, il faut mettre un terme
        à ce gaspillage grossier de <strong>capacité de calcul</strong>
        .&nbsp;Mais en échange, il va falloir qu'on stock les résultats quelque
        part. On va diminuer la <strong>complexité en temps</strong>, mais en
        échange, nous allons devoir augmenter la{" "}
        <strong>complexité en mémoire</strong>. Cette phrase vous parait obscure
        ? Pas de panique, vous l'aurez comprise à la fin du prochain paragraphe.
      </p>
      <h2>La mémoïzation à la rescousse</h2>
      <p>
        Si on <strong>mémorise les résultats des sous problèmes</strong>, on
        aura besoin de calculer les résultats qu'une seule fois. Du coup, on
        calculera une fois l'arbre associé à l'alignement de A et A. Et à chaque
        fois que l'on aura besoin d'aligner A et A, on aura juste à aller
        chercher son score maximal en mémoire. De même pour l'alignement de ACG
        et A ou de ACG et AG. Du coup, dans notre arbre, on verra{" "}
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
        Dire que l'on va mémoriser les résultats c'est bien beau. Mais pour ça,
        il nous faut une méthode pratique/rapide pour mémoriser le score de nos{" "}
        <strong>sous-problèmes</strong> en mémoire. Pour commencer, il faut
        savoir combien de sous-problèmes nous devrons mémoriser. En gros, nos
        sous problèmes consistent à trouver le meilleur alignement pour deux{" "}
        <strong>séquences génétiques</strong> plus petites que les deux
        séquences initiales. Par exemple, si au début une des séquences est
        «&nbsp;ACGTCG&nbsp;» les <strong>sous-séquences</strong> seront
        «&nbsp;ACGTCG&nbsp;», «&nbsp;ACGTC&nbsp;», «&nbsp;ACGT&nbsp;»,
        «&nbsp;ACG&nbsp;», «&nbsp;AC&nbsp;», «&nbsp;A&nbsp;» et «&nbsp;&nbsp;»
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
        Si vous ne voyez pas comment utiliser le tableau, voici un exemple de
        comment mémoriser les scores dans le tableau. C'est compliqué à
        expliquer avec de mots, mais vous devriez comprendre avec le dessin. Il
        vous suffit de passer votre souris par dessus une case pour voir à quel{" "}
        <strong>sous-problème</strong> correspond cette case.
      </p>

      <InteractiveGrid startWord1="ABCDEFGHIJ" startWord2="DEFGH" />

      <h2>Relation de récurrence nouvelle version</h2>
      <p>
        On sait maintenant qu'on peut aller beaucoup plus vite en mémorisant nos
        résultats dans un tableau. Mais il nous reste à{" "}
        <strong>adapter notre relation de récurrence au tableau</strong>. On a
        fait assez de théorie, donc on va passer directement à un exemple.
        Trouver la relation de récurrence pour «&nbsp;ACGTC&nbsp;» et
        «&nbsp;AGGA&nbsp;» Comme pour notre première fonction, on a 3
        possibilités qui donnent les relations dessinées ci-dessous,
        représentées chacune d'une couleur.
      </p>
      <img src={recurrence_tableau} />
      <p>
        Les deux <strong>délétions</strong> seront toujours des{" "}
        <strong>délétions</strong>. Par contre, la troisième relation peut être
        soit un <strong>match</strong>, soit une <strong>substitution</strong>.
        On aura un match si les lettres associées à la ligne et à la colonne
        sont les mêmes, et une substitution dans le cas contraire.
      </p>
      <p>
        Reste le cas de <strong>l'initialisation</strong>. La première ligne et
        la première colonne, où l'on ne peut pas appliquer notre relation de
        récurrence habituelle. Ce n'est pas vraiment ce qu'il y a de plus
        compliqué. Car pour aligner une séquence avec rien, on ne peut faire que
        des <strong>délétions</strong>. Ce qui va assez vite à calculer.
      </p>
      <p>
        On peut remarquer, que pour calculer un score, il faut en connaître déjà
        3. Celui situé en <strong>haut</strong>, celui à <strong>gauche</strong>{" "}
        et celui en <strong>haut à gauche</strong>. Après avoir rempli la
        première ligne et la première colonne. Avec notre relation de
        récurrence, on peut compléter le tableau ligne par ligne, ou colonne par
        colonne, ou en diagonale. Voici un schéma des 3 chemins de base à suivre
        pour calculer l'ensemble du tableau.
      </p>
      <img src={parcourt_tableau} />
      <p>
        Vous pouvez bien sûr faire des chemins plus étranges si cela vous amuse
        tant que ça vous pouvez appliquer la relation de récurrence. Ci dessous
        vous pouvez compléter le tableau en passant votre souris sur les cases.
        Si toutes les informations sont présentes, la relation de récurrence
        sera calculée.
      </p>
      <InteractiveRecurrence startWord1="ATCGTCGA" startWord2="AGGTGCGTA" />
      <p>
        Conclusions, on a maintenant tous les <strong>sous-problèmes</strong>{" "}
        possibles calculés. Remarquez au passage qu'on a inversé l'ordre de
        résolution. Avant on partait des deux séquences à aligner, et on
        simplifiait le problème en sous-problèmes, ce qui ne fonctionnait pas.
        Et là, on est parti de rien, pour calculer petit à petit des
        sous-problèmes de plus en plus gros jusqu'à atteindre le problème
        demandé.
      </p>
      <p>
        On connaît donc le <strong>score maximal</strong> qu'un alignement peut
        obtenir. Si vous avez suivi, vous savez que c'est le score trouvé dans
        la case tout en bas à droite du tableau. Mais il n'est pas marqué{" "}
        <strong>comment on obtient ce score optimal</strong>. Pas marqué ? Vous
        êtes sur ? Disons que ce n'est pas écrit explicitement, mais cela se
        retrouve très facilement en faisant le chemin inverse.
      </p>
      <p>
        Je m'explique. Pour obtenir ce <strong>score maximal</strong>, on ne
        peut venir que de <strong>3 sous-problèmes</strong>. En appliquant
        l'algorithme dans l'autre sens, on sait de{" "}
        <strong>quel(s) sous-problème(s)</strong> vient notre score maximal. On
        peut ainsi remonter tout le tableau, et donc trouver l'alignement
        correspondant. Remarquez au passage que la solution optimale d'un
        sous-problème peut venir de plusieurs sous-problèmes. En effet, il n'y a
        pas forcément un seul alignement optimal, il peut y en avoir plusieurs.
        Et cet algorithme les donne tous, ce qui n'est plutôt pas mal.
      </p>
      <FullAlgo startWord1="ABCD" startWord2="ABD" />
    </Layout>
  )
}

export default Page
