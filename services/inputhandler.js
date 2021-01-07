import promptSync from 'prompt-sync'

const userInput = promptSync()

export function prompt(question) {
  let answer

  while (!answer) {
    console.log(question)
    answer = userInput()

    if (!answer || answer === '') {
      console.log('Input required')
    }
  }

  return answer
}

export function promptNumber(question) {
  let answer
  let result

  while (!answer || Number.isNaN(result)) {
    console.log(question)
    answer = userInput()

    if (!answer || answer === '') {
      console.log('Input required')
      continue
    }

    result = Number(answer)

    console.log(typeof result)
  
    if (Number.isNaN(result)) {
      console.log('Input a number')
    }
  }

  return result
}