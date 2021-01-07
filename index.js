import { prompt, promptNumber } from './services/inputhandler.js'

const name = prompt('What\'s your name?')
const age = promptNumber('What\'s your age?')

console.log(`Your name is ${name} and you are ${age + 1} years old!`)