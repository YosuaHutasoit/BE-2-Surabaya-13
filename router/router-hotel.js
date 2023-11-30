const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotel-controllers');

router.get('/hotel', hotelController.getHotels);

module.exports = router;
