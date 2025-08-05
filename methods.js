//functions inside a class that tell the class what to do
class calculator{
    //not using contructors, just function
    add(a, b){ 
        return a + b;
    }
    //method
    multiply(a ,b){
        return a * b;
    }
}
const calc = new calculator();
console.log(calc.add(5, 7));
console.log(calc.multiply(3, 4));

//const calc = new calculator(2, 5);
//console.log(calc.add());
//console.log(calc.multiply())