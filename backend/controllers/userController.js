const User = require('../model/userModel')
const postData = (req,res)=>{
    const {name,last,email,password} = req.body;
    const user =  User.create(req.body);
    if(user){
     res.json(
       { 
        name : user.name,
        last : user.last,
        email: user.email
    }
     )
    }
}

const update = async(req,res)=>{
    const {name,last,email,password} = req.body;
   
    const user =  await User.updateOne({_id:req.body.id},{$set:{name,last,email,password}});
    if(user){
     res.json(
       { 
        name : user.name,
        last : user.last,
        email: user.email
    }
     )
    }
}
const getData = async(req,res) =>{
    const users = await User.find()
    res.send(users)
}
const deleteData = async(req,res) =>{
    const id= req.params.id;
    const users = await User.deleteOne({_id:id})
    res.send(users)
}
module.exports = {postData,getData,deleteData,update}