const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Atlas conectado!"))
    .catch((erro) => console.error(erro));
};

module.exports = connectToDb;
