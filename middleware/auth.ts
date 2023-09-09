import { Request, Response, NextFunction } from "express";
// const CustomAPIError = require("../errors/custom-error");
const { UnauthenticatedE } = require("../errors");
const jwt = require("jsonwebtoken");
interface NewReq {
  user: {
    id: number;
    username: string;
  };
}
interface NewReq extends Request {}

const authMiddleware = async (
  req: NewReq,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedE("Not authorized to access this route");
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = {
      id,
      username,
    };
    next();
  } catch (error) {
    throw new UnauthenticatedE("Not authorized to access this route");
  }
};
module.exports = authMiddleware;
