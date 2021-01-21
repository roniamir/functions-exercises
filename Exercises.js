//Question 1
function myReverse(str) {
  // your code here
  strLen =str.length;
  let reversStr = str[str.length-1];
  for( let i = 1 ; i < strLen ; i++){
    reversStr += str[strLen-1-i];
  }
  return reversStr;
}

//Question 2
function allCombinations(str) {
  let combinations = [];
  for(let i = 0; i < str.length ; i++){
    for(let j = i ; j < str.length ; j++){
      combinations.push(str.slice(i, j + 1));
      console.log(str.slice(i, j));
    }
  }
  // your code here

  //
  return combinations;
}
let arr =allCombinations('dog');
console.log(arr);

//Question 3
function allCaps(str) {
  // your code here
  let newStr = str[0].toUpperCase();
  let lastLocation = 0;
  while(str.indexOf(" ", lastLocation) != -1){
    if(lastLocation > 0){
      newStr += str[lastLocation].toUpperCase(); 
    }
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

//Question 4
function myPower(x, n) {
  // your code here
  let myPower = 1;
  for( let i =0; i < n ; i++){
    myPower *= x;
  }
  return myPower;
}

//Question 5
function getFirstNotRepeating(str) {
  // your code here
  let  firstNotRepeated = str[0];
  let isDup =false;
  for ( let i = 0; i < str.length ; i++){
    isDup =false;
    for ( let j = 0 ; j < str.length && !isDup ; j++ ){
      if(str[i] === str[j] && i != j){
        console.log(str[i], str[j]);
        isDup = true;
      }
    }
    if(!isDup){
      firstNotRepeated = str[i];
      break;
    }
  }
  return firstNotRepeated;
}
//Question 6 (Bonus)
function isPrefectNumber(num) {
  // your code here
  return "I'm not interested in the bonus question :(";
}

// *** Playground ***
// Feel free to run and test your code here on your own

// *** End of Playground ***

// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;
