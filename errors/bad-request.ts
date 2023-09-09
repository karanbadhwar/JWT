import { CustomAPIError } from "./custom-error";
const { StatusCodes } = require("http-status-codes");

export class BadRequest extends CustomAPIError {
  statusCode: number;
  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.Bad_Request;
  }
}

module.exports = BadRequest;
