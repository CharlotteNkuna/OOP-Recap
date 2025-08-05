//Static methods belong to the class, not the instance.
class MathUtil { 
    static square(x) { 
        return x * x; 
    } 
} 
console.log(MathUtil.square(5));