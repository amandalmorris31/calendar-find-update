const router = require("express").Router();
const controller = require("../controllers/controller");

router.route("/")
  .get(controller.findAllEvents)

  router.route("/event/rsvp")
  .get(controller.modifyRsvp)


module.exports = router;