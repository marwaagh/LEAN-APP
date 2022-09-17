const db = require('../util/database');

module.exports = class Devis {

    //constr
    constructor(name, email, phone, ste, fct, nb_part, sujet, msg) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.ste = ste;
    this.fct = fct;
    this.nb_part = nb_part;
    this.sujet = sujet;
    this.msg = msg;
    }


    //fetch all
    static fetchAll() {
        return db.execute('SELECT * FROM devis' );
        }

    //save
    static save(devis) {
        return db.execute('INSERT INTO devis (name, email, phone, ste, fct, nb_part, sujet, msg) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
         [devis.name, devis.email, devis.phone, devis.ste, devis.fct, devis.nb_part, devis.sujet, devis.msg]);
    }
};
