// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// SOLUTION

// function solution(str, ending){
//     // TODO: complete
//     return str.indexOf(ending, str.length - ending.length) !== -1;
    
//   }

// BEST SOLUTION

// function solution(str, ending){
//     return str.endsWith(ending);
//   }