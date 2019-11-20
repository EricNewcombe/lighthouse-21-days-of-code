const peopleThreshold = 30;
const baseFare = 100;
const pricePerKilometer = 25;
const peopleCharge = 25;

const dynamicPricing = (numberOfPeople, distanceTraveled) => {
  
  let total = baseFare + distanceTraveled * pricePerKilometer + ( numberOfPeople >= peopleThreshold ? peopleCharge : 0 );
  
  let dollarString = Math.floor(total / 100);
  let centsString = `${ Math.floor( String((total % 100) / 10) ) }${(total % 10)}`
  
  return `$${dollarString}.${centsString}`
  
}