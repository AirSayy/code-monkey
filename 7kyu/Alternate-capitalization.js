// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// SOLUTION

function capitalize(s){
    const even = s.split('').map((el,idx)=> idx % 2 == 0 ? el.toUpperCase() : el.toLowerCase()).join('')
    const odd = s.split('').map((el,idx)=> idx % 2 == 1 ? el.toUpperCase() : el.toLowerCase()).join('')
    const joinedArray = []
    joinedArray.push(even,odd)
    return joinedArray
  };
