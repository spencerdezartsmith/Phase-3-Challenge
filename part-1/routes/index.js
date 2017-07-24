const express = require('express')
const router = express.Router()
const { supportedOperations, square, compute } = require('../operations')

router.get('/supported-operations', (req, res) => {
  res.send(supportedOperations())
})

router.get('/square', (req, res) => {
  const number = Number(req.query.number)
  res.send({ result: square(number) })
})

router.post('/compute', (req, res) => {
  const { operator, operands } = req.body
  const result = compute(operator, operands)

  if (result === undefined) {
    res.status(404).send({
      error: `invalid operator ${operator}. Valid operators are /, +, -, *`
    })
  } else {
    res.send({ result })
  }
})

module.exports = router
