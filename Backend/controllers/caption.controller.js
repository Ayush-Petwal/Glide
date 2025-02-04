const captionModel = require('../models/caption.model');
const captionService = require('../services/caption.services');
const { validationResult } = require('express-validator');

module.exports.registerCaption = async (req, res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }

        const { fullName, email, password, vehicle } = req.body;
        const isCaptionAlreadyExist = await captionModel.findOne({ email });
        if(isCaptionAlreadyExist){
            return res.status(401).json({ message: 'Caption already exists' });
        }

        const hashedPassword = await captionModel.hashPassword(password);
        const newCaption = await captionService.createCaption({
            firstName: fullName.firstName,
            lastName: fullName.lastName,
            email,
            password: hashedPassword,
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType
        });

        return res.status(201).json({ message: 'Caption created successfully', data: newCaption });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};