//autometically called whgen you create an object from a class
class car {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }
    //method
    displayInfo(){
        console.log(`${this.brand} was made in ${this.year}`)
    }
}
const myCar = new car("Toyota", 2021);
myCar.displayInfo();