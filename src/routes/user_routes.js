const express = require('express');
const { route } = require('express/lib/application');
const userSchema = require('../models/user');
route.post('/user',(req, res)=>{
    const user = userSchema(req.body);
    user    
        .save()
        .then((data)=>res.json(data))
        .catch((sata)=>res.json({message:error}));
});
route.get('/users',(req,res)=>{
    userSchema
        .find()
        .then((data)=>res.json(data))
        .caych((error)=>res.json({messsage}))
})
route.get('/users/:id',(req,res)=>{
const {id}=req.params;
userSchema
});
 
route.get('/users/:id', (req,res)=>{
    const {id}=rew.params;
    userSchema
        .findById(id)
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))

})
route.delete('/users/:id',(req,res)=>{
    const {id} = req.params
    userSchema      
            .remove({_id:id})
            .then((dta)=>res.json(data))
            .catch((error)=>res.json({message:error}))
})
route.put('/users/:id'(req,res)=>{
    const {id}= req.paramas;
    const{name,lastname,address,conctact} = req.body
    userSchema 
        update
})