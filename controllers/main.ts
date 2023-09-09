import { Request, Response } from "express";
import { BadRequest } from "../errors/bad-request";
const jwt = require("jsonwebtoken");

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  //Mongoose validation
  //Joi
  //Check in controller
  if (!username || !password) {
    throw new BadRequest("please provide a username and password");
  }

  //Demo Id
  const id = new Date().getDate();

  const secret = process.env.JWT_SECRET;
  //Token
  const token = jwt.sign(
    {
      id,
      username,
    },
    secret,
    { expiresIn: "30d" }
  );

  res.status(200).json({ msg: "user Created", token });
  // res.send("SIGNED");
};
interface NewReq {
  user: {
    id: number;
    username: string;
  };
}
interface NewReq extends Request {}

const dashboard = async (req: NewReq, res: Response) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
