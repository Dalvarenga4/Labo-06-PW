const { showAllUsers, addUserController, showForm} = require('../controllers/user.controller');

const router = require('express').Router();

router.get('/', showForm);

router.post('/home', addUserController)

// Nueva ruta para /allUsers
router.get('/allUsers', showAllUsers);

module.exports = router;
