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
  let lastLocation = 1;
  while(str.indexOf(" ") != -1){
    newStr += str.slice(lastLocation, str.indexOf(" "));
    lastLocation = str.indexOf(" ")+1;
    newStr += str[lastLocation].toUpperCase(); 
  }
  return newStr;
}
let st = "love of my life";
console.log(allCaps(st));
//Question 4
function myPower(x, n) {
  // your code here
  return "";
}

//Question 5
function getFirstNotRepeating(str) {
  // your code here
  return "";
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
