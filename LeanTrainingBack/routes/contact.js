const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const contactController = require('../controllers/contact');

router.get('/', contactController.fetchAll);

router.post('/',
[
    body('name').trim().isLength({ min: 5 }).not().isEmpty(),
    body('email').trim().isLength({ min: 10 }).not().isEmpty(),
    body('msg').trim().not().isEmpty(),
], 
 contactController.postContact
);
module.exports = router;