require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');

//routes
const authRoutes = require('./routes/auth-router');
const employeeRoutes = require('./routes/employee-router');
const certificationRoutes = require('./routes/certification-router');

//app
const PORT = process.env.PORT || 5050;
const uri = process.env.MONGODB_URI || "";
const db = process.env.DATABASE || "";
const app = express();

//middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// start the Express server and database
mongoose.set('strictQuery', false);
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: db,
})
  .then(() => {
    console.log("Database is connected");
  })
  .catch((error) => {
    console.log(error);
  })

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

// route middlewares
app.use('/api/user', authRoutes);
app.use('/api/employee', employeeRoutes);
app.use('/api/certification', certificationRoutes);
