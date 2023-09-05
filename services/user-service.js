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
    try {
        const {name,email,password} = req.body;
        let data = await userDAO.createUserList(name,email,password);
        res.send("created Succesfully");
    } catch (error) {
        res.send(`Create API error ${error.message}`);
    }
}

exports.loginUser= async (req,res) => {
    try {
        const {email,password} = req.body;
        let data = await userDAO.loginUserDao(email);
        if (!data){
            res.send("User not found");
        }
        if (password === data.password){
            res.send("Login succesfull");
        }
        
    } catch (error) {
        res.send(`Login API error ${error.message}`)
    }
    }