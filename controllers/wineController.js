//This will add / remove / update wines in the DB
//Note - this will likely be seeded once to start and a scrape function will come later unless we get ambitious
const db = require('../models');


//Before this function can execute though, we'll need to do a couple of things:
//1. I think we should have an array of the possible wine types, and then do a Math.random to grab one of them randomly to query the DB with;
//2. We'll also need to convert the price to something that the DB can understand.
module.exports = {
  findAll: function(req, res) {
    db.Wine
      .find({
        type: req.params.winetypes, 
        //I think this type of query will work.  $lt = 'less than'; $gt = 'greater than'
        price: {$lt: $20}
      })
      //Then send the request back to the front end.
      .then(dbModel => res.json(dbModel))
  }
}