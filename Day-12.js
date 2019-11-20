const checkAir = function (samples, threshold) {

    let results = {
      "clean": 0,
      "dirty": 0
    }
    
    samples.forEach( (sampleResult) => {
      results[sampleResult]++;
    })
    
    return (results.dirty / (results.clean + results.dirty)) <= threshold ? "Clean" : "Polluted";
  
}