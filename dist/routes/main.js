"use strict";
const router = require("express").Router();
//Controllers
const { login, dashboard } = require("../controllers/main");
// AuthMiddleware
const authMiddleware = require("../middleware/auth");
router.route("/dashboard").get(authMiddleware, dashboard);
router.route("/login").post(login);
module.exports = router;
