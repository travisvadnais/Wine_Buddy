import axios from 'axios';

export default {
// get wine to return wines that fit the foodselection, wineselection, and price range upon handleformsubmit
// named getWines?
  // getWines: function(food) {
  //   return axios.get(`/api/wine/:${food}`);
  // },


  //Travis fx
  //So the winetypes and price get passed in here from the wine.js fx
  getWines: function(winetypes, price) {
    return axios.get(`/api/wine/${winetypes}/${price}`);
  }
  //Then we go to the routes/api folder to wines.js
  

};

