const mongoose = require('mongoose');

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
        type: Array,
        required: true
    }
}, {
    timestamps: true,
    collection: 'employees'
    }
);

module.exports = mongoose.model('Employee', employeeSchema);