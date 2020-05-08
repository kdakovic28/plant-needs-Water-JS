const plantNeedsWater = function(day) {
  if (day === 'Wednesday'){
  return true; 
  } else {
  return false;
  }  
}
plantNeedsWater('Tuesday');
const waterCheck = plantNeedsWater('Tuesday');
console.log(waterCheck); 
