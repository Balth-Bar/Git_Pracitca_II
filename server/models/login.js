const mongoose  = require('mongoose'); 

const{Schema} = mongoose;

const table_2 =  new Schema({
    nombre :          {type:String,required:true},
    usuario :         {type:String,required:true},
    contrasena :      {type:String,required:true},
    
})

module.exports =  mongoose.model('login',table_2);