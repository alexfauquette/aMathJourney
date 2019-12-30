import React from "react"
import InteractiveGrid from "src/components/DynamicProgram/explanations/InteractiveGrid"
import InteractiveRecurrence from "src/components/DynamicProgram/explanations/InteractiveRecurrence"
const Page = () => (
  <>
    <InteractiveGrid startWord1="ABBABABBBAA" startWord2="ABBABABABBAB" />
    <InteractiveRecurrence startWord1="ABBABABBBAA" startWord2="ABBABABABBAB" />
  </>
)

export default Page
