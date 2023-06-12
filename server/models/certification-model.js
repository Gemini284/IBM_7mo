const mongoose = require('mongoose');

const certificationSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
        unique: true,
        lenght: 9
    },
    name: {
        type: String,
        required: true
    },
    issue_date: {
        type: Date,
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
    }
}, {
    timestamps: true,
    collection: 'certifications'
    }
);

module.exports = mongoose.model('Certification', certificationSchema, 'certifications');