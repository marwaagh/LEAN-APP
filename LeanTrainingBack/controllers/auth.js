const { validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const User = require('../models/user');

/////////////////afficher tout user
exports.fetchAll = async(req, res, next) => {
    try {
        const [allUsers] = await User.fetchAll();
        res.status(200).json(allUsers);
    } catch (err) {
    // handle
    if (!err.statusCode) {
       err.statusCode = 500;
    }
    next(err);
    }
}

/////////////////afficher user par mail
exports.find = async(req, res, next) => {
    try {
        const [user] = await User.find(req.params.email);
        res.status(200).json(user);
    } catch (err) {
    // handle
    if (!err.statusCode) {
       err.statusCode = 500;
    }
    next(err);
    }
}
/////////////////update user Name
exports.updateName = async (req, res) => {

    let email = req.params.email

    const user = await User.updateName(req.body, { where: { email: email }})

    res.status(200).send(user)
   
}
/////////////////update user Name
exports.updatePassword = async (req, res) => {

    let email = req.params.email

    const user = await User.updatePassword(req.body, { where: { email: email }})

    res.status(200).send(user)
   
}
//////////////////sign up
exports.signup = async(req, res, next) => {

    const errors = validationResult(req);

if (!errors.isEmpty()) return

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    try {
        const hashedPassword = await bcrypt.hash(password, 12)
        const userDetails = {
        name: name,
        email: email,
        password: hashedPassword
        }
        const result = await User.save(userDetails);

        res.status(201).json({ message:' Utilisateur inscrit avec succée! ' });
        } catch(err) {
        // handle
        if (!err.statusCode) {
            err.statusCode = 500;
            }
            next(err);
        }
}

/////////////////sign in
exports.signin = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    try{
    const user = await User.find(email);
    if (user[0].length !== 1) {
    const error = new Error('Ce mail ne correspond a aucun utilisateur .')
    error.statusCode = 401;
    throw error;
    }

    const storedUser = user[0][0];

    const isEqual = await bcrypt.compare(password, storedUser.password);
    if (!isEqual) {
        const error = new Error('Le mot de passe saisie est incorrecte!'); 
        error.statusCode = 401;
        throw error;
    }

    const token = jwt.sign(
        {
        email: storedUser.email,
        userId: storedUser.id,
        },
        'secretfortoken',
        { expiresIn: '1h' }
        );
        res.status(200).json({ token: token, userId: storedUser.id });

    } catch (err) {
    if (!err.statusCode) {
    err.statusCode = 500;
    }
    next(err);
    }
    }