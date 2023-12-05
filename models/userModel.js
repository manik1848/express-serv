const mongoose=require('mongoose');
const UserSchema= new mongoose.Schema({
  userID: Number,
  userName: String,
    // ipAddress:String
})
const UserModel=mongoose.model('user',UserSchema);

module.exports=UserModel;