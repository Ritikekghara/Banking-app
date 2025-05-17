const { ValidationResult } = require('express-validator');
const ApiError = require('../utils/ApiError');

const ValidationMiddleware = async(req, res, next) => {
    const result = ValidationResult(req);
    if(!result.isEmpty()){
        throw new ApiError(400, result.array()[0].msg);
    }
    next();
}
module.exports = ValidationMiddleware
    

