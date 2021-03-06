const express = require("express");
const router = express.Router();
const {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersController");

const User = require("../models/User");

//middleware advanced
const advancedResults = require("../middleware/advancedResults");
const { protect, authorize } = require("../middleware/auth");

//authorize for admin
router.use(protect);
router.use(authorize("admin"));

router.route("/").get(advancedResults(User), getUsers).post(createUser);

router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
