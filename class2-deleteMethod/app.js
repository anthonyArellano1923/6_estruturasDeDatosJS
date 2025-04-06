/*
- Construye el método .pop() según clase. Crea una constante llamada las item que sea igual al último elemento.
    - Con delete, borra el dato del objeto según su index.
    - Retorna la constante creada para saber qué item se eliminó.
- Construye un método llamado myDelete(index), que borre un elemento de la lista según el índice introducido.
    - Si eliminamos un elemento que no sea el último de la lista, los índices van a cambiar, para eso genera un nuevo método llamado shiftIndex(index). Esta función recorrerá las posiciones faltantes hasta el final del array, haciendo nuestro contador del for = index. Iremos modificando el objeto asignando el valor siguiente del objeto eliminado al valor del index actual.
    - Una vez recorrido el ciclo entero, eliminaremos el último elemento de la lista. 
    - Crearemos una constante llamada item que será el elemento a eliminar de la lista, llamaremos a nuestra función shiftIndex() y devolveremos el ítem eliminado.

- Crea un método para agregar un elemento al inicio del array.
  Este método debe:
    1. Mover un espacio hacia adelante TODOS los elementos de la lista.
    2. Agregar un nuevo elemento al inicio de la lista ( 0 : 'item')
    3. Aumentar el tamaño del array.
- Crea un método para eliminar un elemento al inicio del array.
  Este método debe:
    1. Eliminar el primer elemento del array.
    2. Traer atrás todos los elementos del array.
    3. Disminuir el tamaño del array.
*/

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
  pop2() {
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return lastItem
  }
  popFirst() {
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1]
    this.length--
    return this.data
  }
  addFirst(element) {
    for(let i = this.length; i > 0; i --) {
      this.data[i] = this.data[i - 1]
    }
    this.data[0] = element
    this.length++
    return this.data
  }
  myDelete(index) {
    if(index){
      if (index > 0 &&
          index < this.length) {
        const item = this.data[index]
        this.shiftIndex(index)
        return item
      } else {
        console.error('Index must be 0 < index < MyArray.length')
      }
    } else {
      console.error('There must BE an index.')
    }

  }
  shiftIndex(index) {
    delete this.data[index]
    for(let i = index; i < this.length; i++){
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1]
    this.length--
  }
}

const myFirstArray = ['Jesús', 'María', 'José']
const mySecondArray = new MyArray()

mySecondArray.push('Jesús')
mySecondArray.push('María')
mySecondArray.push('José')
