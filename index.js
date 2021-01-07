import { prompt, promptNumber } from './services/inputhandler.js'
import Player from './gameobjects/player.js'

const name = prompt('What\'s your name?')
const age = promptNumber('What\'s your age?')

const player = new Player(name)

player.sayHello()