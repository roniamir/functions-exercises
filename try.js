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
console.log(allCaps("i love you"));