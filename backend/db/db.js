const mongoose = require('mongoose');

const conn =()=>{ mongoose.connect('mongodb://localhost:27017/jyoti');
if(conn){
 console.log("true")   
}else{
    console.log("not connected")
}}
module.exports = conn