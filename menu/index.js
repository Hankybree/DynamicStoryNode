import { promptNumber } from '../services/inputhandler.js'
import newGame from './newGame.js'
import continueGame from './continueGame.js'

export default function mainMenu() {
  let input
  while (input !== 0) {
    printOptions()

    input = promptNumber()

    switch (input) {
      case 1:
        newGame()
        break;
      case 2:
        continueGame()
        break
      case 0:
        console.log('Thank you for playing, cya!')
        break
      default:
        console.log('That option does not exist')
    }
  }
}

function printOptions() {
  console.log(`Welcom to ${process.env.TITLE}\n`)
  console.log('What do you want to do?\n')
  console.log('1. New game')
  console.log('2. Continue')
  console.log('0. Quit')
}