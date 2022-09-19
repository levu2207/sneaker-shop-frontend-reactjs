const productService = require("../services/product.services");

// Product controller

const getProductList = (req, res) => {
  const productList = productService.getList();
  if (productList) {
    res.status(200).send(productList);
  } else {
    res.status(404).send("Product not found");
  }
};

const getProductDetailsById = (req, res) => {
  const { id } = req.params;

  const product = productService.getDetail(id);

  if (product) {
    res.status(200).send(product);
  } else {
    res.status(404).send("Product not found");
  }
};

const createProduct = (req, res) => {
  let product = req.body;

  const newProduct = productService.create(product);

  if (newProduct) {
    res.status(201).send(product);
  }
};

const updateProduct = (req, res) => {
  const { id } = req.params;
  let product = req.body;

  const productUpdated = update(id, product);

  if (productUpdated) {
    res.status(200).send(productUpdated);
  } else {
    res.status(404).send("Product not found");
  }
};

const deleteProduct = (req, res) => {
  const { id } = req.params;

  const productDeleted = productService.deleteById(id);

  if (productDeleted) {
    res.status(200).send(productDeleted);
  } else {
    res.status(404).send("Product not found");
  }
};

module.exports = {
  getProductList,
  getProductDetailsById,
  createProduct,
  updateProduct,
  deleteProduct,
};
