const productService = require("../services/product.services");

// Product controller

const getProductList = async (req, res) => {
  const productList = await productService.getList();
  if (productList) {
    res.status(200).send(productList);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
};

const getProductDetailsById = async (req, res) => {
  const { id } = req.params;

  const product = await productService.getDetail(id);

  if (product) {
    res.status(200).send(product);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
};

const createProduct = async (req, res) => {
  let product = req.body;

  const newProduct = await productService.create(product);

  if (newProduct) {
    res.status(201).send(product);
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  let product = req.body;

  const productUpdated = await productService.update(id, product);

  if (productUpdated) {
    res.status(200).send(productUpdated);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  // const productDeleted = await productService.getDetail(id);

  const productDeleted = await productService.deleteById(id);
  if (productDeleted) {
    res.status(200).send(productDeleted);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
};

module.exports = {
  getProductList,
  getProductDetailsById,
  createProduct,
  updateProduct,
  deleteProduct,
};
