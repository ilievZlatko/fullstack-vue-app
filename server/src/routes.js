const express = require('express')
const router = express.Router()

router.post('/register', (req, res, next) => {
  res.send({
    message: `Hello ${req.body.email}! Your user was registered!`
  })
})

module.exports = router
