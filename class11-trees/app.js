class Node {
  constructor(value) {
    this.value = value
    this.left = null 
    this.right = null 
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(value) {
    const newNode = new Node(value)
    if(!this.root){
      this.root = newNode
      return this
    } else {
      let currentNode = this.root
      while(true) {
        if(value < currentNode.value) {
          if(!currentNode.left) {
            currentNode.left = newNode
            return this
          } else {
            currentNode = currentNode.left
          }
        } else if(value > currentNode.value) {
          if(!currentNode.right) {
            currentNode.right = newNode
            return this
          } else {
            currentNode = currentNode.right
          }
        }
      }
    }
  }
  printTree() {
    if (!this.root) {
      console.log("Árbol vacío");
      return;
    }
    
    // Obtener la altura del árbol para determinar cuántos niveles imprimir
    const height = this.getHeight(this.root);
    
    // Guardar nodos por nivel y sus posiciones
    const nodesPerLevel = [];
    
    // Función para recorrer el árbol y colocar cada nodo en su nivel
    const traverseTree = (node, level, position) => {
      if (!node) return;
      
      // Asegurarse de que el array para este nivel existe
      if (!nodesPerLevel[level]) {
        nodesPerLevel[level] = [];
      }
      
      // Guardar nodo y su posición horizontal
      nodesPerLevel[level].push({
        value: node.value,
        position: position
      });
      
      // Calcular espaciado para el siguiente nivel
      const nextLevelGap = Math.pow(2, height - level - 1);
      
      // Recorrer hijos
      traverseTree(node.left, level + 1, position - nextLevelGap);
      traverseTree(node.right, level + 1, position + nextLevelGap);
    };
    
    // Comenzar recorrido desde la raíz
    const rootPosition = Math.pow(2, height) - 1;
    traverseTree(this.root, 0, rootPosition);
    
    // Calcular el ancho total necesario
    const totalWidth = Math.pow(2, height + 1) - 1;
    
    // Imprimir cada nivel
    for (let i = 0; i < nodesPerLevel.length; i++) {
      const level = nodesPerLevel[i];
      
      // Ordenar nodos por posición
      level.sort((a, b) => a.position - b.position);
      
      // Crear string para este nivel
      let levelString = "";
      let lastPosition = 0;
      
      for (const node of level) {
        // Calcular espacios hasta esta posición
        const spaces = node.position - lastPosition;
        levelString += " ".repeat(spaces) + node.value;
        lastPosition = node.position + String(node.value).length;
      }
      
      console.log(levelString);
      
      // Imprimir línea divisoria si no es el último nivel
      if (i < nodesPerLevel.length - 1) {
        console.log("-".repeat(totalWidth));
      }
    }
  }
  
  // Segundo método usando matriz para mejor control del espaciado
  printTreeMatrix() {
    if (!this.root) {
      console.log("Árbol vacío");
      return;
    }
    
    // Obtener altura del árbol
    const height = this.getHeight(this.root);
    
    // Crear una matriz de caracteres para representar el árbol
    const charWidth = 3; // Espacio mínimo por valor
    const cellWidth = Math.max(...this.getAllValues().map(v => String(v).length), charWidth);
    const matrixWidth = Math.pow(2, height) * (cellWidth + 1) - 1;
    
    // Inicializar matriz con espacios
    const matrix = Array(height).fill().map(() => Array(matrixWidth).fill(' '));
    
    // Función para llenar la matriz con los valores del árbol
    const fillMatrix = (node, level, start, end) => {
      if (!node) return;
      
      // Calcular posición central para este nodo
      const mid = Math.floor((start + end) / 2);
      const value = String(node.value);
      
      // Colocar valor centrado en la posición calculada
      const startPos = mid - Math.floor(value.length / 2);
      for (let i = 0; i < value.length; i++) {
        matrix[level][startPos + i] = value[i];
      }
      
      // Procesar nodos hijos si existen
      if (node.left) {
        fillMatrix(node.left, level + 1, start, mid - 1);
      }
      
      if (node.right) {
        fillMatrix(node.right, level + 1, mid + 1, end);
      }
    };
    
    // Comenzar a llenar la matriz desde la raíz
    fillMatrix(this.root, 0, 0, matrixWidth - 1);
    
    // Imprimir la matriz
    for (let i = 0; i < height; i++) {
      console.log(matrix[i].join(''));
      
      // Imprimir línea divisoria si no es el último nivel
      if (i < height - 1) {
        const divider = Array(matrixWidth).fill('-').join('');
        console.log(divider);
      }
    }
  }
  
  // Método BFS mejorado con mejor control de espaciado
  printTreeBFS() {
    if (!this.root) {
      console.log("Árbol vacío");
      return;
    }
    
    // Obtener altura y todos los valores para calcular el ancho máximo
    const height = this.getHeight(this.root);
    const allValues = this.getAllValues();
    const maxValueLength = Math.max(...allValues.map(v => String(v).length));
    
    // Crear array para almacenar nodos por nivel
    const levels = [];
    for (let i = 0; i < height; i++) {
      levels[i] = [];
    }
    
    // Función para llenar los niveles
    const fillLevels = (node, level) => {
      if (!node) return;
      
      // Agregar este nodo al nivel correspondiente
      levels[level].push(node);
      
      // Procesar hijos
      fillLevels(node.left, level + 1);
      fillLevels(node.right, level + 1);
    };
    
    // Llenar niveles comenzando desde la raíz
    fillLevels(this.root, 0);
    
    // Para cada nivel, crear un mapa de posiciones
    for (let i = 0; i < height; i++) {
      // Ordenar nodos en este nivel según corresponderían en un árbol completo
      const sortedLevel = new Array(Math.pow(2, i)).fill(null);
      
      // Relleno correcto de huecos para mantener estructura de árbol
      const assignNodeToPosition = (node, parentIndex, isLeft, level) => {
        if (!node) return;
        
        // Calcular posición en este nivel
        const position = isLeft ? parentIndex * 2 : parentIndex * 2 + 1;
        
        // Asignar nodo a esa posición
        sortedLevel[position] = node;
      };
      
      // Para el primer nivel, solo hay un nodo (la raíz)
      if (i === 0) {
        sortedLevel[0] = this.root;
      } else {
        // Para otros niveles, calcular posiciones basadas en los padres
        for (let j = 0; j < levels[i-1].length; j++) {
          const parent = levels[i-1][j];
          // Encontrar la posición del padre en el nivel anterior
          const parentPos = sortedLevel.findIndex(n => n && n.value === parent.value);
          
          // Asignar hijos si existen
          if (parent.left) {
            assignNodeToPosition(parent.left, parentPos, true, i);
          }
          if (parent.right) {
            assignNodeToPosition(parent.right, parentPos, false, i);
          }
        }
      }
      
      // Calcular espaciado necesario para este nivel
      const spacing = Math.pow(2, height - i - 1) * (maxValueLength + 1) - 1;
      
      // Construir la cadena para este nivel
      let levelStr = '';
      
      // Imprimir nodos con el espaciado correcto
      for (let j = 0; j < sortedLevel.length; j++) {
        const node = sortedLevel[j];
        const value = node ? String(node.value) : ' '.repeat(maxValueLength);
        const paddedValue = value.padStart(Math.floor((maxValueLength + value.length) / 2)).padEnd(maxValueLength);
        
        // Agregar espaciado antes del valor
        levelStr += ' '.repeat(spacing) + paddedValue + ' '.repeat(spacing);
      }
      
      // Imprimir este nivel
      console.log(levelStr);
      
      // Imprimir línea divisoria si no es el último nivel
      if (i < height - 1) {
        console.log('-'.repeat(levelStr.length));
      }
    }
  }
  
  // Método auxiliar para obtener todos los valores del árbol
  getAllValues() {
    const values = [];
    
    const traverse = (node) => {
      if (!node) return;
      values.push(node.value);
      traverse(node.left);
      traverse(node.right);
    };
    
    traverse(this.root);
    return values;
  }
  
  // Método auxiliar para calcular la altura del árbol
  getHeight(node) {
    if (!node) return 0;
    return Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  }
}

const myBinarySearchTree = new BinarySearchTree()

myBinarySearchTree
  .insert(100)
  .insert(86)
  .insert(109)
  .insert(78)
  .insert(91)
  .insert(107)
  .insert(120)
  .insert(65)
  .insert(80)
  .insert(89)
  .insert(99)
  .insert(103)
  .insert(117)
  .insert(122)
  .insert(130)