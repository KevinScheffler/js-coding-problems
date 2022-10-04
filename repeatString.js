// var repeatString = function(s, n) {
//     var str = '';
//     for (let i = 0; i < n; i++) {
//         str += s;
//     }
//     return str;
// }

// Refactored
function repeatString(s, n) {
    var newStr = "";
    while (n--) {
        newStr += s;
    }
    return newStr;
}

console.log(repeatString("Abc", 3));
console.log(repeatString("B", 5));
console.log(repeatString("hello", 2));