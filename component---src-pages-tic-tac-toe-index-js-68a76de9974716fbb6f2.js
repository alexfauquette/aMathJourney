(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{SP0I:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),l=a("Wbzz"),i=a("Bl7J"),r=a("vrFN"),s=a("aR0/"),c=a("4+NC"),h=a("mH4X"),u=a("X/7/"),m=a("PR9k"),p=a("4j5C"),y=a("ckL+"),d=a("3vuK"),g=a.n(d),w=a("0y4M"),f=a.n(w);t.default=function(){return o.a.createElement(i.a,{location:"/tic-tac-toe"},o.a.createElement(r.a,{title:"Tic-tac-toe"}),o.a.createElement("noscript",null,"You need to enable JavaScript to run this app."),o.a.createElement("h1",null,"Can you defeat an AI at tic-tac-toe?"),o.a.createElement("p",null,"Most of the exciting scientific articles in artificial intelligence are about computer defeating human at famous game. For this article lets just consider the simple game of tic-tac-toe and solve it with technics coming from the stone age of AI."),o.a.createElement("p",null,"But let start by testing how good is you computer. For a friendly reminder, you have to compleat a 3 by 3 grid with your symbol (a cross or a circle). The first player who aligns 3 of its symbols win the match. By convention in this page, the first player will use crosses."),o.a.createElement(s.a,null),o.a.createElement("h2",null,"How your computer see the world"),o.a.createElement("p",null,"For our computer the world is limited to tic-tac-toe grids (this is a bit restrictif). When you start a game, the computer see an empty grid. He choose an action which leads to a grid with a cross. Then, you choose an action, this leads to an new state containing a cross and a circle, then he plays, then he plays, you plays, etc...."),o.a.createElement(c.a,null),o.a.createElement("p",null,"That is near to how you perceive the game: A succession of different grids. But the power of the computer, is that he can go in the past and try other actions. For example below, the first player realized that he did a mistake when he chose its second action. That is just an example, but if your patient, you can try every possibility by clicking on the grids."),o.a.createElement(h.a,null),o.a.createElement("p",null,"Look how beautiful it is. It looks like a tree, with its root on the left and a ramification after each grid. Of course, for a human testing all the possibilities seems long and boring. But computers - almost - never complain. If you're polite with them, they will try all the possibilities for both players. The full knowledge of players give to the computer the power to compute if a player can be sure to win or not and to become the master of tic-tac-toe!"," ",o.a.createElement("span",{role:"img","aria-label":"evil"},"👹")),o.a.createElement("p",null,"More precisely, the computer can classify each tic-tac-toe board as follow."),o.a.createElement("ol",null,o.a.createElement("li",null,o.a.createElement("b",null,o.a.createElement("span",{style:{color:"blue"}},"X")," win")," ",": Player ",o.a.createElement("span",{style:{color:"blue"}},"X")," has a strategy to win whatever whatever player ",o.a.createElement("span",{style:{color:"red"}},"O")," do."),o.a.createElement("li",null,o.a.createElement("b",null,o.a.createElement("span",{style:{color:"red"}},"O")," win"),": Player ",o.a.createElement("span",{style:{color:"red"}},"O")," has a strategy to win whatever whatever player ",o.a.createElement("span",{style:{color:"blue"}},"X")," do."),o.a.createElement("li",null,o.a.createElement("b",null,o.a.createElement("span",{style:{color:"orange"}},"null")),": None of the player has a strategy to be sure to win.")),o.a.createElement("p",null,"Of course the computer alway make the best choice for himself. He will try all the possible actions and compute to which category they belong. If an action leads to a board classified as a winning one for him - Yes, computer whant to win"," ",o.a.createElement("span",{role:"img","aria-label":"angel"},"👼"),". If there is no winning action, he will chose an action leading to a"," ",o.a.createElement("span",{style:{color:"orange"}},"null")," board - life is hard you can not always win",o.a.createElement("span",{role:"img","aria-label":"disapointed"},"😒"),". And if there are neither winning nor null action, it means that the computer is forced to play an action leading to a winning board... for the adversary"," ",o.a.createElement("span",{role:"img","aria-label":"crying"},"😭"),"."),o.a.createElement("p",null,"Now you can play again against the computer. You can choose to see if actions are winning for ",o.a.createElement("span",{style:{color:"blue"}},"X"),","," ",o.a.createElement("span",{style:{color:"red"}},"O")," or are"," ",o.a.createElement("span",{style:{color:"orange"}},"null"),". You can either play against yourself if loosing bother you"," ",o.a.createElement("span",{role:"img","aria-label":"smile"},"😉")),o.a.createElement(m.a,null),o.a.createElement("h2",null,"How to compute if a state is a winning one?"),o.a.createElement("p",null,"There is some simple cases. For example if 3"," ",o.a.createElement("span",{style:{color:"blue"}},"X")," - or 3"," ",o.a.createElement("span",{style:{color:"red"}},"O")," - are aligned, it' a winning board for ",o.a.createElement("span",{style:{color:"blue"}},"X")," - or"," ",o.a.createElement("span",{style:{color:"red"}},"O"),". If the board is full and nobody win, it's a ",o.a.createElement("span",{style:{color:"orange"}},"null"),". Thank you Captain obvious! 3 of your symbols are aligned it's a winning grid, and if 3 symbols of your opponent are alligned it's a loosing one. And of course if the grid is full and nobody win, it is a null one. #CaptainObvious"),o.a.createElement("img",{src:f.a,alt:"exemples of final situations at tic-tac-toe"}),o.a.createElement("p",null,"Now, let assume that every body is a good player. Then if player can do an action that leads to a winning grid (for him) he will choose this action. If there is no such action he will choose the one leading to a null grid. And if there is not such action, he will choose a loosing one. (like our bot)"),o.a.createElement("p",null,"So if there is an action leading to a winning grids, the current one is also a winning one (since the player will choose this action). If there is no winning but a null one, it is also a null one. Otherwise it is a loosing one. This is known as a recursive formula. Below the three cases are represented."),o.a.createElement("p",null,"It will be easier with an example. In the 3 examples bellow, it is to"," ",o.a.createElement("span",{style:{color:"blue"}},"X")," to play. In first cas, there is an action leading to a winning grid for"," ",o.a.createElement("span",{style:{color:"blue"}},"X"),". In the second one, there are somme ",o.a.createElement("span",{style:{color:"orange"}},"null")," actions some wining ones for ",o.a.createElement("span",{style:{color:"red"}},"O"),". Then it's a"," ",o.a.createElement("span",{style:{color:"orange"}},"null")," grid. In the last configuration, all the possibles actions lead to board winning for"," ",o.a.createElement("span",{style:{color:"red"}},"O"),". So it's a"," ",o.a.createElement("span",{style:{color:"red"}},"O")," board."),o.a.createElement(u.a,null),o.a.createElement("p",null,'The easiest way to compute who will win is to use rules proposed above. We define the function "getWinner" which for a given grid returns the winner. If the state is a final one, it return the winner (easy case). Otherwise, the function plays every possible action and use getWinner on the new state to know if actions are leading to'," ",o.a.createElement("span",{style:{color:"blue"}},"X"),","," ",o.a.createElement("span",{style:{color:"red"}},"O")," or"," ",o.a.createElement("span",{style:{color:"orange"}},"null"),". From those results and with our previous relation we can compute who will win."),o.a.createElement("img",{src:g.a,alt:"schem of the algorithm"}),o.a.createElement("p",null,'Wait a minute. To compute "getWinner", we need to use "getWinner" ? That\'s stupide ! Hum... not really, this is called recursive function. Each time "getWinner" call another "getWinner", the grid is different. More precisely, the new state contains more symbols than the previous one. So they will necessarily reach a terminal state. In other words, each time you call the function you add a symbols, then after nine call you have 9 symbols, so the game is over, and the function will necessarily return a value. Once every final value has been reach the previous "getWinner" can compute its result and give it to the previous one, etc ...'),o.a.createElement("p",null,'If you want to see step by step how the computer analysis the tree of possibilities, you can press the button "next".'),o.a.createElement(p.a,null),o.a.createElement("h2",null,"And the result is ..."),o.a.createElement("p",null,"The tic-tac-toe played by perfect player ends with a"," ",o.a.createElement("span",{style:{color:"orange"}},"null")," (you already know it if you tried to let the computer play against himself). To prove it you can have a look at the tree bellow. It corresponds to all the possible parties with a computer as first player."),o.a.createElement("p",null,"When it is time to the first player to play, we print only one action, corresponding to the one computer will play. For player two, we try every possible action to be sure that what ever he choose to play, the computer can obtain what he expected."),o.a.createElement("p",null,"Since there is a lot of possibilities, you can hide child of a grid by clicking on it."),o.a.createElement(y.a,{robot:0,lang:"en"}),o.a.createElement("p",null,"Why choosing Player one for the computer ? Because it is the smallest tree.",o.a.createElement(l.Link,{to:"/tic-tac-toe/second-player-tree/fr"},"Here")," is the tic-tac-toe tree of possibilities for computer as second player."))}}}]);
//# sourceMappingURL=component---src-pages-tic-tac-toe-index-js-68a76de9974716fbb6f2.js.map