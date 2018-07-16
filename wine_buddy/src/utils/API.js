import axios from 'axios';

export default {

  getWine: function(food) {
    return axios.get(`/api/wine/${food}`);
  }

};