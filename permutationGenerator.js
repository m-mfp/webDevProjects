function permuteString(aString, prefixVal="", results=[]){
  if(aString.length === 0){
    results.push(prefixVal)
    return results
  } 
    for (let char of aString){
      let newString = aString.replace(char, "")
      permuteString(newString, prefixVal + char, results);
  }

  let resultSet = Array.from(new Set(results))
  return resultSet
}


// This also works, although not recursion
// function permuteString(aString, prefixVal="", results=[]){

//     if (aString.length === 0){
//         results.push(prefixVal)
//         return results
//     }    

//     for (const char of aString){
//         let suffix = aString.replace(char, "").split("")
//         for (let i = 0; i < suffix.length; i++){
//             const firstElement = suffix.shift()
//             suffix.push(firstElement)
//             let string = char + suffix.join("")
//             results.push(string)
//         }
//     }
//     return results
// }

// let test = permuteString("far")
// console.log(test)