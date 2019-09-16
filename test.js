function isPalindrome(word)
{
  var count_similiar =0;
  for(var i=0; i< word.length;i++){
    if(word[i].toLowerCase()==word[word.length-i-1].toLowerCase()){
      count_similiar++;
    }
  }
  
  if(count_similiar==word.length){
    return true;
  } else{
    return false;
  }
  // Please write your code here.
}
console.log(isPalindrome("Deleveled"))