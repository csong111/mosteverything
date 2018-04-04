var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  [[1,2,3,4], [1,3,4,5]],
  [2, 3],
  [[4,5,6,7], [4,5,6,7]],
  [[1,3,5,7], [3,4,6,9]],
  [[2,4,6,8], [2,5,7,9]],
]

let outputs = [
    [2,5],
    undefined,
    [],
    [1,5,7,4,6,9],
    [4,6,8,5,7,9]
]

/*
Make this function return the elements that are unique to array1 and array2.
If there are no unique elements return an empty array.
If the inputs are anything other than arrays, return undefined. 
For example:

uniqueElements([0,1,2,3], [1,3,4,5]); // [0,4,5]
uniqueElements([1,2,3], [1,2,3]); // []
uniqueElements(2,3); // undefined, not arrays
*/
function getUniques(arr1, arr2) {
    var newArr = []
    for (i=0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            newArr.push(arr1[i]);
        }
    }
    return newArr;
}

function f(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return undefined;
    }
    var newArr = []
    // for (i=0; i < arr1.length; i++) {
    //     if (!arr2.includes(arr1[i])) {
    //         newArr.push(arr1[i]);
    //     }
    // }
    // for (i=0; i < arr2.length; i++) {
    //     if (!arr1.includes(arr2[i])) {
    //         newArr.push(arr2[i]);
    //     }
    // }
    newArr = newArr.concat(getUniques(arr1, arr2));
    newArr = newArr.concat(getUniques(arr2, arr1));
    return newArr;
}

function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var input = inputs[i];
    var actual = f(input[0], input[1]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

