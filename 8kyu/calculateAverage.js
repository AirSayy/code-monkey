// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// SOLUTION
function findAverage(array) {
    // array would always be numbers
  //   find the average number of the array
  //   when found it should be returned
  //   empty array should return 0
  //   add all the numbers in the array and divide it by the length of the array
  //   use the .reduce() array method
  //   use the conditional statement so the empty array can return 0
    
    if(array.length > 0){
      let average = array.reduce((n, acc) => n + acc,0) / array.length 
      return average
    }
    else{
      return 0
    }
  }

