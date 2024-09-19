// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";
import animals from "./data";

// const [cat, dog] = animals;

// const {
//   name: catName,
//   sound: catSound,
//   feedingRequirements: catFeedingRequirements,
// } = cat;

// const {
//   name: dogName,
//   sound: dogSound,
//   feedingRequirements: dogFeedingRequirements,
// } = dog;

// console.log(catSound);

// const {food: catFood, water: catWater } = catFeedingRequirements;
// const {food: dogFood, water: dogWater } = dogFeedingRequirements;
// console.log(catFood);

const [honda, tesla] = cars;

const {
  coloursByPopularity: [hondaTopColour],
  speedStats: { topSpeed: hondaTopSpeed },
} = honda;

const {
  coloursByPopularity: [teslaTopColour],
  speedStats: { topSpeed: teslaTopSpeed },
} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Color</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
