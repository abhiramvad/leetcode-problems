// Given a string s, return the first non-repeating character in it and return its index. If it does not exist, return -1.



/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let unique_character = -1
    for(let i=0;i<s.length;i++){
        let aftersub = s.substring(i+1,s.length)
        let beforesub = s.substring(0,i)
        if(!aftersub.includes(s[i])&&!beforesub.includes(s[i])){
            unique_character = i
            break;
        }
    }
    return unique_character;
};
