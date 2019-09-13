const express = require('express')

const productApi = require('../models/product.js')

const productRouter = express.Router()

productRouter.route('/')
  .get( (req, res) => {
    productApi.getAllProducts().then(
      products => res.send(products)
    );
  })

// templateRouter.get('/', (req, res) => {
//   res.send(templateApi.getHelloWorldString())
// })

module.exports = {
  productRouter
}