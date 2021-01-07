import promptSync from 'prompt-sync'

const userInput = promptSync()

export default function prompt(question) {
  console.log(question)
  const answer = userInput()

  return answer
}