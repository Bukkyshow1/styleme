    // const hair = [];

    // exports.getAddHair = (req, res, next) => {
    //     res.render('add-hair', { pageTitle: 'Add Hair', path: '/admin/add-hair'
        
    //     });
    // };

    // exports.postAddHair = (req, res, next) => {
    //     hair.push({ hairType: req.body.hairtype, hairPrice: req.body.hairprice });
    //     res.redirect('/hairlist'

    //     );
    // };

    // exports.getHairList = (req, res) => {
    //     res.render('hairlist', {addedHair: hair, pageTitle: 'Hairstyles'});
    // };

const Product = require ('../models/product');

exports.getAddHair = (req, res, next) => {
    res.render('add-hair', { pageTitle: 'Add Hair', path: '/admin/add-hair'
    
    });
};

exports.postAddHair = (req, res, next) => {
    const hairtype = req.body.hairtype
    const hairprice = req.body.hairprice
    const product = new Product(hairtype, hairprice);
    product
        .save()
        .then(result => {
            console.log('New hairproduct Created');
            res.redirect('/service-list');
        })
        .catch(err => {
            console.log(err);
        })
        
};



exports.getServiceAdmin = (req, res) => {
    Product.fetchAll((products) => {
        res.render('service-list-admin', {addedHair: products, pageTitle: 'Service-Admin'});
    });
    
};

// exports.postDeleteHair = (req, res) => {
//     const hairId = req.body.hairId;
// };