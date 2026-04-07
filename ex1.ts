function sayHello() {
    console.log("hello world")
}
sayHello()
sayHello()
sayHello()


function greet(name:string) {
    console.log("Hello"+" " +name)
}
greet("Ali!")
greet("Sara!")
greet("Omar!")


function add(a: number, b: number): number {
    return a + b
}
let result2 = add(5, 3)
console.log(result2)


function isAdult(age:number):boolean {
   return age >=18
}
console.log(isAdult(20))
console.log(isAdult(15))
console.log(isAdult(18))


function double (s : number) {
    return s * 2
}
console.log(double(5))
console.log(double(10))
console.log(double(25))


function getGrade (score: number): string {
    if (score >= 16) return "a"
    else if (score >= 14) return "b"
    else if (score >= 12) return "c"
    else if (score >= 10) return "d"
    return "f";
}
console.log(getGrade(18))
console.log(getGrade(14))
console.log(getGrade(12))
console.log(getGrade(10))

function max(a:number , b:number):number {
    return a>=b? a: b;
}
console.log( max(10,20))
console.log( max(50,30))
console.log( max(7,7))


