const mongoose  = require('mongoose'); 

const{Schema} = mongoose;


const table =  new Schema({
    nombre :         {type:String,required:true},
    cc :             {type:Number,required:true},
    genero :         {type:String,required:true},
    eps :            {type:String,required:true},
    edad :           {type:Number,required:true},
    telefono :       {type:String,required:true},
    direccion :      {type:String,required:true},
    imagen:          {type:String,required:true}
})

module.exports =  mongoose.model('users',table);
