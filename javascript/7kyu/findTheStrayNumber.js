// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// SOLUTION

// function stray(numbers) {
//     let sorted = numbers.sort((a , b) => a - b)
  
//     if(sorted[0] != sorted[1] ){
//       return sorted[0]
//     }
//     else if(sorted[0] == sorted[1]){
//       return sorted[sorted.length-1]
//     }
    
//   }