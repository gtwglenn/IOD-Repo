const express = require("express");
const router = express.Router();
const { getUsers, createUser } = require("../controllers/userController");

router.get("/", (req, res) => getUsers(res));
router.post("/create", (req, res) => createUser(req.body, res));

module.exports = router;
