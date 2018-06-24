const router = require("express").Router();
const dogRoutes = require("./dogs");

// dog routes
router.use("/dogs", dogRoutes);

module.exports = router;