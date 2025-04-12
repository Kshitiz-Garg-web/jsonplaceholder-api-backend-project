const express = require("express");
const {
  get_All_Users,
  get_All_Users_By_Id,
} = require("../controllers/userController");
const router = express.Router();

router.get("/", get_All_Users);
router.get("/:id", get_All_Users_By_Id);

module.exports = router;
