const login = require('../models/login');

const loginctrol = {}; 


loginctrol.getAll = async(req, res)  =>{

    const one_user = await login.find();
    res.json(one_user)
}

loginctrol.getLogin = async(req, res) =>{
    const one_user = await login.find({"usuario": req.params.user,"contrasena": req.params.contra});
    res.json(one_user)
}


loginctrol.createcuent  = async(req, res) =>{
    const cuent_new =  new login(req.body);
    console.log(cuent_new);
    await cuent_new.save();
    res.json({
        'status':"user saved"
    });

};

module.exports = loginctrol;