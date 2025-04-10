class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null
    this.bottom = null
    this.length = 0
  }
  push(value) {
    const newNode = new Node(value)
    if(this.length === 0) {
      this.top = newNode
      this.bottom = newNode
    } else {
      newNode.next = this.top
      this.top = newNode
    }
    this.length++
    return this
  }
  peek(){
    return this.top
  }
  pop() {
    if(this.length === 1){
      this.top = null
      this.bottom = null
      this.length = 0
      return this
    } else if(this.length === 0) {
      return undefined
    } else if(this.length === 2) {
      this.top = this.top.next
      this.bottom = this.top
      this.length--
      return this
    }
    this.top = this.top.next
    this.length--
    return this
  }
  
}

const firstStack = new Stack()

firstStack.push(0).push(1).push(2).push(3).push(4)
