function hasTargetSum(array, target) {
  // Write your algorithm here
// iterate through all numbers in array
for (let i=0; i < array.length; i++) {
  //go through all numbers in array
  for (let k=i+1; k < array.length; k++) {
    //take one number and pair with another number in array
      if ((array[i] + array[k]) === target) {
        //console.log("i is", i, " and k is ", k)
        return true
    } 
  }
  
}

return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  function takes array, and target integer
   - determines if sum of any two numbers in array equals target
    - take 1st number array[0] and add to second number array[1]
      - if two numbers === target --> return true
      - otherwise take array[0] and add to array[2] 
      - loop through and add array[0] to all numbers until array[array.length]
    - when true is not returned, 
      - take second number array[1] and add to array[2]
        - repeat



*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
