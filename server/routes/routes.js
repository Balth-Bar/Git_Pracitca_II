const express = require('express'); 
const router =  express.Router(); 

const userCtrol    =   require('../controllers/user.controllers');
const loginCtrol   =   require('../controllers/login.controllers');
const mensajeCtrol =   require('../controllers/mensaje.controllers');

router.get('/',userCtrol.getUsers);
router.post('/',userCtrol.createUser);
router.get('/:cc',userCtrol.getUser);


router.get('/bytr/:user&&:contra',loginCtrol.getLogin);
router.post('/bytr',loginCtrol.createcuent);

router.post('/mensaje',mensajeCtrol.createUser);


module.exports =  router; 