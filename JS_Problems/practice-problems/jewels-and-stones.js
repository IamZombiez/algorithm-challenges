// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.
// Each character in S is a type of stone you have.
// You want to know how many of the stones you have are also jewels.
// The letters in J are guaranteed distinct, and all characters in J and S are letters.
// Letters are case sensitive, so "a" is considered a different type of stone from "A".
// Input: J = "aA", S = "aAAbbbb"
// Output: 3
//
// Input: J = "z", S = "ZZ"
// Output: 0

function jewels_stones(a , b){
  count = 0;
  for(j=0; j < a.length; j++){
    for(k=0; k < b.length; k++){
      if(a[j] === b[k]){
        count++
      }
    };
  };
  return count;
}

jewels_stones(J,S)
