class House {
  constructor(attr) {
    this.walls = attr.walls
    this.roof = attr.roof
    this.floor = attr.floor
    this.door = attr.door
  }
}

class Details extends House {
  constructor(attr) {
    super(attr)
    this.toilet = attr.toilet
    this.mailbox = attr.mailbox
    this.windows = attr.windows
  }
  spec() {
    return `My house has ${this.walls} walls, ${this.roof} style roof, ${this.floor} flooring, and a ${this.door} door. My luxury house has ${this.toilet} toilets, ${this.windows} windows, and a sweet ${this.mailbox} mailbox.`
  }
}

// const zac = new House({
//   walls: 4,
//   roof: 'spanish tile',
//   floor: 'hard wood',
//   door: 'metal',
// })

const zacD = new Details({
  walls: 4,
  roof: 'spanish tile',
  floor: 'hard wood',
  door: 'metal',
  windows: 8,
  toilet: 2,
  mailbox: 'red train',
})
const mattD = new Details({
  walls: 16,
  roof: 'shingles',
  floor: 'white carpet',
  door: 'oak',
  windows: 20,
  toilet: 7,
  mailbox: 'pokemon',
})
const gustavoD = new Details({
  walls: 16,
  roof: 'shingles',
  floor: 'white carpet',
  door: 'oak',
  windows: 20,
  toilet: null,
  mailbox: 'darth vader',
})

console.log(zacD.spec())
console.log(mattD.spec())
console.log(gustavoD.spec())

// walls
// roof
// floor
// windows
// doors
// mailbox
// toilet
