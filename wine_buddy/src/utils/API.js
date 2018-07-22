import axios from 'axios';

export default {

  //The winetypes and price should get passed in here from the wine.js fx
  getWines: function(winetypes, price) {
    console.log(`${winetypes}, ${price} from API.js`)
    return axios.get("/api/wines", {
      params: {
        winetypes: winetypes, 
        price: price
      }
    })
  //Then go to the routes/api folder to wines.js
  }
};

