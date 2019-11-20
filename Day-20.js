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