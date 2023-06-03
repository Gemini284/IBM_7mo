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

router.post('/signin', async(req, res) => {
    //create login route
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