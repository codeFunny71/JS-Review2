
/*
    Marcus Absher
    1/25/2019
    http://mabsher.greenriverdev.com/328/JS-Review/review.html
    https://github.com/codeFunny71/JS-Review2
*/
//1. Write a function objEquals that takes two objects and
//   returns true only if they have the same properties and property values.

//create function ojbEquals

function objEquals(first, second) {
    if (first === second) return true;

    if (first == null || typeof first != "object" ||
        second == null || typeof second != "object") return false;

    let keysFirst = Object.keys(first), keysSecond = Object.keys(second);

    if (keysFirst.length != keysSecond.length) return false;

    for (let key of keysFirst) {
        if (!keysSecond.includes(key) || !objEquals(first[key], second[key])) return false;
    }

    return true;
}

//testing objEquals function

var obj = {here: {is: "an"}, object: 2};

console.log("Object Equals Test:");

console.log(objEquals(obj, obj));
// → true

console.log(objEquals(obj, {here: 1, object: 2}));
// → false

console.log(objEquals(obj, {here: {is: "an"}, object: 2}));
// → true

console.log(objEquals(obj, {here: {is: "an"}, object: 0}));
// → false

console.log(objEquals(obj, {here: {is: "another"}, object: 2}));
// → false

console.log(objEquals(obj, {here: {isnt: "an"}, object: 2}));
// → false

console.log(objEquals(obj, {here: {is: "an", deep: {poop: null, value: -1}}, object: 2}));
// → false


//2.Write a method flatten() can take an array of arrays
//  and return a single array that has all the elements
//  of the original arrays.
//  const flatten = array => array.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);
//create function flatten()

const flatten = (arrayOfArrays)=>{
    return arrayOfArrays.reduce((flattenedPiece, newPiece) =>
        flattenedPiece.concat(Array.isArray(newPiece) ? flatten(newPiece) : newPiece), []);
}

var arr = [[1, 2, 3], [4, 5], [6]];
console.log("Flatten Test:");
console.log(flatten(arr));

// → [1, 2, 3, 4, 5, 6]