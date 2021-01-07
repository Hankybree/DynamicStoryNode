import prompt from './services/inputhandler.js'

let name
let age

while (!name || !age) {
  name = prompt('What\'s your name?')
  age = prompt('What\'s your age?')

  if (!name || !age) {
    console.log('Incorrect input. Try again')
  }
}

console.log(`Your name is ${name} and you are ${age + 1} years old!`)