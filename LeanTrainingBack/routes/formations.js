const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const formationsController = require('../controllers/formations');

router.get('/:category', formationsController.fetchAll);

router.get('/filter/:title', formationsController.fetchOne);

router.post('/',[body('title').trim().isLength({ min: 5 }).not().isEmpty(),
    body('body').trim().isLength({ min: 10 }).not().isEmpty(),
    body('img').trim().not().isEmpty(),
    body('category').trim().not().isEmpty(),
    body('user').trim().not().isEmpty(),
    body('details').trim().not().isEmpty(),
], 
 formationsController.postFormation
);

router.delete('/:title', formationsController.deleteFormation);

module.exports = router;