import Player from '../gameobjects/player.js'
import { prompt } from '../services/inputhandler.js'

export default function newGame() {
  const name = prompt('What\'s your name?')

  const player = new Player(name)

  player.sayHello()
}