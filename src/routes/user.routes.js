const router = require('express-promise-router')();
const userController = require('../controllers/user.controller');
 
// ==> Rota responsável por criar um novo 'User': (POST): localhost:3000/api/users
 
router.get('/users', userController.listAll);

// router.post('/users', userController.createUser);
// router.put('/users/:id', userController.updateUserById);
// router.delete('/users/:id', userController.deleteUserById);
// router.get('/users', userController.listAll);
// router.get('/users/:id', userController.findUserById);

module.exports = router;
