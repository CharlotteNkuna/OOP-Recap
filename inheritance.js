//use extends to create 
class Animal { 
    constructor(name) { 
        this.name = name; 
    } 
    speak() { 
        console.log(`${this.name} makes a sound.`); 
    } 
} 
class Dog 
extends Animal { 
    speak() { 
        console.log(`${this.name} barks.`); 
    } 
} 
const dog = new Dog("Rex"); dog.speak();



//using keywords        
class toy{
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
    showDetails(){
        return`${this.name} is ${this.color}`;
    }
}

class doll extends toy{
    constructor(name, color, dressStyle){
        super(name, color); //inherit constructors from parent class
        this.dressStyle = dressStyle;
    }

    getToys(){
        return`This toy is a ${this.name} doll and is ${this.color}. It is dressed in a ${this.dressStyle}.`;
    }
}
let doll1 = new doll("Barbie", "nude", "princess dress");
console.log(doll1.getToys());
