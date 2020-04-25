import React from "react"
import { Link } from "gatsby"

import Layout from "src/components/layout"
import SEO from "src/components/seo"

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
const SecondPage = () => (
  <Layout location="/tic-tac-toe">
    <SEO title="Tic-tac-toe" />

    <noscript>You need to enable JavaScript to run this app.</noscript>

    <h1>Can you defeat an AI at tic-tac-toe?</h1>

    <p>
      Most of the exciting scientific articles in artificial intelligence are
      about computer defeating human at famous game. For this article lets just
      consider the simple game of tic-tac-toe and solve it with technics coming
      from the stone age of AI.
    </p>
    <p>
      But let start by testing how good is you computer. For a friendly
      reminder, you have to compleat a 3 by 3 grid with your symbol (a cross or
      a circle). The first player who aligns 3 of its symbols win the match. By
      convention in this page, the first player will use crosses.
    </p>

    <PlayableIntro />

    <h2>How your computer see the world</h2>

    <p>
      For our computer the world is limited to tic-tac-toe grids (this is a bit
      restrictif). When you start a game, the computer see an empty grid. He
      choose an action which leads to a grid with a cross. Then, you choose an
      action, this leads to an new state containing a cross and a circle, then
      he plays, then he plays, you plays, etc....
    </p>

    <History />

    <p>
      That is near to how you perceive the game: A succession of different
      grids. But the power of the computer, is that he can go in the past and
      try other actions. For example below, the first player realized that he
      did a mistake when he chose its second action. That is just an example,
      but if your patient, you can try every possibility by clicking on the
      grids.
    </p>

    <TreeIntro />

    <p>
      Look how beautiful it is. It looks like a tree, with its root on the left
      and a ramification after each grid. Of course, for a human testing all the
      possibilities seems long and boring. But computers - almost - never
      complain. If you're polite with them, they will try all the possibilities
      for both players. The full knowledge of players give to the computer the
      power to compute if a player can be sure to win or not and to become the
      master of tic-tac-toe!{" "}
      <span role="img" aria-label="evil">
        👹
      </span>
    </p>

    <p>
      More precisely, the computer can classify each tic-tac-toe board as
      follow.
    </p>
    <ol>
      <li>
        <b>
          <span style={{ color: "blue" }}>X</span> win
        </b>{" "}
        : Player <span style={{ color: "blue" }}>X</span> has a strategy to win
        whatever whatever player <span style={{ color: "red" }}>O</span> do.
      </li>
      <li>
        <b>
          <span style={{ color: "red" }}>O</span> win
        </b>
        : Player <span style={{ color: "red" }}>O</span> has a strategy to win
        whatever whatever player <span style={{ color: "blue" }}>X</span> do.
      </li>
      <li>
        <b>
          <span style={{ color: "orange" }}>null</span>
        </b>
        : None of the player has a strategy to be sure to win.
      </li>
    </ol>
    <p>
      Of course the computer alway make the best choice for himself. He will try
      all the possible actions and compute to which category they belong. If an
      action leads to a board classified as a winning one for him - Yes,
      computer whant to win{" "}
      <span role="img" aria-label="angel">
        👼
      </span>
      . If there is no winning action, he will chose an action leading to a{" "}
      <span style={{ color: "orange" }}>null</span> board - life is hard you can
      not always win
      <span role="img" aria-label="disapointed">
        😒
      </span>
      . And if there are neither winning nor null action, it means that the
      computer is forced to play an action leading to a winning board... for the
      adversary{" "}
      <span role="img" aria-label="crying">
        😭
      </span>
      .
    </p>
    <p>
      Now you can play again against the computer. You can choose to see if
      actions are winning for <span style={{ color: "blue" }}>X</span>,{" "}
      <span style={{ color: "red" }}>O</span> or are{" "}
      <span style={{ color: "orange" }}>null</span>. You can either play against
      yourself if loosing bother you{" "}
      <span role="img" aria-label="smile">
        😉
      </span>
    </p>

    <ComputerView />

    <h2>How to compute if a state is a winning one?</h2>
    <p>
      There is some simple cases. For example if 3{" "}
      <span style={{ color: "blue" }}>X</span> - or 3{" "}
      <span style={{ color: "red" }}>O</span> - are aligned, it' a winning board
      for <span style={{ color: "blue" }}>X</span> - or{" "}
      <span style={{ color: "red" }}>O</span>. If the board is full and nobody
      win, it's a <span style={{ color: "orange" }}>null</span>. Thank you
      Captain obvious! 3 of your symbols are aligned it's a winning grid, and if
      3 symbols of your opponent are alligned it's a loosing one. And of course
      if the grid is full and nobody win, it is a null one. #CaptainObvious
    </p>
    <img src={possibleEnds} alt="exemples of final situations at tic-tac-toe" />

    <p>
      Now, let assume that every body is a good player. Then if player can do an
      action that leads to a winning grid (for him) he will choose this action.
      If there is no such action he will choose the one leading to a null grid.
      And if there is not such action, he will choose a loosing one. (like our
      bot)
    </p>
    <p>
      So if there is an action leading to a winning grids, the current one is
      also a winning one (since the player will choose this action). If there is
      no winning but a null one, it is also a null one. Otherwise it is a
      loosing one. This is known as a recursive formula. Below the three cases
      are represented.
    </p>
    <p>
      It will be easier with an example. In the 3 examples bellow, it is to{" "}
      <span style={{ color: "blue" }}>X</span> to play. In first cas, there is
      an action leading to a winning grid for{" "}
      <span style={{ color: "blue" }}>X</span>. In the second one, there are
      somme <span style={{ color: "orange" }}>null</span> actions some wining
      ones for <span style={{ color: "red" }}>O</span>. Then it's a{" "}
      <span style={{ color: "orange" }}>null</span> grid. In the last
      configuration, all the possibles actions lead to board winning for{" "}
      <span style={{ color: "red" }}>O</span>. So it's a{" "}
      <span style={{ color: "red" }}>O</span> board.
    </p>

    <RecurrenceExample />

    <p>
      The easiest way to compute who will win is to use rules proposed above. We
      define the function "getWinner" which for a given grid returns the winner.
      If the state is a final one, it return the winner (easy case). Otherwise,
      the function plays every possible action and use getWinner on the new
      state to know if actions are leading to{" "}
      <span style={{ color: "blue" }}>X</span>,{" "}
      <span style={{ color: "red" }}>O</span> or{" "}
      <span style={{ color: "orange" }}>null</span>. From those results and with
      our previous relation we can compute who will win.
    </p>

    <img src={algoPicture} alt="schem of the algorithm" />

    <p>
      Wait a minute. To compute "getWinner", we need to use "getWinner" ? That's
      stupide ! Hum... not really, this is called recursive function. Each time
      "getWinner" call another "getWinner", the grid is different. More
      precisely, the new state contains more symbols than the previous one. So
      they will necessarily reach a terminal state. In other words, each time
      you call the function you add a symbols, then after nine call you have 9
      symbols, so the game is over, and the function will necessarily return a
      value. Once every final value has been reach the previous "getWinner" can
      compute its result and give it to the previous one, etc ...
    </p>
    <p>
      If you want to see step by step how the computer analysis the tree of
      possibilities, you can press the button "next".
    </p>
    <TreeSearch />

    <h2>And the result is ...</h2>
    <p>
      The tic-tac-toe played by perfect player ends with a{" "}
      <span style={{ color: "orange" }}>null</span> (you already know it if you
      tried to let the computer play against himself). To prove it you can have
      a look at the tree bellow. It corresponds to all the possible parties with
      a computer as first player.
    </p>
    <p>
      When it is time to the first player to play, we print only one action,
      corresponding to the one computer will play. For player two, we try every
      possible action to be sure that what ever he choose to play, the computer
      can obtain what he expected.
    </p>
    <p>
      Since there is a lot of possibilities, you can hide child of a grid by
      clicking on it.
    </p>

    <CompletTree robot={0} lang="en" />

    <p>
      Why choosing Player one for the computer ? Because it is the smallest
      tree.
      <Link to={"/tic-tac-toe/second-player-tree/fr"}>Here</Link> is the
      tic-tac-toe tree of possibilities for computer as second player.
    </p>
  </Layout>
)

export default SecondPage
