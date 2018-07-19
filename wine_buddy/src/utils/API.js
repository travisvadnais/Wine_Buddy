import axios from 'axios';

export default {
// get wine to return wines that fit the foodselection, wineselection, and price range upon handleformsubmit
// named getWines?
  getWines: function(food) {
    return axios.get(`/api/wine/:${food}`);
  },


};

