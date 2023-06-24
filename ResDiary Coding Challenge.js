// Declares variables to be used
const exampleArray1 = [1,2,3,4,5,6,7,8]
const exampleArray2 = [1,2,3,4,5]
const exampleArray3 = [1,2,3,4,5,6,7,8,9,10,11]
const exampleN1 =3
const exampleN2 =4
const exampleN3 =5
const exampleN4 =8
const exampleN5 =-1

function divideArray(array,N){
  //Declares varaibles as empty array
  let resultArray=[]
  //Validates that array is not empty and that N is positive
  if(array.length>=0 && N>0){
    for(i=N;i>0;i--){
      //If N is greater than array length ensures that an empty array is not added to results
      if(array.length!==0){
        //Splices the array from position 0 to the calculated position and pushes the results into the array
        resultArray.push(array.splice(0, Math.ceil(array.length/i)))
      } 
    }
    return resultArray
  }
  //If the array is empty or N is not positive returns string
  return "Array is either empty or N is not positive"
}

//Displays Results
console.log("Array 1 \n")
console.log(divideArray([...exampleArray1],exampleN2),"\n")

console.log("Array 2 \n")
console.log(divideArray([...exampleArray2],exampleN1))
console.log(divideArray([...exampleArray2],exampleN4))
console.log(divideArray([...exampleArray2],exampleN5),"\n")

console.log("Array 3 \n")
console.log(divideArray([...exampleArray3],exampleN1))
console.log(divideArray([...exampleArray3],exampleN2))
console.log(divideArray([...exampleArray3],exampleN3))

