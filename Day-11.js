const busTimes = buses => {
  
    let arrivalTimes = {}
    
    Object.keys(buses).forEach( (busKey) => {
      arrivalTimes[busKey] = buses[busKey].distance / buses[busKey].speed
    })
    
    return arrivalTimes;
    
}