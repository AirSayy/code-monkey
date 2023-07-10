// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// solution...

function longest(s1, s2) {
    // concat the strings 
   //   split into arrays and sort
  //   filter duplicates and join
    const a = `${s1}${s2}`.split('').sort()
    const str =a.filter((el,idx)=>a.indexOf(el)===idx).join('')
  
    return str
  }