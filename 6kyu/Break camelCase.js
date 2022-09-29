// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// SOLUTION
// function solution(string) {
//     return string.replace(/([a-z](?=[A-Z]))/g, '$1 ')
// }