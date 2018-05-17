const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

// Initialize app
const app = express()
const PORT = process.env.PORT || 8081

// Apply Middleware
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// Routes
app.post('/register', (req, res, next) => {
  res.send({
    message: `Hello ${req.body.email}! Your user was registered!`
  })
})

// Start server
app.listen(PORT)
