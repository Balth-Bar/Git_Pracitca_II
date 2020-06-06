const mensaje  = require('../models/mensaje');

const mensajectrol = {};


mensajectrol.createUser  = async(req, res) =>{
    const mensaje_new =  new mensaje(req.body);
    console.log(mensaje_new);
    await mensaje_new.save();
    res.json({
        'status':"mensaje saved"
    });

};

module.exports = mensajectrol;