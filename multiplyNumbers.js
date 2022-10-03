// var multiplyNumbers = function(num1, num2) {
//     var sum = 0;
//     for (var i = 0; i < num1; i++) {
//         sum += num2;
//     }
//     return sum;
// }

// refactored
var multiplyNumbers = function(num1, num2) {
    var sum = 0;
    while(num1--) {
        sum += num2;
    }
    return sum;
}

console.log(multiplyNumbers(1,0))
console.log(multiplyNumbers(5,5))
console.log(multiplyNumbers(100,500))