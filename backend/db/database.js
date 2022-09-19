const mysql = require("mysql");
require("dotenv").config();

//Khởi tao kết nối với MySQL Server
module.exports.connectDB = () => {
  const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORDS,
    database: process.env.DB_NAME,
  });

  con.connect((err) => {
    if (err) throw err;
    console.log("Connected db");
  });
};

// module.exports.closeDB = (con) => {
//   console.log("Disconnect DB");
//   con.destroy();
// };
