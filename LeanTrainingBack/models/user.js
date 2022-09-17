const db = require('../util/database');

module.exports = class User {

    //constr
    constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    }

     //fetch all
     static fetchAll() {
        return db.execute('SELECT * FROM users' );
        }

    //find
    static find(email) {
        return db.execute('SELECT * FROM users WHERE email = ?', [email]);
    }


    //save
    static save(user) {
        return db.execute('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [user.name, user.email, user.password]);
    }

     //update name
     static updateName(email) {
        return db.execute('UPDATE users SET name = ? WHERE email = ?', [user.name, email]);
    }

     //update password
     static updatePassword(email) {
        return db.execute('UPDATE users SET password = ? WHERE email = ?', [user.password, email]);
    }
};
