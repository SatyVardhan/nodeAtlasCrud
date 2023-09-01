const userDAO = require('../dao/user-dao')
exports.listUsers= async (req,res) => {
    try{
        let data = await userDAO.getUserList();
        res.send(data);
    }
    catch(e){                           
        res.send(`get API error ${e.message}`);
    }
}

exports.createUser= async (req,res) => {
}

exports.updateUser= async (req,res) => {
    }