const getList = () => {
  if (productList) return productList;
  else return false;
};

const getDetail = (id) => {
  const index = productList.findIndex((product) => product.id === id);

  if (index !== -1) {
    const product = productList[index];
    return product;
  } else {
    return false;
  }
};

const create = (product) => {
  const newProduct = { ...product };
  productList = [...productList, newProduct];
  return newProduct;
};

const update = (id, product) => {
  const index = productList.findIndex((product) => product.id === id);

  if (index !== -1) {
    const productOld = productList[index];
    const productUpdated = {
      ...productOld,
      ...product,
    };
    return productUpdated;
  } else {
    return false;
  }
};

const deleteById = (id) => {
  const index = productList.findIndex((product) => product.id === id);

  if (index !== -1) {
    const product = productList[index];
    productList.slice(index, 1);

    return product;
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
