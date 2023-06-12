require('dotenv').config();
const express = require('express');
const Admin = require('../models/admin-model');
const bcrypt = require('bcryptjs');
const Joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');
const router = express.Router();

// use Joi to validate data
const loginSchema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
})

const registerSchema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
})

router.post("/register", async (req, res) => {
    const { error } = registerSchema.validate(req.body);
    if (error){
        return res.status(400).send(error.details[0].message);
    }
  
    const emailExists = await Admin.findOne({ email: req.body.email });
  
    if (emailExists){
        return res.status(400).send("Email allready exists");
    }
  
    //password hashing
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
  
    //create new user
    const user = new Admin({
      name: req.body.name,
      email: req.body.email,
      password: hashPassword,
    });
  
    try {
      const savedUser = await user.save();
      res.send(savedUser);
    } catch (error) {
      res.status(400).send(error);
    }
});

router.post('/signin', async(req, res) => {
    const {error} = loginSchema.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const user = await Admin.findOne({
        email: req.body.email
    })
    if (!user){
        return res.status(400).send("User not found");
    }

    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) {
        return res.status(400).send("Incorrect password");
    }

    // create token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header("auth-token", token).send(token);
});

module.exports = router;