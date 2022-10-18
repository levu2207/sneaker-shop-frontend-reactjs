const priceSale = (price, sale) => {
  const salePercent = Number(sale);
  const salePrice = price - (price * salePercent) / 100;
  return salePrice;
};

export default priceSale;
