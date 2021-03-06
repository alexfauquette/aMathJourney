import React, { useState } from "react"

import Layout from "src/components/layout"
import { Link } from "gatsby"
import SEO from "src/components/seo"

import classes from "./style.module.scss"

const Page = () => {
  // deal with page state

  //render
  return (
    <Layout location="/binary-digits" currentLanguage="Français">
      <SEO title="Les ordinateurs comptent ils sur leurs doigts ?" />

      <h1>Les ordinateurs comptent ils sur leurs doigts ?</h1>

      <h2>Rappel de comment compter sur ses doigts</h2>

      <p>
        Si vous avez grandit en France, vous avez probablement appris à compter
        avec Picbille. Vous savez donc que les billes se rangent dans des boites
        de 10 billes qui elles même se rangent dans des valises de 10 boites.
        Pour nos amis francophone qui n’ont pas connu Picbille, voici comment on
        compte avec Picbille. Premièrement on apprend les chiffres de 0 à 9
      </p>
      <p>[animation]</p>
      <p>
        Puis Quand on met la 10eme bille, on ferme la boite pour en commencer
        une nouvelle. On à donc 10 = 1 boite + 0 bille, 11 = 1 boite + 1 bille,
        12 = 1 boite + 2 billes, … 35 = 3 boites et 5 billes
      </p>
      <p>[animation]</p>
      <p>
        Une fois que l’enfant maîtrise les dizaines, on ajoute les centaines en
        mettant 10 boites dans une valise : 245 = 2 valises + 4 boites + 5
        billes = 2*100 + 4*10 + 5 billes
      </p>
      <p>[animation]</p>
      <h2>avec Yoda comptons</h2>
      <p>
        Maintenant imaginons que vous ayez appris à compter avec maître Yoda.
        Comme il à 6 doigts, des boites de 6 remplir il va.
      </p>
      <p>On apprend donc les nombres de 0 à 5</p>
      <p>[animation]</p>
      <p>
        A la sixième bille on met la boite de côté, Et quand on à 6 boites on
        les met dans une valise. Une boite ne vaut plus 10, mais 6 billes, et
        une valise ne contient plus 100 bille mais 36 billes.
      </p>
      <p>[animation]</p>
      <p>
        notez que je dis 36 billes avec 36 en bleu, car c’est l’écriture de pic
        bille. Pour Yoda le chiffre 6 n’existe pas. 6 billes s’écrit 10 et 36
        s’écrit 100. Pour un même nombre de bille, Picbille et Yoda ont deux
        écritures différentes.
      </p>
      <p>[Animation]</p>
      <p>
        On dit que Yoda compte en base 6 car il groupe tout en paquet de 6. Et
        Picbille en base 10 car il groupe tout par 10.
      </p>
      <h2>Combien de doigts sur un ordinateur ?</h2>
      <p>
        Maintenant, passons à l’ordinateur. Lui compte en base 2. Si vous avez
        suivit, cela veut dire qu’il utilise des boites de 2. Il connaît donc
        les chiffres 0, 1 et c’est tout, car 2 = 1 boite pleine. Puis comme
        précédemment, quand il a 2 boites il les met dans une valise. Ce qui
        nous permet de compter jusque 7. Pour aller plus loin, disons qu’il met
        ses valises dans un carton, qu’il met dans un container, qu’il met dans
        un bateau. On a donc les contenant suivant : • boite = 2 • valise = 4 •
        carton = 8 • container = 16 • bateau = 32
      </p>
      <p>[animation]</p>
      <p>
        Vous l’aurez remarqué, l’ordinateur n’a besoin que de 2 chiffres
        différents : 0 et 1. Le fameux « bit » pour Binary digit (chiffre à 2
        valeurs).
      </p>
      <h2>Pour aller plus loin : les décimaux</h2>
      <p>
        Après avoir appris à compter sur vos doigts, vous avez sans probablement
        appris à écrire les nombres à virgule : En sachant que le 1er chiffre
        apres la virgule correspond à 1/10, le suivant à 1/100, etc. Ce qui est
        logique, car d’un chiffre à l’autre on multiplie (on groupe) par 10. La
        virgule sert juste à désigner où se trouvent les unités.
      </p>
      <p>[animations]</p>
      <p>
        On peut faire la même chose avec les autres bases. On place un virgule
        pour savoir où sont les unités, et pour passer d’une chiffres à un autre
        on multiplie/divise par la base (10, 6, ou 2)
      </p>
      <p>[animation]</p>
      <p>
        Si vous êtes observateur, vous avez pue remarquer que tous les nombres
        ne peuvent pas s’écrire ans toutes les bases.
      </p>
      <p>
        Un exemple connu des humains est le nombre 1/3 qui s’écrit 0,33333…
        Alors que pour Yoda rien de plus simple, 1/3 = 0,2 Pour les ordinateur
        aussi ce type de problème existe. 1/10=0,1 pour les humains, mais pour
        une ordinateur 1/10=0,0001100110011011… Notez la répétition du motif
        « 0011 ». Elle se répète à l’infini.
      </p>
      <p>[animation du calcul de 1/10 en binaire]</p>
      <p>
        Conclusion, quand on manipule des nombre à virgule avec un ordinateur,
        il faut faire attention, car les nombres à virgules ne tombent pas
        forcément juste. La gestion des arrondis à été standardisé (ref) pour
        que tous les ordinateurs donnent la même réponse à un calcul
      </p>

      <h2>Ca fait pas beaucoup de zero inutiles ?</h2>
      <p>Ca c'est pour une autre fois</p>

      <h2>Et les négatifs ?</h2>
      <p>Ca aussi, c'est pour une autre fois</p>
    </Layout>
  )
}

export default Page
