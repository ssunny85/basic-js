// 01. make a string out of an array
const fruits1 = ['apple', 'banana', 'orange'];
const result1 = fruits1.join();
console.log(result1);

// 02. make an array out of a string
const fruits2 = 'apple, banana, orange';
const result2 = fruits2.split(',');
console.log(result2);

// 03. make this array look like this: [5, 4, 3, 2, 1]
const array3 = [1, 2, 3, 4, 5];
const result3 = array3.reverse(); // reverse 메소드는 배열 자체를 변경
console.log(result3);
console.log(array3);

// 04. make new array without the first two elements
const array4 = [1, 2, 3, 4, 5];
const result4 = array4.slice(2); // slice 메소드는 새로운 배열을 return
console.log(result4);
console.log(array4);

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// 05. find a student with the score 90
const result5 = students.find(student => student.score === 90);
console.log(result5);

// 06. make an array of enrolled students
const result6 = students.filter(student => student.enrolled);
console.log(result6);

// 07. make an array containing only the students scores result should be: [45, 80, 90, 66, 88]
const result7 = students.map(student => student.score);
console.log(result7);

// 08. check if there is a student with the score lower than 50
const result8 = students.some(student => student.score < 50);
console.log(result8);

// 09. compute students average score
const result9 = students.reduce((prev, curr) => prev + curr.score, 0);
console.log(result9 / students.length);

// 10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
const result10 = students
    .map(student => student.score)
    .join();
console.log(result10);

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
const result11 = students
    .map(student => student.score)
    .sort((a, b) => a - b)
    .join();
console.log(result11);

