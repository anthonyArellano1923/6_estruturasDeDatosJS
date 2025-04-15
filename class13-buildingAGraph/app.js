/**
        6
       / \
      1 - 3
      |   |
      4 - 5
     /
    8
 */

class Graph {
  constructor(){
    this.nodes = 0
    this.adjacentList = {}
  }
  addVertex(value) {
    this.adjacentList[value] = []
    this.nodes++
    return this
  }
  addEdges(vertex1,vertex2) {
    this.adjacentList[vertex1].push(vertex2)
    this.adjacentList[vertex2].push(vertex1)
    return this
  }
}

const graph = new Graph()