class myHashTable {
  constructor(size) {
    this.data = new Array(size)
  }
  hashMethod (key){
    let hash = 0
    for (let i = 0; i < key. length; i++) {
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash
  } 
  set(key, value) {
    const address = this.hashMethod(key)
    if(!this.data[address]) {
      this.data[address] = []
    }
    this.data[address].push([key, value])
    return this.data
  }
  get(key, command = 'get') {
    const address = this.hashMethod(key)
    const currentBucket = this.data[address]
    if(currentBucket){
      for(let i = 0; i < currentBucket.length; i++) {
        if(currentBucket[i][0] === key) {
          if(command == 'get'){
            return currentBucket[i][1]
          } else {
            return {hash: address, index : i}
          }
        }
      }
    }
    return undefined
  }
  delete(key) {
    const address = this.get(key, 'delete')
    this.data[address.hash].splice(address.index, 1)
    if(this.data[address.hash].length === 0) {
      this.data[address.hash] = undefined
    }
    return this.data
  }
}
const hash = new myHashTable(50)

hash.set('Saturn', 'Cience Minister')
hash.set('Bonney', 'Pirate')
hash.set('Kuma', 'Revolutionary')
hash.set('Luffy', 'Nika')
hash.set('Zoro', 'Swordsman')
hash.set('Sanji', 'Cook')
hash.set('Robin', 'Archaeologist')
hash.set('Nami', 'Navigator')
hash.set('Franky', 'Shipwright')
hash.set('Brook', 'Musician')
hash.set('Jinbe', 'Helmsman')
hash.set('Usopp', 'Sniper')
hash.set('Shanks', 'Yonko')
hash.set('Dragon', 'Revolutionary Leader')