import axios from "axios";

export default {
  signup: function(data) {
    return axios.post("/api/signup", data);
  },
  getDogs: function() {
    return axios.get("/api/dogs");
  },
  getProfile: function(id) {
    return axios.get("/api/profile/" + id);
  }
  // getProfile: function (){
  //   return axios.get("/api/profile");
  // }
};
