class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
  get (){ return this }
}

class DoubleNode extends Node {
  constructor(value) {
    super(value)
    this.prev = null
  }
}

class MyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head
    this.length = 1
  }
  get (){ return this.head}

  append(value){
    const newValue = new Node(value)

    this.tail.next = newValue
    this.tail = newValue
    this.length++

    return this
  }

  prepend(value) {
    const newValue = new Node(value)
    
    newValue.next = this.head
    this.head = newValue
    this.length++

    return this
  }
  showList() {
    let currentNode = this.head
    let indent = '  '
    console.log(`value : ${currentNode.value}`)
    console.log(`next : {`)
    if(this.length > 1) {
      do{
        currentNode = currentNode.next
        console.log(indent +`value : ${currentNode.value}`)
        console.log(indent + 'next: {')
        indent += '  '
      } while(currentNode.next !== null)
    }
    console.log(indent + `${currentNode.next} }`)
  }
  getElementByIndex(index) {
    let counter = 0
    let currentNode = this.head
    while(counter !== index) {
      currentNode = currentNode.next
      counter++
    }
    return currentNode
  }
  insert(value, index) {
    const newNode = new Node(value)
    if(index - 1 < 0) {
      this.prepend(value)
      return this
    }

    const previousNode = this.getElementByIndex(index - 1)
    const nextNode = previousNode.next
    newNode.next = nextNode
    previousNode.next = newNode

    this.length++

    return this
  }
  remove(index) {
    if(index === 0 && this.length > 1) {
      this.head = this.head.next
      this.length--
      return this
    }
    const previousElement = this.getElementByIndex(index - 1)
    const nodeToEliminate = previousElement.next
    const nextHolder = nodeToEliminate.next

    previousElement.next = nextHolder
    this.length--

    return this
  }

}

class DoublyLinkedList extends MyLinkedList {
  constructor(value) {
    super(value)
    this.head.prev = null
  }
  append(value) {
    const newValue = new DoubleNode(value)
    newValue.prev = this.tail
    this.tail.next = newValue
    this.tail = newValue
    this.length++

    return this
  }
  prepend(value) {
    const newValue = new DoubleNode(value)
    newValue.next = this.head
    this.head.prev = newValue
    this.head = newValue
    this.length++

    return this
  }
  insert(value, index) {
    const newNode = new DoubleNode(value)

    const previousNode = this.getElementByIndex(index - 1)
    const nextNode = previousNode.next

    newNode.prev = previousNode
    newNode.next = nextNode
    previousNode.next = newNode
    if(nextNode){
      nextNode.prev = newNode
    }

    
    this.length++

    return this
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined

    if(index === 0 && this.length > 1 ) {
      this.head = this.head.next
      this.head.prev = null
      this.length--
      return this
    } else if(index === this.length - 1) {
      this.tail = this.tail.prev
      this.tail.next = null
      this.length--
      return this
    } else if (this.length === 1 && index === 0) {
      this.head = null
      this.tail = null
      this.length--
      return this
    }
    const nodeToEliminate = this.getElementByIndex(index)
    const previousNode = nodeToEliminate.prev
    const nextNode = nodeToEliminate.next
    previousNode.next = nextNode
    nextNode.prev = previousNode

    this.length--

    return this
  }
}
 
const dLinkedList = new DoublyLinkedList(1)

dLinkedList.prepend(0).append(2).append(3)

