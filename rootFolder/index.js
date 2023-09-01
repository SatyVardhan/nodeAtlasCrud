const express = require('express');
const app = express();
app.use(express.json());
const db=require('./db');
const userRoutes = require('../routes/user-route');
const userRegistrationTable = require('../models/userTableModel');

db();
app.post('/create',async (req,res)=>{
    let data = new userRegistrationTable(req.body);
    let result = await data.save();
    res.send(result);
});
// / simple get api
app.use('/users', userRoutes);

// // search api
// app.get("/search/:key",async (req,res)=>{

//     console.log(req.params.key)
//     try{
//     let data = await userRegistrationTable.find(
//         {
//             "$or":[
//                 {"name":{$regex:req.params.key}},
//                 {"brand":{$regex:req.params.key}}
//             ]
//         }
//     );
//     res.send(data);
//     }
//     catch(e){
//         res.send(`Search API Error:${e.message}`);
//     }
// })
// app.delete("/delete/:_id", //to get a param ":" is used
//     async (req, res) => {
//         console.log(req.params);
//         try{
//         let data = await userRegistrationTable.deleteOne(req.params);
//         res.send(data)
//         }catch(e){
//             res.send(`Delete API Error:${e.message}`);
//         }
//     });

// // update PUT API
// app.put("/update/:_id", //to get a param ":" is used
//     async (req, res) => {
//         console.log(req.params);
//         console.log(req.body);
//         try{
//         let data = await userRegistrationTable.updateOne(
//             req.params,
//             {
//                 $set: req.body
//             }
//         );
//         res.send(data);
//         }catch(e){
//             res.send(`Update API Error:${e.message}`);
//         }
//     });


app.listen(4000);