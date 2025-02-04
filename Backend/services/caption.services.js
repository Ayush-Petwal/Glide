const captionModel = require('../models/caption.model');

module.exports.createCaption = async ({
    firstName, lastName, email, password,
    color, plate, capacity, vehicleType
}) => {
    if(!firstName || !email || !password || !color || !plate || !capacity || !vehicleType){
        throw new Error('All fields are required');
    }
    const caption = await captionModel.create({
        fullName : {
            firstName,
            lastName
        },
        email,
        password,
        vehicle : {
            color,
            plate,
            capacity,
            vehicleType
        }
    })
    return caption;
}