const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors())
app.use("/books",router)

mongoose
  .connect(
    "mongodb+srv://Naren:Naren@cluster0.bb3uf.mongodb.net/store"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(process.env.PORT ||'5000');
  })
  .catch((err) => console.log(err));