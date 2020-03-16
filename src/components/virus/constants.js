export const defaultT = 133

export const colors = {
  s: "blue",
  i: "red",
  r: "green",
  d: "black",
}

export const defaultParameters = {
  duration: 10,
  mortality: 3,
  transmission: 0.5,
  metPeople: 50,
}

export const parametersParams = {
  duration: { min: 0, max: 30, step: 1, type: "number" },
  mortality: { min: 0, max: 100, step: 0.1, type: "number" },
  transmission: { min: 0, max: 3, step: 0.1, type: "number" },
  metPeople: { min: 0, max: 100, step: 1, type: "number" },
}

export const variablesParams = {
  s: { min: 0, max: 1000, step: 1, type: "number" },
  i: { min: 0, max: 1000, step: 1, type: "number" },
  r: { min: 0, max: 1000, step: 1, type: "number" },
  d: { min: 0, max: 1000, step: 1, type: "number" },
}

export const virusParameters = ["mortality", "duration"]
export const societyParameters = ["transmission", "metPeople"]
