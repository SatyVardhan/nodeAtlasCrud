const mongoose = require('mongoose');
const userTableSchema = new mongoose.Schema(
    {
        name:'String',
        email:'String',
        password:'String',
    }
);
const userTableModel = new mongoose.model('users', userTableSchema );
module.exports = userTableModel;
