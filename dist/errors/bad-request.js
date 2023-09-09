"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const CustomAPIError = require("./custom-error");
const custom_error_1 = require("./custom-error");
const { StatusCodes } = require("http-status-codes");
class BadRequest extends custom_error_1.CustomAPIError {
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.Bad_Request;
    }
}
module.exports = BadRequest;
