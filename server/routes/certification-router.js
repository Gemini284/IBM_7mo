const express = require('express');
const Certification = require('../models/certification-model');
const router = express.Router();

// get all
router.get("/", async(req, res) => {
    try{
        let result = await Certification.find();
        res.status(200).json(result);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});

// get top 5 
router.get("/top", async(req, res) => {
    let query = [
        {
          $group: {
            _id: "$name",
            count: { $sum: 1 }
          }
        },
        {
          $sort: { count: -1 }
        },
        {
          $limit: 5
        }
    ]
    try{
        let result = await Certification.aggregate(query);
        res.status(200).json(result);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});

// get by uid
router.get("/:uid", async (req, res) => {
    let query = {uid: req.params.uid};
    try{
        let result = await Certification.find(query);
        res.status(200).json(result);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})

// get by name
router.get("/:name", async (req, res) => {
    let query = {name: req.params.name};
    try{
        let result = await Certification.find(query);
        res.status(200).json(result);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})

// get by issue date
router.get("/:date", async (req, res) => {
    let query = {issue_date: req.params.issue_date};
    try{
        let result = await Certification.find(query);
        res.status(200).json(result);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})

// get by type
router.get("/:type", async (req, res) => {
    let query = {type: req.params.type};
    try{
        let result = await Certification.find(query);
        res.status(200).json(result);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})

// create certification
router.post("/newCertification", async (req, res) => {

    // checar que no estén vacíos los campos
    if (req.body.uid === '' || req.body.name === '' || req.body.description === '' || req.body.type === '' || req.body.issue_date === '') {
        return res.status(400).send("All fields are required");
    }
    
    // checar que el id cumpla con la siguiente regex ^[A-Z0-9]{10}IBM$
    if (!/[A-Za-z0-9]{9,10}IBM/.test(req.body.uid)) {
        return res.status(400).send('Employee ID is not valid');
    }
    
    // checar que la fecha sea menor o igual a la fecha actual
    const today = new Date();
    const dateToCheck = new Date(req.body.issue_date);
    if (dateToCheck > today) {
        return res.status(400).send('cannot use a future date');
    }

    const certification = new Certification({
        uid: req.body.uid,
        name: req.body.name,
        issue_date: req.body.issue_date,
        type: req.body.type,
        description: req.body.description,
    });
    try{
        const result = await certification.save();
        res.status(200).json(result);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})

module.exports = router;