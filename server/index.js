require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");

//routes
const authRoutes = require('./routes/auth-router');
const db = require('./models/admin-model');

//app
const PORT = process.env.PORT || 5050;
const app = express();

//middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// start the Express server and database
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DATABASE, {
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

app.use('/api', authRoutes);
