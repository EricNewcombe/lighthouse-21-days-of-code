const pumpkinItems = [
    { "name": "pumpkin pie", "cost": 5.00, "pumpkinSpice": 30 },
    { "name": "pumpkin spice latte", "cost": 3.00, "pumpkinSpice": 15 },
    { "name": "pumpkin spice macarons", "cost": 1.00, "pumpkinSpice": 3 }
]
  
pumpkinItems.sort( (a, b) => b.cost - a.cost );
  
const pumpkinSpice = money => {
    
    let totalSpice = 0;
    let purchaseArray = [];
    
    pumpkinItems.forEach( (item) => {
      let numberPurchasedItems = Math.floor(money / item.cost);
      money -= numberPurchasedItems * item.cost;
      totalSpice += numberPurchasedItems * item.pumpkinSpice;
      purchaseArray.push(numberPurchasedItems);
    })
    
    purchaseArray.push(totalSpice);
    
    return purchaseArray;
    
}