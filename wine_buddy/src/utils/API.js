import axios from 'axios';

export default {
// if this returns the food list can we change name to getFood ?
// getWine 
  getWine: function(food) {
    return axios.get(`/api/wine/${food}`);
  },


};