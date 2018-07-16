const router = require('express').Router();
const wineController = require('../../controllers/wineController');

//Link the routes to the Controller here.  Example from a past assignment at the bottom

router.route("/api/wine/:food")
  .get(wineController.findAll);

module.exports = router;

// // Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);