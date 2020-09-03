const db = require("../models");

module.exports = {

    //define methods for controller
    
    findAllEvents: function(req,res) {

        db.Event
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    modifyRsvp: function(req, res) {
        const eventId = "5f5157e3bfc57f0abc007127"
        const userId = "5f5157e3bfc57f0abc007126"
        var query = {'_id': userId};
        db.User.find(query).then((userResult)=>{
            console.log(userResult);
            userResult.accept_evt.push(eventId)
            db.User.findOneAndUpdate(query, userResult, function(err, doc) {
                res.status(200).json(doc);
                console.log(err, doc)
            })
        }) 
        }}