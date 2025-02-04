const express   = require('express');
const router    = express.Router();
const { body } = require('express-validator');
const captionController = require('../controllers/caption.controller');

router.post('/register' , [
    body('fullName.firstName').isLength({min : 3}).withMessage('First name must be at least 3 characters long'),
     body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({min : 8}).withMessage('Password must be at least 8 characters long'),
    body('vehicle.color').isLength({min : 3}).withMessage('Color must be at least 3 characters long'),
    body('vehicle.plate').isLength({min : 3}).withMessage('Plate must be at least 3 characters long'),
    body('vehicle.capacity').isInt({min : 1}).withMessage('Capacity must be at least 1'),
    body('vehicle.vehicleType').isIn(['car', 'bike', 'auto']).withMessage('Vehicle type must be either car, bike or auto')
], captionController.registerCaption); 

module.exports = router;