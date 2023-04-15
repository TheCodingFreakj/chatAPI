const { askToChatGpt } = require("../controllers/chat.controller");
const express = require("express");
const router = express.Router();

router.post("/", askToChatGpt);

module.exports = router;
