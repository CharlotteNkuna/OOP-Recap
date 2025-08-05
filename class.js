//void
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, I'm ${this.name} and I'm ${this.age}`);
    }
}
const p1 = new Person("Alice", 30);
p1.greet();

//with return statement
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        return(`Hi my name is ${this.name}, I am ${this.age} years old.`);
    }
}
let Pers = new Person2("Charlotte", 29)
console.log(Pers.talk());