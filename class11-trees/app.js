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
  search(value, eliminate = 0) {
    let currentNode = this.root
    if(currentNode.value === value) return currentNode
    while(true) {
      if(value < currentNode.value) {
        if(!currentNode.left){
          console.warn(`${value} not in tree.`)
          return currentNode
        } 
        if(currentNode.left.value === value) {
          if(eliminate !== 0) return currentNode
          return currentNode.left
        } else {
          currentNode = currentNode.left
          if(!currentNode){
            console.warn('This value is not in tree.')
            break
          }
        }
      } else if(value > currentNode.value) {
        if(!currentNode.right){
          console.warn(`${value} not in tree.`)
          return currentNode
        } 
        if(currentNode.right.value === value) {
          if(eliminate !== 0) return currentNode
          return currentNode.right
        } else {
          currentNode = currentNode.right
          if(!currentNode){
            console.warn('This value is not in tree.')
            break
          }
        }
      }
    }
  }
  delete(value) {
    if(this.root.value === value){
      const eliminate = confirm('Si elimina este valor, se eliminará el árbol entero. ¿Desea continuar?')
      if(eliminate){
        this.root = null
        return this
      }
    }
    const previousNode = this.search(value, 1)
    if(previousNode.left) {
      if(previousNode.left.value === value) {
        previousNode.left = null
      }
    }
    if(previousNode.right) {
      if(previousNode.right.value === value) {
        previousNode.right = null
      }
    } 
    return this
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