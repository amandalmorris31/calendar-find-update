const router = require("express").Router();
const controller = require("../controllers/controller");

router.route("/")
  .get(controller.findAllEvents)

  router.route("/event/rsvp")
  .get(controller.modifyRsvp)

  router.route("/event/accept/:id")
  .get(controller.acceptEvent)

  router.route("/event/reject/:id")
  .get(controller.rejectEvent)
module.exports = router;