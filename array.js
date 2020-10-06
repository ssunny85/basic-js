// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['사과', '바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); // 첫번째 데이터 접근
console.log(fruits[fruits.length - 1]); // 마지막 데이터 접근

// 3. Looping over an array
// 3-1. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 3-2. for of
for(let fruit of fruits) {
    console.log(fruit);
}

// 3-3. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('딸기');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift('딸기');
console.log(fruits);

// shift: remove an item from the benigging
fruits.shift();
console.log(fruits);

// note! shift, unshift are slower than pop, push

// splice: remove an item by index position
fruits.push('딸기', '복숭아', '레몬');
console.log(fruits);
fruits.splice(1, 1, '사과', '수박');
console.log(fruits);

// combine two arrays
const fruits2 = ['배', '키위'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index
console.log(fruits.indexOf('사과'));
console.log(fruits.indexOf('수박'));
console.log(fruits.indexOf('배'));
console.log(fruits.includes('사과'));
console.log(fruits.includes('배'));

fruits.push('사과');
console.log(fruits);
console.log(fruits.indexOf('사과'));
console.log(fruits.lastIndexOf('사과')); // 사과 중에 제일 마지막에 위치한 index
