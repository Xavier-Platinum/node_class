const router = require("express").Router();
const { index } = require("../controllers/default.controller");

router.get("/", index);


module.exports = router;