const express = require('express')
const router = express.Router()

router.get('/supported-operations', (req, res) => {
  res.send({ hello: "world" })
})

module.exports = router
