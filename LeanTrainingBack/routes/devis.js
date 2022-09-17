const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const devisController = require('../controllers/devis');

router.get('/', devisController.fetchAll);

router.post('/',
[
    body('name').trim().isLength({ min: 5 }).not().isEmpty(),
    body('email').trim().isLength({ min: 10 }).not().isEmpty(),
    body('phone').trim().not().isEmpty(),
    body('ste').trim().not().isEmpty(),
    body('fct').trim().not().isEmpty(),
    body('nb_part').trim().not().isEmpty(),
    body('sujet').trim().not().isEmpty(),
    body('msg').trim().not().isEmpty(),
], 
 devisController.postDevis
);
module.exports = router;