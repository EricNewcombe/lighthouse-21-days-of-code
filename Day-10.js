const validParking = {
    "regular": "R",
    "small": "SR",
    "motorcycle": "MSR"
  }
  
const whereCanIPark = (spots, vehicle) => {
    
    // Code here!
    for ( let y = 0; y < spots.length; y++ ) {
      
      for ( let x = 0; x < spots[y].length; x++ ){
        if ( validParking[vehicle].indexOf(spots[y][x]) !== -1 ) { 
          
          return [x, y] 
          
        }
      }
    }
    
    
    return false;
}