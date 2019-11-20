const festivalColours = color1 => {
  
    let h1 = (color1 + 150) % 360;
    let h2 = (color1 + 210) % 360;
    
    return h1 > h2 ? [h2,h1] : [h1,h2]
    
}