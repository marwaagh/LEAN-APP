const { validationResult } = require('express-validator');

const Contact = require('../models/contact');

exports.fetchAll = async(req, res, next) => {
    try {
        const [allMessages] = await Contact.fetchAll();
        res.status(200).json(allMessages);
    } catch (err) {
    // handle
    if (!err.statusCode) {
       err.statusCode = 500;
    }
    next(err);
    }
}

exports.postContact = async(req, res, next) => {

    const errors = validationResult(req);

if (!errors.isEmpty()) return

    const name = req.body.name;
    const email = req.body.email;
    const msg = req.body.msg;

    try {
        const contact = {
        name: name,
        email: email,
        msg: msg,
        }
        const result = await Contact.save(contact);

        res.status(201).json({ message:' Message ajouté avec succée! ' });
        } catch(err) {
        // handle
        if (!err.statusCode) {
            err.statusCode = 500;
            }
            next(err);
        }
}