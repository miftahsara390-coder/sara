"use strict";
function sayHello() {
    console.log("hello world");
}
sayHello();
sayHello();
sayHello();
function greet(name) {
    console.log("Hello" + " " + name);
}
greet("Ali!");
greet("Sara!");
greet("Omar!");
function add(a, b) {
    return a + b;
}
let result2 = add(5, 3);
console.log(result2);
function isAdult(age) {
    return age >= 18;
}
console.log(isAdult(20));
console.log(isAdult(15));
console.log(isAdult(18));
function double(s) {
    return s * 2;
}
console.log(double(5));
console.log(double(10));
console.log(double(25));
function getGrade(score) {
    if (score >= 16)
        return "a";
    else if (score >= 14)
        return "b";
    else if (score >= 12)
        return "c";
    else if (score >= 10)
        return "d";
    return "f";
}
console.log(getGrade(18));
console.log(getGrade(14));
console.log(getGrade(12));
console.log(getGrade(10));
function max(a, b) {
    return a >= b ? a : b;
}
console.log(max(10, 20));
console.log(max(50, 30));
console.log(max(7, 7));
let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(a); //10
console.log(b); //20
