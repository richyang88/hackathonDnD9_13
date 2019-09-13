const express = require('express')

const productApi = require('../models/product.js')

const productRouter = express.Router()

productRouter.route('/')
  .get( (req, res) => {
    productApi.getAllProducts()
    .then( products => res.send(products) )
    .catch( () => res.sendStatus(400) )
  })
  .post( (req, res) => {
    productApi.addProduct(req.body)
    .then( () => res.sendStatus(200) )
    .catch( () => res.sendStatus(400) )
  });

productRouter.route('/:id')
  .get( (req, res) => {
    productApi.getProduct(req.params.id)
    .then( product => res.send(product) )
    .catch( () => res.sendStatus(400) )
  })
  .delete( (req, res) => {
    productApi.deleteProduct(req.params.id, req.body)
    .then( () => res.sendStatus(200) )
    .catch( () => res.sendStatus(400) )
  });

module.exports = {
  productRouter
}