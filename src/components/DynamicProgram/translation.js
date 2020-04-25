import React from "react"

const translation = {
  fr: {
    next: "Suivant",
    we_dont_know: "On ne connaît pas le coût minimal de ",
    we_need: "On doit avant calculer le coût minimal de ",
  },
  en: {
    next: "Next",
    we_dont_know: "We don't know the minimal cost of ",
    we_need: "You before need it to compute the minimal cost of ",
  },
}
const withTranslation = PassedComponent => ({ lang, ...props }) => (
  <PassedComponent
    translation={translation[lang || "en"]}
    lang={lang}
    {...props}
  />
)

export default withTranslation
