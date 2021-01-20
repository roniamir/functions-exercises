//capitalize just the first letter in every word

function allCaps(str) {
  // your code here
  let newStr ="";
  let lastLocation = 0;
  while(str.indexOf(" ", lastLocation) != -1){
    newStr += str[lastLocation].toUpperCase(); 
    lastLocation++;
    newStr += str.slice(lastLocation, str.indexOf(" ", lastLocation) + 1);
    lastLocation = str.indexOf(" ", lastLocation) + 1;
  }
   newStr += str[lastLocation].toUpperCase(); 
    lastLocation++;
    newStr += str.slice(lastLocation, str.length);
  return newStr;
}
let st = "I Am A Cyber4s Student";
console.log(allCaps(st));