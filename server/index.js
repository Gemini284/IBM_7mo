require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

// start the Express server and database
mongoose.set('strictQuery', false);
mongoose.connect(`mongodb://127.0.0.1:${PORT}/`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  })
