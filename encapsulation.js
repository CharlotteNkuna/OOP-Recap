//Use # to make fields private (only accessible inside the class).
class Counter { 
    #count = 0; increment() { 
        this.#count++; 
        console.log(`Count: ${this.#count}`); 
    } 
} 
const c = new Counter(); c.increment();