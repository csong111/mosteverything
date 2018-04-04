var assert = require('assert');

// we need 7 test cases. 
let inputs = [
  ["foo", 3],
  ["moo", 2],
  ["bo", 2],
  ["kazowie", 0],
  ["maui", -2],
  [8, 9],
  [true, 10]
]

let outputs = [
  "foofoofoo",
  "moomoo",
  "bobo",
  undefined,
  undefined,
  undefined,
  undefined
]

/*
Make this function return the input string repeated as many times as specified. 
If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

For example:

f(["foo", 3]) // "foofoofoo"
f(["fo", 3]) // "fofofo"
f(["foo", -1]) // undefined
*/
function f(arr) {
    if (arr[1] > 0 && isNaN(arr[0])) {
        var x = "";
        for (i = 0; i < arr[1]; i++) {
            x = x + arr[0];
        }
        return x;                
    }
    return undefined;
    
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
runTest(5);
runTest(6);

