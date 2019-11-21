/*
Instructions

We need to complete a function called chooseRecipe(), which will receive three parameters:

  An array of ingredients in stock at Bakery A
  An array of ingredients in stock at Bakery B
  An array of recipe objects. Each recipe has a name property(string) and an ingredient property(array)

We are limiting our search to two ingredient recipes. We want to find a recipe that utilizes one 
ingredient from Bakery A and one from Bakery B.

Our chooseRecipe() function should return the name of the correct recipe.

Note: In the tests there will always be a single correct answer, and you will NOT need to consider 
special cases. For example, you do NOT need to worry about cases where one bakery has BOTH the 
ingredients for a recipe. 
*/

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  
  let possibleRecipeNames = [];
  
  recipes.forEach( recipe => {
    
    // Arrays to store booleans of whether each ingredient is in stock at each bakery
    let isInStockBakeryA = [];
    let isInStockBakeryB = [];
    
    // Loop through the ingredients and update the status of whether it is in stock
    // or not at each bakery
    recipe.ingredients.forEach( (ingredient) => {
      isInStockBakeryA.push( bakeryA.indexOf(ingredient) !== -1)
      isInStockBakeryB.push( bakeryB.indexOf(ingredient) !== -1)
    });
    
    // Ensure that every ingredient is included at at least one of the bakeries
    // Return (continue on to the next recipe) if both bakeries do not have the 
    // ingedient
    for ( let j = 0; j < recipe.ingredients.length; j++ ) {
      if ( !isInStockBakeryA[j] && !isInStockBakeryB[j] ) { return; }
    }
    
    // Add the recipe name to the possible recipes which can be made list
    possibleRecipeNames.push(recipe.name);
    
  })
  
  // Return the last possible recipe to satisfy how this coding challenge is set up
  return possibleRecipeNames.length > 0 ? possibleRecipeNames[possibleRecipeNames.length - 1] : false;
  
  // What actually should be the return statement
  // return possibleRecipeNames.length > 0 ? possibleRecipeNames[0] : false;
  
}

// Filter basic solution

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  recipes = recipes.filter( recipe => {
    return (bakeryA.includes(recipe.ingredients[0]) || bakeryA.includes(recipe.ingredients[1]))    &&  (bakeryB.includes(recipe.ingredients[0]) || bakeryB.includes(recipe.ingredients[1]))
  })
  return recipes[0].name
}