//1)
let num = [123, 234, 256, 345, 456, 567, 543, 67, 55, 23, 28, 50]
let newArray = []
for ( let i = 0; i < num.length; i++) {
    const numToString = num[i].toString()
    if (numToString[0] === '2' || numToString[0] === '5') {
        newArray.push(num[i]);
    }
}
alert(newArray)


//2)
const tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];
const sum = {};
for (const tag of tags) {
    if (sum[tag]) {
        sum[tag] += 1;
    } else {
        sum[tag] = 1;
    }
}
console.log(sum);