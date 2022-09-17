const db = require('../util/database');

module.exports = class Formation {

    //constr
    constructor( title, body, img, category, user, details) {
    this.title = title;
    this.body = body;
    this.img = img;
    this.category = category;
    this.user = user;
    this.details = details;
    }


    //fetch all
    static fetchAll(category) {
        return db.execute('SELECT * FROM formations WHERE category = ?', [category] );
        }

     //fetch one
     static fetchOne(title) {
        return db.execute('SELECT * FROM formations WHERE title = ?', [title] );
        }

    //save
    static save(formation) {
        return db.execute('INSERT INTO formations (title, body, img, category, user, details) VALUES (?, ?, ?, ?, ?, ?)',
         [formation.title, formation.body, formation.img, formation.category, formation.user, formation.details]);
    }

    //delete
    static delete(title){
        return db.execute('DELETE FROM formations WHERE title = ?', [title]);
        }
};
