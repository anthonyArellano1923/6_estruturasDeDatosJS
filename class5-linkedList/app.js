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

  append(node){
    let nextValue = this.head
    while(nextValue.next !== null) {
      nextValue = nextValue.next
    }
    nextValue.next = node
    this.tail = nextValue.next
    this.length++
  }
  showList() {
    let currentNode = this.head
    let indent = '  '
    console.log(`value : ${currentNode.value}`)
    console.log(`next : {`)
    do{
      currentNode = currentNode.next
      console.log(indent +`value : ${currentNode.value}`)
      console.log(indent + 'next: {')
      indent += '  '
    } while(currentNode.next !== null)
    console.log(indent + `${currentNode.next} }`)
  }
}

const linkedList = new MyLinkdList(0)
const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
const node5 = new Node(5)
const node6 = new Node(6)
const node7 = new Node(7)
const node8 = new Node(8)

linkedList.append(node1)
linkedList.append(node2)
linkedList.append(node3)
linkedList.append(node4)
linkedList.append(node5)
linkedList.append(node6)
linkedList.append(node7)
linkedList.append(node8)

linkedList.showList()