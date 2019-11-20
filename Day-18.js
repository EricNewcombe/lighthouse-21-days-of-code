/*
Instructions

Our first function, bestOdds(), will receive two parameters. The first parameter will be 
an array of strings that are either red, green, or blue, representing the tickets that a 
particular person has. The second parameter is an object that shows how many entries there 
currently are for each raffle. By looking at the tickets that the particular person has, 
your function should return a string that lets the person know which raffle they have the 
highest chance of winning. The format of the response should be as follows (without the 
square brackets): "You have the best odds of winning the [COLOUR] raffle."

While we could do this all within the bestOdds() function, we want to keep our code DRY, 
so we will also need to complete a helper function. This helper function countTickets() 
will be called from within bestOdds() and receive the array of strings that are either red, 
green, or blue. The function will count how many of each string there are, and then return 
an object with the individual counts. 
*/

const countTickets = (tickets) => {
  
  let ticketCounts = {
    "red": 0,
    "green": 0,
    "blue": 0
  };
  
  tickets.forEach( (ticket) => {
    ticketCounts[ticket]++;
  })
  
  return ticketCounts;
    
}
  
const bestOdds = (tickets, raffleEntries) => {
    
  let ticketCounts = countTickets(tickets);
  let redOdds = ticketCounts.red / raffleEntries.red;
  let blueOdds = ticketCounts.blue / raffleEntries.blue;
  let greenOdds = ticketCounts.green / raffleEntries.green;
  
  let bestRaffle = null;
  
  if ( redOdds >= blueOdds && redOdds >= greenOdds ) {
    bestRaffle = "red";
  } else if ( blueOdds >= greenOdds ) {
    bestRaffle = "blue";
  } else {
    bestRaffle = "green";
  }
  
  return `You have the best odds of winning the ${bestRaffle} raffle.`
    
}