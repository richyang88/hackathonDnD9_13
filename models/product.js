const mongoose = require('./connection.js')

global.sampleModel = [];

const ProductSchema = new mongoose.Schema({
  description: String,
  cold: Boolean,
  image: String, //?
  cost: Number,
  inStock: Boolean,
  weight: Number,
  minOrder: Number,
  shelfLife: Number,
  originCountry: String,
  natural: Boolean,
  handmade: Boolean,
  manufacturer: String,
  disclaimer: String
});

const ProductCollection = mongoose.model('Product', ProductSchema)

const addProduct = (product) => {
  return ProductCollection.create(product);
}

const deleteProduct = (productId) => {
  return ProductCollection.findByIdAndDelete(productId);
}

const getProduct = (productId) => {
  return ProductCollection.findById(productId);
}

const updateProduct = (productId, product) => {
  return ProductCollection.findByIdAndUpdate(productId);
}

const getAllProducts = () => {
  return ProductCollection.find();
}

module.exports = {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct
}
