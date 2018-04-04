var assert = require('assert');

// we need 7 test cases. I've provided 2.
let inputs = [
  [2, 4],
  [-3, 3],
  [4, 6],
  ["joke", 10],
  [10, "bye"],
  ["k", 2],
  [5, 5]
]

let outputs = [
  6,
  0,
  10,
  undefined,
  undefined,
  undefined,
  10
]

/*
Make this function return the sum of the two numbers that are passed to it. If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
function f(arr) {
  if (isNaN(arr[0]) == true || isNaN(arr[1]) == true) {
    return undefined;
  }
  else {
    return arr[0] + arr[1];
  }
}

function runTest(i) {
    var expected = outputs[i];
    var actual = f(inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);
runTest(6);
console.log("test cases passed");