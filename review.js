
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


//