const express = require("express");
// const axios = requiere("axios");
const app = express();

let animals = { // Colection of animals
  zebra: "zebra",
  tiger: "tiger",
  monkey: "monkey",
  cat: "cat"
};
let animalsKey = Object.keys(animals); //now is an array of animals
let response = {
  status: "success",
  message: true,  //Mmmm...
};

const isAnimal = (req, res, next) => {  //checking if the query have the same animalroute on my objAnimal...

  req.plannedRes = {
    status: "failure",
    message: false
  }

  animalsKey.forEach(el => { //trying to check equality...
    // console.log(el)
    if(req.params.animal === el){
      req.plannedRes = response;
      console.log('yep');
    }
  });
  next();
};

app.get("/animal/:animal", isAnimal, (req, res) => { //query the url and converted to json....
  res.json(req.plannedRes); // "/animal/:animal",
});

app.listen(1000, () => {
  console.log("listening to port 1000");
});
