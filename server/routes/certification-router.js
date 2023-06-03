const express = require('express');
const Certification = require('../models/certification-model');
const router = express.Router();

// get all
router.get("/", async(req, res) => {
    try{
        let result = await Certification.find();
        res.status(200).json(result);
    }
    catch{
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
    catch{
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
    catch{
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
    catch{
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
    catch{
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
    catch{
        res.status(500).json({message: error.message});
    }
})

// create certification
router.post("/", async (req, res) => {
    let data = {
        uid: req.body.uid,
        name: req.body.name,
        issue_date: req.body.issue_date,
        type: req.body.type,
    };
    try{
        let result = await Certification.insertOne(data);
        res.status(200).json(result);
    }
    catch{
        res.status(500).json({message: error.message});
    }
})

module.exports = router;