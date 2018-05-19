const express = require('express')
const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const router = express.Router()

router.post(
  '/',
  AuthenticationControllerPolicy.register,
  AuthenticationController.register
)

module.exports = router
