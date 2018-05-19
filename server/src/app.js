const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config')
const userRoutes = require('./routes')

// Initialize app
const app = express()

// Apply Middleware
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// Routes
app.use('/register', userRoutes)

// Start server
sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log('server started on port ' + config.port)
  })
  .catch((error) => {
    console.log(error)
  })
