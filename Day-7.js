const termTopics = (interviews) => {
  
    const topicsToSearchFor = ["smart city","arts funding","transportation"]
    let topicCounts = [];
    
    for ( let i = 0; i < topicsToSearchFor.length; i++ ) {
      topicCounts.push(0);
    }
    
    interviews.forEach( (interview) => { 
      for ( let i = 0; i < topicsToSearchFor.length; i++ ) {
        if ( interview.indexOf(topicsToSearchFor[i]) !== -1 ) {
          topicCounts[i]++;
        }
      }
    })
    
    return topicCounts;
}