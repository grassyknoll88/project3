import axios from "axios";

axios
  .post("/api/signup", {
    username: username,
    password: password,
    pet_name: pet_name,
    location: location,
    breed: breed,
    size: size,
    description: description,
    email: email,
    imgUrl: imgUrl
  })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });
