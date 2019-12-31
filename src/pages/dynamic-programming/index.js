import React from "react"
import InteractiveGrid from "src/components/DynamicProgram/explanations/InteractiveGrid"
import InteractiveRecurrence from "src/components/DynamicProgram/explanations/InteractiveRecurrence"
import FullAlgo from "src/components/DynamicProgram/explanations/FullAlgo"
const Page = () => (
  <>
    <FullAlgo startWord1="ABCD" startWord2="ABD" />
    <InteractiveGrid startWord1="ABBABABBBAA" startWord2="ABBABABABBAB" />
    <InteractiveRecurrence startWord1="ABBABABBBAA" startWord2="ABBABABABBAB" />
  </>
)

export default Page
