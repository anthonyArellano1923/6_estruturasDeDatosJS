/*
     2 - 0
    / \
   1 - 3 
*/

//Edge List
const graph = [
  [2,0],
  [2,3],
  [2,1],
  [1,3]
]

//Adjacent list

//List of lists
//                0     1         2        3
const graph1 = [[2], [2, 3], [0, 1, 3], [1, 2]]
//Object
const graph2 = {
  0: [2],
  1: [2, 3],
  2: [0, 1, 3],
  3: [1, 2] 
}

//Adjacent Matrix
//List o lists
const graph3 = [[0,0,1,0], [0,0,1,1], [1,1,0,1], [0,1,1,0]]

//Object

const graph4 = {
  0: [0,0,1,0],
  1: [0,0,1,1],
  2: [1,1,0,1],
  3: [0,1,1,0]
}

/**
        6
       / \
      1 - 3
      |   |
      4 - 5
     /
    8
 */
//index:  0:1 1:3 2:4 3:5 4:6 5:8
const classGraph = [
  [3, 4, 6],
  [1, 5, 6],
  [1, 5, 8],
  [3, 4],
  [1, 3],
  [4]
]



