const finalPosition = (moves) => {
  
    let position = [0,0];
    
    moves.forEach( (move) => {
      switch (move) {
        case "north":
          position[1]++;
          break;
        case "south":
          position[1]--;
          break;
        case "east":
          position[0]++;
          break;
        case "west":
          position[0]--;
          break;
        default:
          break;
      }
    })
    
    return position;
    
  }