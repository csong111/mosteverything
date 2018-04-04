var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    "this is not easy",
    "no it really is not",
    "this is a long meow",
    "",
    "please calm down"
]

let outputs = [
  "easy",
  "really",
  "meow",
  undefined,
  "please"
]

/*
Make this function return the longest word in the input string. If the input string is empty then return an empty string.
If multiple words have the same length, return the last one that matches.
*/
function f(str) {
    if (str === "") {
        return undefined;
    }
    // str = "this is not easy",
    var arr = str.split(" ");
    // arr = ["this","is","not","easy"]
    var longestWrd = '';
    for ( var i = 0 ; i < arr.length ; i++){
        // i = 1
        // check if : longestWord is longer than 'is'
        if (arr[i].length >= longestWrd.length){
            longestWrd = arr[i];
        }
    }
    return longestWrd;
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
