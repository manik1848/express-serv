const express = require('express');
const connection=require('./config/db.js');
const UserModel = require('./models/userModel.js');
require('dotenv').config()

const app = express();
app.use(express.json())
app.get('/', async(req, res) => {
    // res.send('Homepage')
    const users= await UserModel.find();
    console.log(users,'users')
   res.send({data:users})
})

app.post('/user',async(req,res)=>{
    console.log(req?.body,'body')
    const userData = new UserModel(req.body);
    userData.save();
    return res.send({ Message: "User Added succesful" });

})

app.listen(8080, async() => {
    try{
        await connection;
        console.log('connected to db');
    }
    catch(e){
        console.log(e);
    }
    console.log('port started at 8080');
})