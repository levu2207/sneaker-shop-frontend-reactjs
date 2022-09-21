const { Product } = require("../models");

const getList = async () => {
  const productList = await Product.findAll();
  if (productList) return productList;
  else return false;
};

const getDetail = async (id) => {
  const product = await Product.findOne({
    where: {
      id,
    },
  });
  if (product) {
    return product;
  } else {
    return false;
  }
};

const create = async (product) => {
  const newProduct = await Product.create(product);
  return newProduct;
};

const update = async (id, product) => {
  const productOld = await getDetail(id);

  if (productOld) {
    productOld.brand = product.brand;
    productOld.product_name = product.product_name;
    productOld.description = product.description;
    productOld.price = product.price;
    productOld.size = product.size;
    productOld.sale = product.sale;
    productOld.category_id = product.category_id;
    productOld.image1 = product.image1;
    productOld.image2 = product.image2;
    productOld.image3 = product.image3;
    productOld.image4 = product.image4;

    const productUpdated = await productOld.save();

    return productUpdated;
  } else {
    return false;
  }
};

const deleteById = async (id) => {
  const productDeleted = await Product.findOne({
    where: {
      id,
    },
  });

  if (productDeleted) {
    await Product.destroy({
      where: {
        id,
      },
    });

    return productDeleted;
  } else {
    return false;
  }
};

module.exports = {
  getList,
  getDetail,
  create,
  update,
  deleteById,
};
