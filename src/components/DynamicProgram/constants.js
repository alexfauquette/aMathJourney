export const COLUMN_SIZE = 40
export const LARGE_CIRCLE_RADIUS = COLUMN_SIZE / 2 - 1
export const MEDIUM_CIRCLE_RADIUS = COLUMN_SIZE / 3
export const SMALL_CIRCLE_RADIUS = COLUMN_SIZE / 4
export const SQRT2 = Math.sqrt(2)

export const RECURRENCE_DATA = [
  //all the circles are linked to the ast one
  { dx: -1, dy: -1, color: "red" },
  { dx: 0, dy: -1, color: "blue" },
  { dx: -1, dy: 0, color: "green" },
  { dx: 0, dy: 0, color: "orange" },
]

export const PRESENT = "PRESENT"
export const COMPUTE = "COMPUTE"
export const SAVE = "SAVE"
