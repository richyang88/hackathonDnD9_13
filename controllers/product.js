const express = require('express')

const productApi = require('../models/product.js')

const productRouter = express.Router()

// templateRouter.get('/', (req, res) => {
//   res.send(templateApi.getHelloWorldString())
// })

module.exports = {
  productRouter
}
