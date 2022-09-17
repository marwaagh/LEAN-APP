const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const User = require('../models/user');

const authController = require('../controllers/auth');

router.get('/signup', authController.fetchAll);

router.get('/:email', authController.find);

router.post('/signup', [body('name').trim().not().isEmpty(),
    body('email').isEmail().withMessage('Veuillez entrez un email valid.').custom(async(email) => {
    const user = await User.find(email);
    if(user[0].length > 0){
        return Promise.reject('Adresse Email existe déja!')
    }
    }).normalizeEmail(),body('password').trim().isLength({ min: 7 })], authController.signup
);
router.post('/signin', authController.signin);

router.put('/updateName/:email', authController.updateName);

router.put('/updatePassword/:email', authController.updatePassword);

module.exports = router;