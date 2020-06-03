const express = require('express'); 
const router =  express.Router(); 

const userCtrol =   require('../controllers/user.controllers')

router.get('/',userCtrol.getUsers);
router.post('/',userCtrol.createUser);
router.get('/:cc',userCtrol.getUser);

module.exports =  router; 