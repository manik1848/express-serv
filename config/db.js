const mongoose = require("mongoose");
require('dotenv').config()

const uri = process.env.MONGOOSE_URL; 
const connection = mongoose.connect(uri );
module.exports = connection;