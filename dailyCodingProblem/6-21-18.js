// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
// Bonus: Can you do this in one pass?

// Probably the worst way to do this.
// Going to be super slow on large data sets.
var Array = [10, 15, 3, 7];
var K = 17;
var ansArray = [];

function sumCheck(Array, K) {
  for(i=1; i <= Array.length; i++){
    if(Array[0] + Array[i] === K) {
     ansArray.push(Array[0], Array[i])
     console.log(ansArray[0], ansArray[1])
    }
  }
}

sumCheck(Array, K)
