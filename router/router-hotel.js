const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotel-controllers');

router.get('/hotel', hotelController.getHotels);
router.post('/hotel', hotelController.addHotels);
router.put('/hotel', hotelController.updateHotel);
router.delete('/hotel', hotelController.addHotels);

module.exports = router;
