import React from "react"
import { Link } from "gatsby"

import Layout from "src/components/layout"
import SEO from "src/components/seo"

import PlayableIntro from "src/components/tic-tac-toe/explenations/intro"
import History from "src/components/tic-tac-toe/explenations/history"
import TreeIntro from "src/components/tic-tac-toe/explenations/introTree"
import RecurenceExample from "src/components/tic-tac-toe/explenations/recurence"
import ComputerView from "src/components/tic-tac-toe/explenations/computerView"
import TreeSearch from "src/components/tic-tac-toe/explenations/treeSearch"
import CompletTree from "src/components/tic-tac-toe/explenations/completTree"

//images
import algoPicture from "./images/algo.svg"
import possibleEnds from "./images/ends.svg"
const SecondPage = () => (
  <Layout location="/tic-tac-toe">
    <SEO title="Tic-tac-toe" />

    <noscript>You need to enable JavaScript to run this app.</noscript>

     
      <h1>Can you defeat an AI at tic-tac-toe?</h1>

      <p>
        Most of the exciting scientific articles in artificial inteligence are
        about computer defeating human at famouse game. For this article lets
        just consider the simple game of tic-tac-toe and solve it with technics
        comming from the stone age of AI.
      </p>
      <p>
        But let start by testing how good is you computer. For a friendly
        reminder, you have to compleat a 3 by 3 grid with your symbol (a cross
        or a circle). The first player who aligns 3 of its symbols win the
        match. By convention in this page, the first player will use crosses.
      </p>

      <PlayableIntro />

      <h2>How your computer see the world</h2>

      <p>
        For our computer the world is limited to tic-tac-toe grids (this is a
        bit restrictif). When you start a game, the computer see an empty grid.
        He choos an action wich leads to a grid with a cross. Then, you choose
        an action, this leads to an new state containing a cross and a circle,
        then he plays, then he plays, you plays, etc....
      </p>

      <History />

      <p>
        That is near to how you percieve the game: A succession of different
        grids. But the power of the computer, is that he can go in the past and
        try other actions. For example below, the first player realised that he
        did a mistaket when he chose its second action. That is just an example,
        but if your patient, you can try evry possibility by cliking on the
        grids.
      </p>

      <TreeIntro />

      <p>
        Look how beaoutiful it is. It looks like a tree, with its root on the
        left and a ramification after eatch grid. Of course, for a human testing
        all the possibilities seems long and boaring, but computers - almost -
        never complain. If you're polite with them, they will try all the
        possibilities for both players. The full knoleage of players give to the
        computer the power to compute if a player can be sure to win or not.
      </p>

      <p>
        PLaying corresponds to making a choice between multiple actions. Being a
        cleaver player means to chose the action leading to victory. Since the
        computer know if a stats is winning or not, he just have to try every
        possible action and compute if it leads to a victorious grid or a
        loosing one. More precisely, each action can lead to three
        possibilities.
      </p>
      <ol>
        <li>
          <b>winning</b> : after playing this action the computer is sure to win
        </li>
        <li>
          <b>null</b>: after playing this action the computer is sur to be able
          to obtain a null
        </li>
        <li>
          <b>loosing</b>: after playing this action, there is a way for the
          oponent to win the game
        </li>
      </ol>
      <p>
        Of course the computer alway make the best choice for himself. He first
        looks for a winning action, if it is impossible, he try to find a null
        one. And finaly accept to play a loosing one if it is the only available
        option.
      </p>
      <p>
        You can now see how the computer estimate each action. Feel free to play
        against yourself, and to choose to see solutions or not.
      </p>

      <ComputerView />

      <h2>How to compute if a state is a winning one?</h2>
      <p>
        There is some simple cases. For example if 3 of your symbols are aligned
        it's a winning grid, and if 3 symbols of your opponent are alligned it's
        a loosing one. And of course if the grid is full and nobody win, it is a
        null one. #CaptainObvious
      </p>
      <img
        src={possibleEnds}
        alt="exemples of final stituations at tic-tac-toe"
      />

      <p>
        Now, let assume that every body is a good player. Then if player can do
        an action that leads to a winning grid (for him) he will choose this
        action. If there is no such action he will choose the one leading to a
        null grid. And if there is not such action, he will choose a loosing
        one. (like our bot)
      </p>
      <p>
        So if there is an action leading to a winning grids, the current one is
        also a winning one (since the player will choose this action). If there
        is no winning but a null one, it is also a null one. Otherwise it is a
        loosing one. This is knon as a recurcive formula. Below the three cases
        are represented.
      </p>
      <p>
        In thoses cases X has to choose an action. In the first case, there is a
        winning solution, so it is a winning grid. in the second case, there is
        a loosing action and null actions, so it is a null grid. And the last
        one is a loosing grid since all the actions lead to loosing grid.
      </p>

      <RecurenceExample />

      <p>
        The easieaset way to compute that, is to simply use rules proposed
        above. We define the function "getWinner" which for a given grid returns
        the winner. Of course if the state is a final one, it return the winner.
        Otherwise, it plays every possible action and use getWinner on the new
        state to know if actions are winning/null/loosing. Then, we use the
        recurcive formula to know if the grid is winning/null/loosing.
      </p>

      <img src={algoPicture} alt="schem of the algorithm" />

      <p>
        Wait a minute. To compute getWiner, we need to use getWinner ? That's
        stupide ! Hum... not realy, this is called recurcive function. Each time
        getWinner call another getWinner, the grid is different. More precisely,
        the new state contains more symbols than the previous one. So they will
        necesarly reach a terminal state. In other words, each time you call the
        function you add a symbols, then after nine call you have 9 symbols, so
        the game is over, and the funciton will necesarly return a value. Once
        evry final value has been reach the previous getWinner can compute it's
        result and give it to the previous one, etc ...
      </p>
      <p>
        If you want to see it step by step how the computer analysis the tree of
        possibilities, you can press the button "next".
      </p>
      <TreeSearch />

      <h2>And the result is ...</h2>
      <p>
        The tic-tac-toe played by perfect player ends with a null (you alleready
        know it if you tried to let the computer play against himself). To prove
        it you can have a look at the tree bellow. It corresponds to all the
        possible parties with a computer as first player.
      </p>
      <p>
        When it is time to the first player to plat, we print only one action,
        corresponding to the one computer will play. For player two, we try
        every possible action to be sure that what ever he choose to play, the
        computer can obtain what he expected.
      </p>
      <p>
        Since there is a lot of possibilities, you can hide childs of a grid by
        clicking on it.
      </p>

      <CompletTree robot={0} />

      <p>
        Why choosing Player one for the computer ? Because it is the smalest
        tree.<Link to={"/tic-tac-toe/second-player-tree/fr"}>Here</Link> is the
        tic-tac-toe tree of possibilities for computer as second player.
      </p>
     
  </Layout>
)

export default SecondPage
