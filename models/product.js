const getDb = require('../util/database').getDb;

class Product{
    constructor(title, price){
        this.hairType = title;
        this.hairPrice = price
    }

    save() {
        const db = getDb();
        return db.collection('Hair Info')
            .insertOne(this)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            });
        
    };

      
};
module.exports = Product;