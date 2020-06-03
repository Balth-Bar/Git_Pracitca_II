const user  = require('../models/user');

const userctrol = {};

userctrol.getUsers = async(req, res) =>{
    const users = await user.find();
    res.json(users);
};

userctrol.createUser  = async(req, res) =>{
    const user_new =  new user(req.body);
    console.log(user_new);
    await user_new.save();
    res.json({
        'status':"user saved"
    });

};

userctrol.getUser = async(req, res) =>{
    const one_user = await user.find({"cc": req.params.cc});
    res.json(one_user)
}



module.exports = userctrol;