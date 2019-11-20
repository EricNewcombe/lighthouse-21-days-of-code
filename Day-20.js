/*
Instructions

Each shape has a different calculation for determining volume, so we'll need to create a 
few functions that will help us figure out the volume of the various inflatable attractions.

In this challenge, we'll need to implement four functions.

The first three will calculate the volume of the individual shapes:

  sphereVolume()will calculate the volume of a sphere given a radius
  coneVolume() will calculate the volume of a cone given a radius and a height
  prismVolume() will calculate the volume of a prism given a height, a width, and a depth


The fourth function, totalVolume(), will receive an array containing the different shapes that 
make up a single attraction. The totalVolume function should use the previous three functions to 
calculate the total volume of an attraction.

Don't worry about getting the answers to the perfect precision: our tests will check to see that 
you're within a correct range. 
*/

const sphereVolume = function (radius) {
  return Math.round( 4 / 3 * Math.PI * Math.pow(radius, 3) * 100 ) / 100
}

const coneVolume = function (radius, height) {
   return Math.round( PI * Math.pow(radius, 2) * (height / 3) * 100 ) / 100
}

const prismVolume = function (height, width, depth) {
  return Math.round( height * width * depth * 100 ) / 100
}

const totalVolume = function (solids) {
  
  let totalVolume = 0;
  
  solids.forEach( (solid) => {
    switch(solid.type) {
      case "sphere":
        return totalVolume += sphereVolume(solid.radius);
      case "cone":
        return totalVolume += coneVolume(solid.radius, solid.height);
      case "prism":
        return totalVolume += prismVolume(solid.height, solid.width, solid.depth);
      default:
        return;
    }
  })
  
  return totalVolume;
}