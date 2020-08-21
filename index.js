const dinner = {
  food: 'pizza',
  drink: 'vino',
  dessert: 'cheese cake',
}

const breakfast = {
  food: 'eggs',
  drink: 'oj',
  dessert: 'pancakes',
}

const stuff = 'happy'

const meals = [
  {
    meal: 'lunch',
    food: 'pizza',
    drink: 'vino',
    dessert: 'cheese cake',
    plan: function () {
      return `I am eating ${this.meal} that is ${this.food}, ${this.drink}, and ${this.dessert}`
    },
  },
  {
    meal: 'breakfast',
    food: 'eggs',
    drink: 'oj',
    dessert: 'pancakes',
    plan: function () {
      return `I am eating ${this.meal} that is ${this.food}, ${this.drink}, and ${this.dessert}`
    },
  },
  {
    meal: 'dinner',
    food: 'steak',
    drink: 'vino',
    dessert: 'apple pie',
    plan: function () {
      return `I am eating ${this.meal} that is ${this.food}, ${this.drink}, and ${this.dessert}`
    },
  },
]

// meals.forEach((meal) => console.log(meal.plan()))

const newStuff = [
  'lorem alksdjf lksadjf l',
  'lasdkjfadskljdflkjslkdf',
  'laksdjflkadsjfjlksd',
  'laksdjfkladsjflks',
]

newStuff.forEach(function (line, index) {
  console.log(index, line)
})

for (let x = 0; x < newStuff.length; x++) {
  console.log(x, newStuff[x])
}

// meals.forEach(function (meal) {
//   console.log(meal.plan())
// })

// for (let i = 0; i < meals.length; i++) {
//   console.log(meals[i].plan())
// }

// console.log('++++++', meals[1].plan())

// const food = ['pizza', 'hot dogs', 'chicken', 'cheese', 'fish']
// const dOW = 'friDay'
// const moFood = []

// if (dOW.toLowerCase() === 'friday') {
//   console.log(food[food.length - 1])
// } else {
//   console.log(food[0])
// }

// for (let i = 0; i < food.length; i++) {
//   console.log(`${food[i]} : ${i + 1}`)
// }

// food.forEach(function (item, id) {
//   moFood.push(`${id + 1}: ${item}`)
// })

// console.log(moFood)
// moFood.forEach((item) => console.log(item))
