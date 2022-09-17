const db = require('../util/database');

module.exports = class Contact {

    //constr
    constructor(name, email, msg) {
    this.name = name;
    this.email = email;
    this.msg = msg;
    }


    //fetch all
    static fetchAll() {
        return db.execute('SELECT * FROM contact' );
        }

    //save
    static save(contact) {
        return db.execute('INSERT INTO contact (name, email, msg) VALUES (?, ?, ?)',
         [contact.name, contact.email, contact.msg]);
    }
};
