const User = require('../models/user-model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const createJWT = require('../utils/auth-util');

const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

exports.signin = (req, res) => {
    let {email, password} = req.body;
    let errors = [];

    if(!email){
        errors.push({email: "required"});
    }
    if(!emailRegexp.test(email)){
        errors.push({email: "invalid email"})
    }
    if(!password){
        errors.push({password: "required"});
    }
    if(errors.length > 0){
        return res.status(422).json({errors: errors});
    }

    User.findOne({email: email})
        .then(user => {
            if(!user) {
                return res.status(404).json({errors: [{user: "not found"}]});
            }
            else {
                bcrypt.compare(password, user.password).then(isMatch => {
                    if(!isMatch){
                        return res.status(400).json({errors: [{password: "incorrect"}]});
                    }

                    let access_token = createJWT(user.email, user._id, 3600);
                    jwt.verify(access_token, process.env.TOKEN_SECRET, (err, decoded) => {
                        if(err) {
                            res.status(500).json({errors: err});
                        }
                        if(decoded) {
                            return res.status(200).json({
                                success: true,
                                token: access_token,
                                message: user
                            });
                        }
                    });
                })
                .catch(err => {
                    res.status(500).json({errors: err});
                });
            }   
        })
        .catch(err => {
            res.status(500).json({errors: err});
        });
}