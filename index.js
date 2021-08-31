// distanceFromHqInBlocks() 
// 1) returns a distance in blocks 
// 2) returns a distance in blocks 
// 3) calculates distances below 42nd street distanceFromHqInFeet() 
// 4) returns a distance in feet 
// 5) returns a distance in feet 
// 6) calculates distances below 42nd street distanceTravelledInFeet() 
// 7) returns the distance travelled in feet 
// 8) returns a distance in feet 
// 9) returns distance when destination is below distance calculatesFarePrice(start, destination) 
// 10) gives customers a free sample 
// 11) charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!) 
// 12) charges 25 dollars for a distance over 2000 feet 
// 13) does not allow rides over 2500 feet 

let travelDistance;
function distanceFromHqInBlocks(distance){
  parseInt(distance);
  travelDistance = Math.abs(42 - distance)
  return travelDistance ;
}
function distanceFromHqInFeet(start){
  parseInt(start);
  return Math.abs(start - 42) * 264;

}


function distanceTravelledInFeet(start, finish){
  return Math.abs(start - finish) * 264;

}




function calculatesFarePrice(start, finish){
 travelDistance = Math.abs(start - finish) * 264;
 if (travelDistance < 401){
   return 0
 } else if (travelDistance <= 2000){
   return ((travelDistance - 400) * .02 )
 } else if (travelDistance <= 2500){
   return 25
 } else {
  return "cannot travel that far"
}
 }
