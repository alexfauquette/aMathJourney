import React from "react"
import InteractiveGrid from "src/components/DynamicProgram/explanations/InteractiveGrid"
import InteractiveRecurrence from "src/components/DynamicProgram/explanations/InteractiveRecurrence"
const Page = () => (
  <>
    <InteractiveGrid startWord1="ABCD" startWord2="KJZ" />
    <InteractiveRecurrence startWord1="ABCD" startWord2="KJZ" />
  </>
)

export default Page
