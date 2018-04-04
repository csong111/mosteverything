var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  [1, 2, 3, 4, 5],
  [],
  ["no", 1, 2],
  [true, 2, 3],
  ["not", false, 3]
]

let outputs = [
 15,
 0,
 3,
 5,
 3 
]

/*
Make this function return the sum of all the numbers in the input array. If any element in the array is not a number, skip it. If the array is empty, return zero.
*/
function f(arr) {
    // if (arr.length === 0) {
    //     return 0;
    // }

    var sum = 0;    
    for (var i=0; i < arr.length; i++) {
        if (typeof(arr[i]) === "number") {
            // arr[i] = 0;
            sum = sum + arr[i];
        }
        
    }
    console.log(sum);
    return sum;
}

function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
