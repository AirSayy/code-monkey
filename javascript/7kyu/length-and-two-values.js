// Given an integer n and two other values, build an array of size n filled with these two values alternating.

// Examples
// 5, true, false     -->  [true, false, true, false, true]
// 10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
// 0, "one", "two"    -->  []

// solution

function alternate(n, firstValue, secondValue){
    // your code
    const newArr =[]
    for(let i = 0; i < n  ; i++){
     if(i % 2 === 1)  {
       newArr.push(secondValue)
     }
      else{
        newArr.push(firstValue)
      } 
    }
   return newArr}