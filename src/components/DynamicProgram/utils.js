import React from "react"

export const Match = ({ children }) => (
  <strong style={{ color: "green" }}>{children}</strong>
)
export const MissMatch = ({ children }) => (
  <strong style={{ color: "orange" }}>{children}</strong>
)
export const Deletion = ({ children }) => (
  <strong style={{ color: "red" }}>{children}</strong>
)
