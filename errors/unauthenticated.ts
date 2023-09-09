import { CustomAPIError } from "./custom-error";
const { StatusCodes } = require("http-status-codes");

class UnauthenticatedErr extends CustomAPIError {
  statusCode: number;
  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnauthenticatedErr;
