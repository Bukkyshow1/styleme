const express = require('express');

const serviceController = require('../controllers/add-service');
const navigationController = require('../controllers/navigation');

const router = express.Router();

router.get('/', navigationController.getHome);

router.get('/about', navigationController.getAbout);

router.get('/hair/:hairId', navigationController.getHair);

router.get('/apt', navigationController.getApt);

router.get('/services', navigationController.getServices);

router.get('/service-list', navigationController.getServiceList);

router.get('/orders', navigationController.getOrders);

router.post('/orders', navigationController.postOrders);

router.get('/checkout', navigationController.getCheckout);



// router.get('/services', (req, res) => {
//     const hair = adminData.hair;
//     res.render('services', { addedHair: hair, pageTitle: 'Style Services' });
// });



module.exports = router;