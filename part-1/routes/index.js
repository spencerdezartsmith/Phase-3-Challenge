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

module.exports = router
