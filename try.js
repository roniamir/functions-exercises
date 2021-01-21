function getFirstNotRepeating(str) {
  // your code here
  let  firstNotRepeated = "";
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

console.log(getFirstNotRepeating("abcccfbaefa"));