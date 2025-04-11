class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class Queue {
  constructor(){
    this.firstElement = null
    this.lastElement = null
    this.length  = 0
  }
  enqueue(value) {
    const newNode = new Node(value)
    if(this.length === 0){
      this.firstElement = newNode
      this.lastElement = newNode
      this.length++
      return this
    }
    this.lastElement.next = newNode
    newNode.prev = this.lastElement
    this.lastElement = newNode
    this.length++
    return this
  }
  dequeue(){
    if(this.length === 0) {
      return undefined
    } 
    const firstElement = this.firstElement
    if(this.length === 1){
      this.firstElement = this.lastElement
      this.firstElement.next = null
      this.firstElement.prev = null
      this.length--
      return firstElement
    }
    this.firstElement = firstElement.next
    this.firstElement.prev = null
    if(this.length === 2) {
      this.lastElement = this.firstElement
    }
    this.length--
    return firstElement
  }
  peek(){ 
    return this.firstElement
  }
}

const queue = new Queue()
queue.enqueue(0).enqueue(1).enqueue(2).enqueue(3)