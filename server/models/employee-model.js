const mongoose = require('mongoose');
const Certification = require('./certification-model');

const employeeSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
        unique: true
    },
    organization: {
        type: String,
        required: true
    },
    work_location: {
        type: String,
        required: true
    },
    employee_certifications: {
        type: [Certification.schema]
    }
}, {
    timestamps: true,
    collection: 'employees'
    }
);

module.exports = mongoose.model('Employee', employeeSchema, 'employees');