const router = require("express").Router();
const dogRoutes = require("./dogs");

// Book routes
router.use("/dogs", dogRoutes);

module.exports = router;