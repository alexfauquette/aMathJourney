import { node } from "prop-types"

//structure
// liste of adjacence point (x,y) => id = x + width * y
// contains {
//     subset: (id by default),
//     edges: {[id]: weigth},
// }

export function getRandomGraph(width, height) {
  const nodes = []
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const nodeIndex = x + width * y
      const edges = {}
      if (x > 0) {
        const neighbourIndex = x - 1 + width * y
        edges[neighbourIndex] = nodes[neighbourIndex].edges[nodeIndex]
      }
      if (y > 0) {
        const neighbourIndex = x + width * (y - 1)
        edges[neighbourIndex] = nodes[neighbourIndex].edges[nodeIndex]
      }
      if (x < width - 1) {
        const neighbourIndex = x + 1 + width * y
        edges[neighbourIndex] = Math.random()
      }
      if (y < height - 1) {
        const neighbourIndex = x + width * (y + 1)
        edges[neighbourIndex] = Math.random()
      }

      const info = { subset: nodeIndex, edges }

      nodes[nodeIndex] = info
    }
  }

  return { width, height, nodes }
}

// Prim algo
//  1) Ajouter l'arrête de poid minimal et son sommet
//  2) Supprimer les arrêtes formant un cycle
//  3) ajouter à la liste les arêtes qui pointent vers des sommets non visité

export function getPrimSteps(graph, origineId) {
  const { width, height, nodes } = graph
  const steps = []
}

// Kruskal algo
//  1) Ajouter l'arrête de poid minimal et son sommet
//  2) Joindre les deux ensembles de noeurds
//  3) enlever les arêtes communes de la liste

export function getKruskalSteps(graph) {
  const { width, height, nodes } = graph
  const steps = []

  const border = Object.keys(nodes[origineId].edges).map(nodeId => ({
    n1: Math.min(nodeId, origineId),
    n2: Math.max(nodeId, origineId),
    weight: nodes[origineId].edges[nodeId],
  }))

  nodes[origineId].subset = -1

  for (let step = 0; step < width * height - 1; step++) {
    border.sort((a, b) => (a.weight > b.weight ? 1 : -1))
    
    let newNode;
    let previousNode;
    if(nodes[border[0].n1] === -1){
        newNode = border[0].n2
        previousNode = border[0].n1
    } else{
        newNode = border[0].n1
        previousNode = border[0].n2
    }

    steps.push({ type: "ADD_BORDER", newNode, previousNode })


    const toRemove = border.filter(b => b.n1===newNode || b.n2===newNode);
    const border = border.filter(b => b.n1!==newNode && b.n2!==newNode);

    steps.push({ type: "REMOVE_EDGES", edges: toRemove })
  }
}
