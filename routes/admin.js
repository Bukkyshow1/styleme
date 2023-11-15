const path = require('path');

const express = require('express');

const serviceController = require('../controllers/add-service');


const router = express.Router();


router.get('/add-hair', serviceController.getAddHair);

router.post('/add-hair', serviceController.postAddHair);

// router.get('/service-list-admin', serviceController.getServiceAdmin);

// router.post('delete-hair', serviceController.postDeleteHair);




module.exports = router;
