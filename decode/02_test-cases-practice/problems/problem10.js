var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  "hey there",
  "how are you",
  "why do you ask",
  "JUST WONDERING",
  "have a good day"
]

let outputs = [
 "Hey There",
 "How Are You",
 "Why Do You Ask",
 "Just Wondering",
 "Have A Good Day"
]

/*
Make this function return the input string, capitalized. You must use a for loop. For example:

f("hello world"); // Hello World
f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

*/
function f(str) {
    var arr = str.split(" ");
    var newArr = [];
    for (i = 0; i < arr.length; i++){
        var word = arr[i];
        newArr.push(word[0].toUpperCase() + word.substring(1).toLowerCase());
    }
    return newArr.join(" ");
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

