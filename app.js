function combine(input1, input2, resultType) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(34, 40, 'as-number');
console.log(combinedAges);
var combinedStringAges = combine('34', ' ', 'as-number');
console.log(combinedAges);
var combinedNames = combine('Zack', 'Charley', 'as-string');
console.log(combinedNames);
