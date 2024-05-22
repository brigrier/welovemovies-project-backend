const router = require("express").Router();
const controller = require("./movies.controller")

router.route("/")
  .get(controller.list)

router.route("/?is_showing=true")
  .get(controller.listShowing)

router.route("/:movieId")  
  .get(controller.read)

router.route("/:movieId/theaters")  
  .get(controller.readWithTheaters)

router.route("/:movieId/reviews")  
  .get(controller.readWithReviews)

module.exports = router