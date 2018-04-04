function square(x) {
    return x * x;
}

function decrement(x) {
    return x - 1;
}

function duplicateString(x) {
    return x.concat(x);
}
function reverseString(str) {
  var splitString = str.split(""); // var splitString = "hello".split("");
 
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
 
    return reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    
}
// Expand each of the following and get the result of the expression
// #1
square(decrement(square(decrement(3))));
var a = decrement(3);
var b = square(a);
var c = decrement(b);
console.log(square(c));
//result of expression is 9

// #2
decrement(decrement(square(square(3))))
var d = square(3);
var e = square(d);
var f = decrement(e);
console.log(decrement(f));
//result of expression is 79

// #3
duplicateString(reverseString("hello"))
var g = reverseString("hello");
console.log(duplicateString(g));
//result of expression is olleholleh

// #4
reverseString(duplicateString(duplicateString("foo")))
var h = duplicateString("foo");
var i = duplicateString(h);
console.log(reverseString(i));
//result of expression is oofoofoofoof
