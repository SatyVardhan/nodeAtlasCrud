const mongoose = require('mongoose');
const userTableSchema = new mongoose.Schema(
    {
        username:'String',
        password:'String',
        firstName:'String',
        lastName:'String',
        phoneNumber:'Number',
        pincode:'Number',
        landmark:'String',
        city:'String',
        country:'String',

    }
);
const userTableModel = new mongoose.model('users', userTableSchema );
module.exports = userTableModel;
