const res = require('express/lib/response');
const Product = require ('../models/product');


exports.getHome = (req, res, next) => {
    res.render('style', {pageTitle: 'Home'});
};

exports.getAbout = (req, res) => {
    res.render('about', {pageTitle: 'Style About'});
};

exports.getApt = (req, res) => {
    res.render('apt', {pageTitle: 'Book Appointment'});
};

exports.getServices = (req, res) => {
    res.render('services', { pageTitle: 'Style Services'});
};

exports.getServiceList = (req, res) => {
    Product.fetchAll((products) => {
        res.render('service-list', {addedHair: products, pageTitle: 'Hairstyles'});
    });
    
};

exports.getHair = (req, res) => {
    const hairId = req.params.hairId;
    console.log(hairId);
    res.redirect('/')
};

exports.getOrders = (req, res) => {
    res.render('orders', { pageTitle: 'My order' });
};

exports.postOrders = (req,res) => {
    const hairId = req.body.hairId;
    console.log(hairId)
    res.redirect('/orders');
};

exports.getCheckout = (req, res) => {
    res.render('checkout', { pageTitle: 'Checkout' });
};


