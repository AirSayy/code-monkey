// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

// Solution
var capitals = function (word) {

    return word.split('') 
               .map((el,id) => {
                    if(el === el.toUpperCase()){
                        return id
                    }
                    })
               .filter(a => a !== undefined)
    
};
