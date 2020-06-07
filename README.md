# Git_Practica_II
# Iniciar Angular
primero instalar las dependecia de angular para que el proyecto pueda correr con el comando  
"npm install --save-dev @angular-devkit/build-angular" dentro de la carpeta "fronted"
# Iniciar mongo 
Para iniciar el servicio de mongo se debe ir a la carpeta raiz del proyecto y utilizar el comando
"npm run dev" para iniciar el servidor  

# ingresar un usuario 
implementra postman en la sigueite url para ingresar el usuario 
http://localhost:3000/api/user/bytr

Configurar el envio 
en header ponemos:
KEY  = COntent-typpe
VALUE = application/json

body --->raw = 
{
    "nombre" :       "nombre_deseado"  ,
    "usuario" :      "usuario_deseado"    ,
    "contrasena" :   "contrasaña_deseada"  
    
}

y ya esta listo para funcionar despues precioanr el boton send.

# Donde deben de ir las imagenes 
Las imagenes que se usen para los pacientes DEBEN de guardarse en la caperta
fronted/src/assets/img-users sino la aplicacion no leera las imagenes.
