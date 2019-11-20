/*
Instructions

For this challenge you'll have to implement a function called finalPosition(), which 
will calculate the position of the parade based on an array of directional moves. 
The parade will move on an X-Y grid like the following.

https://etc.usf.edu/clipart/49200/49288/49288_graph_0505b_md.gif

Your function will receive an array of moves, which are strings that say either north, 
south, west, or east, these represent the parade moving in a particular direction by a 
single space on the grid. By looking at the path that the parade moves in, your function 
should calculate and then return an array representing the position of the parade after 
completing all of the moves. The first element of the array should be the X position, 
and the second element of the array should be the Y position. The parade begins at [0,0]. 
*/

const finalPosition = (moves) => {
  
  let position = [0,0];

  moves.forEach( (move) => {
    switch (move) {
      case "north":
        return position[1]++;
      case "south":
        return position[1]--;
      case "east":
        return position[0]++;
      case "west":
        return position[0]--;
      default:
        return;
    }
  })
  
  return position;
}