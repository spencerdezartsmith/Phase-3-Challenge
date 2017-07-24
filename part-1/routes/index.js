const express = require('express')
const router = express.Router()

router.get('/supported-operations', (req, res) => {
  res.send({
    "/": "division",
    "+": "addition",
    "-": "subtration",
    "*": "multiplication"
  })
})

router.get('/square', (req, res) => {
  const number = Number(req.query.number)
  const squared = number * number
  res.send({ result: squared })
})

router.post('/compute', (req, res) => {
  const { operator } = req.body
  const { operands } = req.body
  let result
  let error

  switch(operator) {
    case '+':
      result = operands[0] + operands[1]
      break
    case '/':
      result = operands[0] / operands[1]
      break
    case '-':
      result = operands[0] - operands[1]
      break
    case '*':
      result = operands[0] * operands[1]
      break
    default:
      error = `invalid operator ${operator}. Valid operators are /, +, -, *`
  }

  if (error) {
    res.send({ error })
  } else {
    res.send({ result })
  }
})

module.exports = router
