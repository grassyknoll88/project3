import axios from "axios";

axios
  .post({
    method: "post",
    url: "/api/signup",
    data: {
      username: username,
      password: password,
      pet_name: pet_name,
      location: location,
      breed: breed,
      size: size,
      description: description,
      email: email,
      imgUrl: imgUrl
    }
  })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });

axios.get({
  method: "get",
  url: "/api/login",
  data: {
    username: username,
    password: password
  }
});

axios.get({
  method: "get",
  url: "/api/login",
  data: {
    username: username,
    password: password
  }
});
