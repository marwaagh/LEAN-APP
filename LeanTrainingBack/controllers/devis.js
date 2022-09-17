const { validationResult } = require('express-validator');

const Devis = require('../models/devis');

exports.fetchAll = async(req, res, next) => {
    try {
        const [allMessages] = await Devis.fetchAll();
        res.status(200).json(allMessages);
    } catch (err) {
    // handle
    if (!err.statusCode) {
       err.statusCode = 500;
    }
    next(err);
    }
}

exports.postDevis = async(req, res, next) => {

    const errors = validationResult(req);

if (!errors.isEmpty()) return

    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const ste = req.body.ste;
    const fct = req.body.fct;
    const nb_part = req.body.nb_part;
    const sujet = req.body.sujet;
    const msg = req.body.msg;

    try {
        const devis = {
        name: name,
        email: email,
        phone: phone,
        ste: ste,
        fct: fct,
        nb_part: nb_part,
        sujet: sujet,
        msg: msg,
        }
        const result = await Devis.save(devis);

        res.status(201).json({ message:' Devis ajouté avec succée! ' });
        } catch(err) {
        // handle
        if (!err.statusCode) {
            err.statusCode = 500;
            }
            next(err);
        }
}