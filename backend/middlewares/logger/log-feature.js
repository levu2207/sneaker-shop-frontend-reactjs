const logFeature = (req, res, next) => {
  console.log("Get Product List");
  next();
};

module.exports = {
  logFeature,
};
