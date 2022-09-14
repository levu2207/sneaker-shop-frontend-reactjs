const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const port = 8000;
const db = require("./database");

app.use(morgan("combined"));

app.use(express.static("client"));

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.get("/api/user", (req, res) => {
  // db.connectDB();
  //  db.con.query("SELECT * FROM user WHERE id = 1", function (err, result) {
  //   if (err) throw err;
  // });
  res.send("Hello user API!");
  // console.log("database: ", db);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

// db.connectDB();
