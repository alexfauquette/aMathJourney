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
        In <Link to="/tic-tac-toe/fr">the article on tic-tac-toe</Link>, we
        solved the problem with a recurrence relation. But this solution is slow
        and so limited to small problems. Hopefully, it is possible to increase
        speed with{" "}
        <a href="https://en.wikipedia.org/wiki/Dynamic_programming">
          dynamic programming
        </a>
        . We leave useless games like tic-tac-toe to look at bioinformatics and
        DNA alignement with{" "}
        <a href="https://en.wikipedia.org/wiki/Needleman%E2%80%93Wunsch_algorithm">
          Needleman-Wunsch algorithm
        </a>
        .
      </p>
      <p>
        Like in <Link to="/tic-tac-toe/fr">tic-tac-toe problem</Link>, DNA
        alignment can be resumed as a recurrence relation. If you use naïve
        computation, you will repeat many time similar problems. So here we will
        propose to save intermediate results in order to avoid to repeat
        computation.
      </p>
      <h2>Reminder in DNA</h2>
      <p>
        To be brief, all you gens are written on molecules named{" "}
        <a href="https://en.wikipedia.org/wiki/DNA">
          Deoxyribonucleic Acid (DNA)
        </a>
        . But it's not written in English or in French. This molecule is only
        composed of 4 basic patterns. We will use 4 letters to represent them.
        So for us a DNA is a word made with only <strong>4 letters</strong>{" "}
        which are <strong>A</strong>, <strong>C</strong>, <strong>G</strong>,{" "}
        <strong>T</strong>.
      </p>
      <p>
        Just a little picture to represent how we simplified DNA. From molecular
        representation, to pattern representation and then words. lettres pour
        simplifier.
      </p>
      <img src={simplification_ADN} />
      <p>
        If you wonder why we keep only one helix on the two, it's because they
        carry the same information. Look at the "T" on the opposite helix you
        will always find a "A". In the "C" is always with a "G". So if the first
        helix is "ACAGT", you know that the second will be "TGTCA". Knowing one
        of the two is enough.
      </p>
      <p>
        Now we want to be able to compare two DNAs. For that we will try to
        match ass many letter as possible between the two words. In the exemple
        bellow, adding a space help us to align all the other letters.
      </p>
      <img src={alignement} />
      <h2>Formalizing</h2>
      <p>
        We need to define what is a "good way" to align two DNAs. For that we
        will define a<strong>score</strong> such that a <strong>good</strong>{" "}
        alignment has a <strong>high</strong> score. Of course, a{" "}
        <strong>bad</strong> alignment will have a <strong>low</strong> score.
      </p>
      <p>In an alignment we have 3 possibilities&nbsp;:</p>
      <ul>
        <li>
          Letters <Match>match</Match> : That is what we want. So for each{" "}
          <Match>match</Match> we give <Match>+1</Match>.{" "}
        </li>
        <li>
          Letters <MissMatch>miss-match</MissMatch> : for exemple the A is
          replaced by T in the other DNA. It's a{" "}
          <MissMatch>substitution</MissMatch>, we want to avoid that so we will
          give <MissMatch>-1</MissMatch> each time it appends.
        </li>
        <li>
          Some time we prefer to use a <Deletion>space</Deletion>. In order to
          improve alignement latter in the word we can prefer to use some
          spaces. Those <Deletion>deletions</Deletion>, can append in DNAs but
          they are more rare than <MissMatch>substitution</MissMatch>. So we
          will give <Deletion>-2</Deletion> in order to say that we prefer{" "}
          <MissMatch>substitution</MissMatch> to <Deletion>space</Deletion>.
        </li>
      </ul>
      <p></p>
      <p>
        The score is just the sum of those values. Let see an exemple. If you
        count the number of <Match>matches</Match>, of{" "}
        <Deletion>deletions</Deletion> and <MissMatch>substitutions</MissMatch>{" "}
        and you apply their respective <strong>score</strong> you get the
        following result.
        <br /> Score is : <Match>1</Match> + <MissMatch>(-1)</MissMatch> +{" "}
        <Match>1</Match> + <Deletion>(-2)</Deletion> + <Match>1</Match> +{" "}
        <MissMatch>(-1)</MissMatch> + <MissMatch>(-1)</MissMatch> +{" "}
        <Match>1</Match> = -1
      </p>
      <img src={calcul_score} />
      <p>
        Of course you can choose other values. In biology there is some tables
        in which they give the probabilities for a A to be replaced by a C, or
        by a T or just to be deleted. The score will be more relevant with those
        informations. But we don't care here.
      </p>
      <h2>Impossible to use naïve solution</h2>
      <p>
        Trying all the possibilities is just impossible. Let try to align 10
        letters with 10 other ones. You can not modify letters order. All you
        can do is add some spaces. But you have 20 possibilities to put one
        space. If you want to consider solutions with 2 spaces you have 180
        possibilities. For 3 spaces ? it's 1.140 possibilities It goes high
        fast. Too fast to be tractable with real DNAs which are made of hundreds
        and thousands of letters.
      </p>
      <p>
        So we can not try all the alignments and look at the one with the lowest
        score.
      </p>
      <h2>Recurrence relation are not enough</h2>
      <p>
        Trying every solution is not smart enough. So let's try{" "}
        <strong>recurrence</strong>. We are trying to get the best alignment of
        two DNAs. This alignment can finish with only 3 possibilities:
      </p>
      <ul>
        <li>
          We use the last letters of each DNA and they <Match>match</Match> or
          they <MissMatch>substitution</MissMatch>
        </li>
        <li>
          We choose to use a <Deletion>deletion</Deletion> for the first DNA
        </li>
        <li>
          We choose to use a <Deletion>deletion</Deletion> for the second DNA
        </li>
      </ul>
      <p></p>
      <p>For those who prefer a scheme, There are the 3 solutions.</p>
      <img src={trois_possibilites} />
      <p>
        For each of those possibilities, we have two smaller DNAs to align. So
        we reuse the function on the remaining DNAs the compute there{" "}
        <strong>best score</strong>. Like for tic-tac-toe, we{" "}
        <strong>reduce the size of the problem</strong> at each time. So after
        some time we will reach size 0 and get the solution.
      </p>
      <p>Mathematically, the formula is the following one&nbsp;:</p>
      <img src={formule_rec_ADN} />
      <p>
        Do not panic if you don't understand it. Just read it slowly, it is the
        translation of what we said before. If you want I plot its results later
        in the article.
      </p>
      <p>
        <strong>Problem</strong>&nbsp;: each time we use this equation, we get 3
        smaller problems to solve. The we can say that we have an{" "}
        <strong>exponential complexity</strong>. In fact this algorithm do what
        we wanted to avoid. It try all the possibilities. But let se an exemple.
      </p>
      <h2>A feeling of "déjà vue"</h2>
      <p>
        Here is the <strong>tree of recurrence</strong> for a really simple
        case, but an interesting one. We just want to aligne "ACGT" and "AGT".
        but out tree has already 130 leafs. You don't need to read it completely
        (you can click on it to get a full version) . You just need to notice
        that each problem leads to 3 othe ones which are a bit smaller. Untill
        we get a problem in which one of the DNA is empty so we can directly
        comput its score.
      </p>
      <img src={arbre_min} onClick={handleClickOpen} />
      <Dialog onClose={handleClose} open={openFullTree}>
        <DialogTitle>Tree of possible alignments</DialogTitle>
        <DialogContent>
          <img src="" alt="" />
        </DialogContent>
      </Dialog>
      <p>
        You noticed a pattern? No? Of course, there are too many details. So I
        cut i in three parts and use colors to represent problems. Each{" "}
        <strong>problem</strong> is associated to a unique{" "}
        <strong>color</strong>. So each time you see a box with the same color,
        it means that they compute the same thing. Computing the same thing?
        That's a bit stupid no?
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
        Here some exemples. Each time you see a <strong>light green</strong>{" "}
        box, it correspond to the alignment of <strong>A and A</strong>. The{" "}
        <strong>light blue</strong> correspond to <strong>ACG and A</strong>.
        The <strong>yellow</strong> are for <strong>ACG and AG</strong>, etc.
        <br /> So on this tree we compute :
      </p>
      <ul>
        <li>
          <strong>25 times</strong> alignement between <strong>A</strong> and{" "}
          <strong>A</strong>
        </li>
        <li>
          <strong>5 times</strong> alignement between <strong>ACG</strong> and{" "}
          <strong>A</strong>
        </li>
        <li>
          <strong>3 times</strong> alignement between <strong>ACG</strong> and{" "}
          <strong>AG</strong>
        </li>
      </ul>
      <p>
        It's clearly a waste of <strong>computing power</strong>
        .&nbsp;To avoid this waste, we will need to store those results
        somewhere. Thanks to this storage, we will reduce{" "}
        <strong>time complexity</strong>, but it's not free since we neet to
        increase
        <strong>memory complexity</strong>. It seems obscure for you ? Don't
        care, it will be okay after the next part.
      </p>
      <h2>The help of memoization</h2>
      <p>
        If you save in <strong>memory results of sub-problems</strong>, you will
        not have to redo the computation. So the first time you see the problem
        of aligning "ACG" with "A", you comput it and save the results. Each
        time you will see it in the futur you can get directly the result from
        memory. So in our tree each color box will appear only once.
        <br />
        You can see the result of this technic in the tree bellow. It's the same
        except that I removed all the duplicated boxes. It's more efficient
        don't you think?
      </p>
      <img src={arbre_elague} />
      <p>
        But how can we save all those results? We need something easy and fast
        to save score of all our <strong>sub-problems</strong>. For that let's
        start by counting how much sub-problem do we have.
      </p>
      <p>
        A sub-problem is aligning two subsequence of our DNAs. For exemple
        <strong>subsequences</strong> of "ACGTCG" are: "ACGTCG", "ACGTC",
        "ACGT", "ACG", "AC", "A" and "".
      </p>
      <p>
        So if our DNAs are made with n and m letters, there is (n+1){" "}
        <strong>subsequences</strong> for the first DNA and (m+1){" "}
        <strong>subsequences</strong> for the second DNA. By combining them we
        get a total number of (n+1)(m+1) <strong>sub-problems</strong>. It will
        be easy to store the in a table with (n+1) rows and (m+1) columns.
      </p>
      <p>
        It's crazy&nbsp;! We started form a <strong>recurrence relation</strong>{" "}
        which was time consuming, and we realize that it correspond to feeding a
        table.
      </p>
      <p>
        Here is an example of how this table work. It's easier to understand by
        playing with it. Just move your mouse on boxes to know the corresponding
        <strong>sub-problem</strong>.
      </p>

      <InteractiveGrid startWord1="ABCDEFGHIJ" startWord2="DEFGH" lang="en" />

      <h2>New version of the recurrence relation</h2>
      <p>
        We now have a table to feed. Now we will adapt the recurrence relation
        to this table. For that we will just use an exemple. If I want to aligne
        "ACGTC" and "AGGA" I still have tree possibilities for the end. Each of
        those possibilities are represented by a colour.
      </p>
      <img src={recurrence_tableau} />
      <p>
        The two <Deletion>deletions</Deletion> will always be{" "}
        <Deletion>deletions</Deletion>. But the third can be a{" "}
        <Match>match</Match> or a <MissMatch>substitution</MissMatch>. We will
        have a <Match>match</Match> if letters in the row and the column are the
        same and a <MissMatch>substitution</MissMatch>
        otherwise.
      </p>

      <p>
        Move your mouse bellow to complet the table with our new recurrence
        relation. If we have all the informations needed to fill the boxe the
        relation will be applied. otherwise one of the missing sub problem will
        be indicated.
      </p>
      <InteractiveRecurrence
        startWord1="ATCGTCGA"
        startWord2="AGGTGCGTA"
        lang="en"
      />
      <p>
        You probably notices tat to fill a box you need three other ones . The{" "}
        <strong>top</strong>, <strong>left</strong> and{" "}
        <strong>top left</strong> boxes. So after filling the first line nd
        first column, we can fill the table line by line, column by column or
        with more creative paths.
      </p>
      <img src={parcourt_tableau} />

      <p>
        To conclude, we now have the best score of all the
        <strong>sub-problems</strong>. Noticed that we inversed the order of
        computation. Instead of starting by our problem and simplify it step by
        step, we start by easies sub problems and add elements until we reach
        our origina problem.
      </p>
      <p>
        So the best score of our problem is the one in the box at the last
        column and last line. The last box to be fill. We have the score but not
        the alignment to get it. But we can get it easily for the table.
      </p>
      <p>
        To get this <strong>best score</strong>we can come from to 3 sub
        problems. Those in cases <strong>top</strong>, <strong>left</strong> and{" "}
        <strong>top left</strong>. So let compute which of those sub-problems
        allow to reach the best score. And we can repeat the operation until we
        get arrive in the first line or the first column. Notice that this path
        is not necessarily unique since there is not necessarily one optimal
        alignement. This algorithm allow us to recover all of them.
      </p>
      <FullAlgo startWord1="ACGTCATC" startWord2="ATGCGGC" lang="en" />
    </Layout>
  )
}
export default Page
