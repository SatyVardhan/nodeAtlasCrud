const userRegistrationTable = require('../models/userTableModel');

exports.getUserList = async () => {
    return await userRegistrationTable.find({});
}