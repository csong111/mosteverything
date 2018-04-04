var assert = require('assert');

// we need 5 test cases. 
let inputs = [
"I have been here for twelve hours and I am hungry",
"Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam",
"I wish I could grasp concepts instantly but it is not possible",
"I would like to eat a big meal and go to sleep",
"This is a challenging question and every step hurts"
]

let outputs = [
"I have been here for twelve hours and I \nam hungry",
"Lorem ipsumos dolor sit amet consectetur\nadipisicing elit. Magni quisquam",
"I wish I could grasp concepts instantly \nbut it is not possible",
"I would like to eat a big meal and go to\nsleep",
"This is a challenging question and every\nstep hurts"
]

/*
Make this function return the input string wrapped to 40 characters per line. 
This means you'll have to insert a newline \n character after every 40 characters in the input string. 
If the next character after a cut is a space, then do not display it. 

For example with the input:

Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam

the output would be:

Lorem ipsumos dolor sit amet consectetur
adipisicing elit. Magni quisquam

instead of:

Lorem ipsumos dolor sit amet consectetur
 adipisicing elit. Magni quisquam

 even though there is a space before the a in adipisicing
*/
function f(str) {
    if (str[40] === " ") {
        return str.slice(0, 40) + "\n" + str.slice(41, str.length);
    }
    return str.slice(0, 40) + "\n" + str.slice(40, str.length);
   
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

