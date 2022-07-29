type Combo = number | string;
type desRes = 'as-number' | 'as-text'

function combine(
    input1: Combo,
    input2: Combo,
    resultType: desRes
) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number') {
        result = +input1 + +input2
    } else {
        result = input1.toString() + input2.toString()
    }
    return result
}

const combinedAges = combine(34, 40, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('34', ' ', 'as-number');
console.log(combinedAges);


const combinedNames = combine('Zack', 'Charley', 'as-text')
console.log(combinedNames);