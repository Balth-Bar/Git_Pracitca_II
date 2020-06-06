const mongoose  = require('mongoose'); 

const{Schema} = mongoose;

const table =  new Schema({
    nombre :         {type:String,required:true},
    telefono :       {type:String,required:true},
    correo :         {type:String,required:true},
    mensaje :        {type:String,required:true},
   
})

module.exports =  mongoose.model('mensaje',table);