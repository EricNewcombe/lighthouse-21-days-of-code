/*
Instructions

We need to go through the survey responses to see what your constituents would 
like you to focus on over the course of your term in office. The array that you 
are given contains many phrases and words pulled from a number of interviews. We 
only want to focus on the following three key phrases: "smart city", "arts funding", 
and "transportation".

Our termTopics function needs to count how many times each of those topics was mentioned 
in the surveys, and then return an array with the number of mentions in the following 
order: smart city, arts funding, and then transportation. 
*/

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