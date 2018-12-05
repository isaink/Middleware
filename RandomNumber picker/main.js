const express = require("express");
const app = express();

const generateSpread = (req, res, next) => {
  let floor = req.query.floor; // I need two additional request parameters: floor & ceiling.
  let ceil = req.query.ceil;
  let result = []; // random number between the floor and the ceiling.

  console.log(req.query) //{ floor: '10', ceil: '23' }
  console.log(req.query.floor) // '10'

  if(floor){
    result = Math.floor((Math.random() * `${ceil}`) + `${floor}`); // Generate an arr of num for the pickers.
    let response = {
      status: "success",
      range: [`${floor}, ${ceil}`],
      randPick:` ${result}`
    };
    req.randomRes = response;
  };
    next(); // I almost got it, I need to fix the randPick to have a range between floor and ceil not randomNumbers
};

// Function to handle the root path (route)
app.get("/random", generateSpread, (req, res) => { //Create a route that accepts a GET request
    res.json(req.randomRes);
});

app.listen(2000, () => {
  console.log("listening to port Picker-Random-Number");
});
