class Node {
  constructor(value) {
    this.value = value
    this.next = null
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
    if(this.length === 0) {
      this.firstElement = newNode
      this.lastElement = newNode
      this.length++
      return this
    }
    this.lastElement.next = newNode
    this.lastElement = newNode
    this.length++
    return this
  }
  dequeue(){
    const firstElement = this.firstElement
    if(this.length === 0) {
      return undefined
    } else if(this.length === 1) {
      this.lastElement = null
      this.firstElement = null
      this.length--
      return this
    }
    this.firstElement = firstElement.next
    this.length--
    return firstElement
  }
  peek(){ 
    return this.firstElement
  }
}

const queue = new Queue()
queue.enqueue(0).enqueue(1).enqueue(2).enqueue(3)