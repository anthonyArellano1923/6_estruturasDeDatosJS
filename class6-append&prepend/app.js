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
}

const linkedList = new MyLinkdList(1)

linkedList.showList()