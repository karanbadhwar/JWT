"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bad_request_1 = require("../errors/bad-request");
const jwt = require("jsonwebtoken");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    //Mongoose validation
    //Joi
    //Check in controller
    if (!username || !password) {
        throw new bad_request_1.BadRequest("please provide a username and password");
    }
    //Demo Id
    const id = new Date().getDate();
    const secret = process.env.JWT_SECRET;
    //Token
    const token = jwt.sign({
        id,
        username,
    }, secret, { expiresIn: "30d" });
    res.status(200).json({ msg: "user Created", token });
    // res.send("SIGNED");
});
const dashboard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({
        msg: `Hello, ${req.user.username}`,
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
    });
});
module.exports = {
    login,
    dashboard,
};
