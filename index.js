require("dotenv").config();
const express = require("express");
const connectToDb = require('./database/db')

const app = express();
const port = process.env.PORT || 3000;

connectToDb()

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port} `);
});
