const mongoose = require('mongoose');
const employeeTableSchema = new mongoose.Schema(
    {
        employeeUsername:'String',
        password:'String',
        firstName:'String',
        lastName:'String',
        employeeId:'Number',
        designation:'String',
        companyName:'String',
        phoneNumber:'Number',
        pincode:'Number',
        landmark:'String',
        city:'String',
        country:'String',

    }
);
const employeeTableModel = new mongoose.model('students', userTableSchema );
module.exports = employeeTableModel;
