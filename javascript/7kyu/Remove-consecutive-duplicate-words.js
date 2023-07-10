// 

// solution 
function removeConsecutiveDuplicates (s){
    // your perfect code...
      
      let result = []
      const newStr = s.split(' ')
      for(let i = 0; i < newStr.length; i++){
        if(newStr[i] != newStr[i + 1]){
          result.push(newStr[i])
        }
      }
      return result.join(' ')
      }