class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
  get (){ return this }
}

class MyLinkdList {
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

const linkedList = new MyLinkdList(0)
linkedList.append(1).append(2).append(3).append(4).append(5)

linkedList.showList()