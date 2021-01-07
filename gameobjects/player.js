export default class Player {
  constructor(name) {
    this.name = name
    this.health = 100
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}!`)
  }
}