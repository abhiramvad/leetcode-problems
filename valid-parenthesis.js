// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let opening_braces = ["(","{","["]
  let valid = false;
  let arr = []
  for (let i=0;i<s.length;i++){
     
          if(opening_braces.indexOf(s[i])!=-1){
              arr.push(s[i])
          }
         else{
             let temp = arr[arr.length-1]
             if(!temp){
                 valid = false
                 break;
             }
             else if(s[i]==")" && temp=="("){
                 valid = true;
                 arr.pop()}
             else if(s[i]=="}" && temp=="{"){
                   valid = true;
                 arr.pop()}
             else if(s[i]=="]" && temp=="["){
                   valid = true;
                 arr.pop()}
             else {
                   valid = false;
                 break;
             }
             }
         }
   if(arr.length>0) valid =false;
    return valid;
  
};
