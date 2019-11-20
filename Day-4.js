const registerToVote = (name, unregisteredVoters) => {
  
    if ( unregisteredVoters.indexOf(name) !== -1 ) {
      unregisteredVoters.splice(unregisteredVoters.indexOf(name), 1)
    }
    
    return unregisteredVoters;
    
}