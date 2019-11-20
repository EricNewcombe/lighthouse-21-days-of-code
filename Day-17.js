const judgeVegetable = (vegetables, metric) => {
  
    let submitter = null;
    let highest = 0;
    
    vegetables.forEach( (vegetable) => {
      if ( vegetable[metric] > highest ) {
        highest = vegetable[metric];
        submitter = vegetable.submitter;
      }
    })
    
    return submitter;
    
}