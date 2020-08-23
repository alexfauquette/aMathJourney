import React from "react"

import classes from "./gridView.module.scss"

const foodTable = [
  [
    { name: "Melon", icon: "🍈" },
    { name: "Watermelon", icon: "🍉" },
    { name: "Tangerine", icon: "🍊" },
    { name: "Lemon", icon: "🍋" },
    { name: "Banana", icon: "🍌" },
  ],
  [
    { name: "Mango", icon: "🥭" },
    { name: "Red Apple", icon: "🍎" },
    { name: "Green Apple", icon: "🍏" },
    { name: "Pear", icon: "🍐" },
    { name: "Peach", icon: "🍑" },
  ],
  [
    { name: "Strawberry", icon: "🍓" },
    { name: "Kiwi Fruit", icon: "🥝" },
    { name: "Tomato", icon: "🍅" },
    { name: "Coconut", icon: "🥥" },
    { name: "Avocado", icon: "🥑" },
  ],
  [
    { name: "Potato", icon: "🥔" },
    { name: "Carrot", icon: "🥕" },
    { name: "Ear of Corn", icon: "🌽" },
    { name: "Hot Pepper", icon: "🌶" },
    { name: "Cucumber", icon: "🥒" },
  ],
  [
    { name: "Broccoli", icon: "🥦" },
    { name: "Mushroom", icon: "🍄" },
    { name: "Peanuts", icon: "🥜" },
    { name: "Chestnut", icon: "🌰" },
    { name: "Bread", icon: "🍞" },
  ],
]
const GridView = ({ action, alreadyTested }) => (
  <table>
    {foodTable.map((line, lineId) => (
      <tr key={line[0]["name"]}>
        {line.map((element, columnId) => (
          <td
            key={element["name"]}
            className={
              alreadyTested.find(
                x => x.column === columnId && x.line === lineId
              )
                ? alreadyTested.find(
                    x => x.column === columnId && x.line === lineId && x.good
                  )
                  ? classes.visitedGood
                  : classes.visited
                : ""
            }
          >
            <button onClick={() => action(lineId, columnId)}>
              {element["icon"]}
            </button>
          </td>
        ))}
      </tr>
    ))}
  </table>
)

export default GridView
