//This will add / remove / update wines in the DB
//Note - this will likely be seeded once to start and a scrape function will come later unless we get ambitious
const db = require('../models');

// module.exports = {
//   findAll: function(req, res) {
//     db.Wine
//       .find({type: "white"})
//       .then(dbModel => res.json(dbModel))
//   }
// }

module.exports = {
  findAll: function(req, res) {
    db.Wine
      .find({type: this.wineSelection, price: this.priceSelection})
      .then(dbModel => res.json(dbModel))
  }
}