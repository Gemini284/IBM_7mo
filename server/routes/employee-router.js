const express = require('express');
const Employee = require('../models/employee-model');
const router = express.Router();

// get all
router.get("/", async(req, res) => {
    try{
        let result = await Employee.find();
        res.status(200).json(result);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});

// get top 5 with most certifications
router.get("/top", async(req, res) => {
    let query = [
        {
          $project: {
            uid: 1,
            organization: 1,
            work_location: 1,
            count: { $size: "$employee_certifications" }
          }
        },
        { $sort: { count: -1 } },
        { $limit: 5 }
    ]
    try{
        let result = await Employee.aggregate(query);
        res.status(200).json(result);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});
 
// get by uid
router.get("/search/:uid", async (req, res) => {
    let query = {uid: req.params.uid};
    try{
        let result = await Employee.find(query);
        res.status(200).json(result);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})

// get by certification
router.get("/search", async (req, res) => {
    const type = decodeURIComponent(req.query.type);
    let query = {};
    
    if (/[A-Za-z0-9]{9,10}IBM/.test(type)) {
        query = {uid: type}

    } else {
        query = {"employee_certifications.name": type};
    }

    try{
        let result = await Employee.find(query);
        res.status(200).json(result);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})

// get by organization
router.get("/:organization", async (req, res) => {
    let query = {organization: req.params.organization};
    try{
        let result = await Employee.find(query);
        res.status(200).json(result);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})

// get by work location
router.get("/:location", async (req, res) => {
    let query = {work_location: req.params.work_location};
    try{
        let result = await Employee.find(query);
        res.status(200).json(result);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})

// get by certification
router.get("/:certification", async (req, res) => {
    let query = {employee_certifications: req.params.certification};
    try{
        let result = await Employee.find(query);
        res.status(200).json(result);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})

module.exports = router;