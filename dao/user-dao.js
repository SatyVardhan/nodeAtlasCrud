const userRegistrationTable = require('../models/userTableModel');

exports.getUserList = async () => {
    return await userRegistrationTable.find({});
}

exports.createUserList = async (name,email,password) => {
    return await userRegistrationTable.create({
        name,
        email,
        password
    });
}

exports.loginUserDao = async (email) => {
    return await userRegistrationTable.findOne({email});
}