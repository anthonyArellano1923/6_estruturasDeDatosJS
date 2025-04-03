class MyArray {
  constructor(){
    this.length = 0
    this.data = {}
  }
  get(index) {
    return this.data[index]
  }
  push(item) {
    this.data[this.length] = item
    this.length++
    return this.data
  }
  pop() {
    delete this.data[this.length - 1]
    this.length--
    return this.data
  }
}

const myFirstArray = ['Jesús', 'María', 'José']
const mySecondArray = new MyArray()

mySecondArray.push('Jesús')
mySecondArray.push('María')
mySecondArray.push('José')
