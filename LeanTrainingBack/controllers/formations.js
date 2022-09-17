const { validationResult } = require('express-validator');

const Formation = require('../models/formation');

///////////formations par id
exports.fetchOne = async(req, res, next) => {
    try {
        const [formation] = await Formation.fetchOne(req.params.title);
        res.status(200).json(formation);
    } catch (err) {
    // handle
    if (!err.statusCode) {
       err.statusCode = 500;
    }
    next(err);
    }
} 

///////////formations par category
exports.fetchAll = async(req, res, next) => {
    try {
        const [allFormations] = await Formation.fetchAll(req.params.category);
        res.status(200).json(allFormations);
    } catch (err) {
    // handle
    if (!err.statusCode) {
       err.statusCode = 500;
    }
    next(err);
    }
}


exports.postFormation = async(req, res, next) => {

    const errors = validationResult(req);

if (!errors.isEmpty()) return

    const title = req.body.title;
    const body = req.body.body;
    const img = req.body.img;
    const category = req.body.category;
    const user = req.body.user;
    const details = req.body.details;
    try {
        const formation = {
        title: title,
        body: body,
        img: img,
        category: category,
        user: user,
        details: details,
        }
        const result = await Formation.save(formation);

        res.status(201).json({ message:' Formation ajoutée avec succée! ' });
        } catch(err) {
        // handle
        if (!err.statusCode) {
            err.statusCode = 500;
            }
            next(err);
        }
}

exports.deleteFormation = async(req, res, next) => {
    try {
        const deleteResponse = await Formation.delete(req.params.title);
        res.status(200).json(deleteResponse);
    } catch (err) {
    // handle
    if (!err.statusCode) {
       err.statusCode = 500;
    }
    next(err);
    }
}