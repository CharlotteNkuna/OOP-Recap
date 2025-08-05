//Control access to properties:
class User { 
    constructor(name) { 
        this._name = name; 
    } 
    get name() { 
        return this._name.toUpperCase(); 
    } 
    set name(newName) { 
        if (newName.length < 3) {
             console.log("Name is too short."); 
            } 
            else { this._name = newName; } 
        } 
    } 
    const user = new User("John"); 
    console.log(user.name); 
    user.name = "Al"; 
    user.name = "Alice"; 
    console.log(user.name);