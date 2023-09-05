const mongoose = require('mongoose');
const studentTableSchema = new mongoose.Schema(
    {
        studentUsername:'String',
        password:'String',
        firstName:'String',
        lastName:'String',
        fatherName:'String',
        course:'String',
        rollNo:'Number',
        collegeName:'String',
        phoneNumber:'Number',
        pincode:'Number',
        landmark:'String',
        city:'String',
        country:'String',

    }
);
const studentsTableModel = new mongoose.model('students', userTableSchema );
module.exports = studentsTableModel;
