// convert  to vnd

const convertToVnd = (value) => {
  return Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(value);
};

export default convertToVnd;
