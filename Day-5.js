const acceptableLocationTypes = [ "school", "community centre"]
const minimumCapacity = 20;


const chooseStations = (stations) => {
  
  let finalStations = [];
  
  stations.forEach( (station) => {
    if ( acceptableLocationTypes.indexOf( station[2] ) !== -1 && station[1] >= minimumCapacity ) {
      finalStations.push(station[0]);
    }
  }) 
  
  return finalStations;
}