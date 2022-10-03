// var sumOfPositive = function(nums) {
//     var sum = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] > 0) {
//             sum += nums[i];
//         } 
//     }
//     return sum;
// }

// Refactored
function sumOfPositive(nums) {
    var sum = 0;
    for (var num of nums) {
        if (num > 0) {
            sum += num;
        }
    }
    return sum;
}

console.log(sumOfPositive([1, -2, 3, 4]));
console.log(sumOfPositive([-2,-5,-10,-1]));
console.log(sumOfPositive([4, 40, -40, -4]));