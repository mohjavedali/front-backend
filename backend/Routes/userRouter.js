const router = require('express').Router();
const { registerUser, loginUser, userList } = require('../Controllers/userController');
const { auth, authLogin, authRegister } = require('../Middlewares/auth');
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

router.post('/signup', upload.single('file'), authRegister, registerUser);

router.post('/login', authLogin, loginUser);

router.get('/getUsers', auth, userList);

module.exports = router;