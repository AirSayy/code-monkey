// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

// SOLUTION

function createPhoneNumber(numbers){
    let one = numbers[0] 
    let two = numbers[1]
    let three = numbers[2]
    let four = numbers[3]
    let five = numbers[4]
    let six = numbers[5]
    let seven = numbers[6]
    let eight = numbers[7]
    let nine = numbers [8]
    let ten = numbers[9]
    
    const firstSet = `(${one}${two}${three})`
    const secondSet = `${four}${five}${six}`
    const thirdSet = `${seven}${eight}${nine}${ten}`
    const phoneNumbers = `${firstSet} ${secondSet}-${thirdSet}`
    
    
   return phoneNumbers
 }