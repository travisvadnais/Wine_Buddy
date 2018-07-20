const router = require('express').Router();
const wineController = require('../../controllers/wineController');

//Then go to the Controller.
router.route("/api/wine/:winetypes/:price")
  .get(wineController.findAll);

module.exports = router;
