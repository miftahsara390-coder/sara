"use strict";
let student = {
    name: "sara",
    age: "20",
    city: "fquih ban salah",
    isActive: true,
    hobbies: ["basquette , cooking , vol de drone "],
    address: {
        street: "20 main st",
        zip: "23200",
        country: "maroc",
    }
};
console.log(student.name);
console.log(student.address.country);
console.log(student.hobbies[1]);
student.email = "miftahsara390@gmail.com";
student.city = "rabet";
delete student.isActive;
console.log(student);
let numbers = [10, 20, 30, 40, 50];
numbers.push(60);
numbers.unshift(5);
numbers.pop();
numbers.shift();
console.log(numbers.includes(30));
console.log(numbers.length);
let prices = { bread: 5, milk: 12, eggs: 15, rice: 25, sugar: 10 };
const students = [
    { name: "sara", age: 18, grade: 12 },
    { name: "marwa", age: 17, grade: 9 },
    { name: "younes", age: 18, grade: 14 },
    { name: "hajar", age: 17, grade: 11 },
    { name: "zinab", age: 18, grade: 8 },
];
for (let student of students) {
    console.log(student.name + ":" + student.grade);
}
;
let passed = students.filter((s) => s.grade >= 10);
console.log(passed);
