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