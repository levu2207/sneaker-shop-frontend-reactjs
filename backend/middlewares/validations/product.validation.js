const checkEmty = (req, res, next) => {
  const { product_name } = req.body;

  if (product_name) next();
  else res.status(500).send("Do not emty your info");
};

module.exports = {
  checkEmty,
};
