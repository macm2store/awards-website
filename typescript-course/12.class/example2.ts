// with class
class User {
    firstName: string;
    lastName: string;
    age: number;
    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

   greet(){
    return `Hello, ${this.firstName} ${this.lastName}`
   } 

   getAge(){
    return this.age
   }
}

// creating instance (instance or object of a class)
let users1 = new User("John", "Doe", 30);
let users2 = new User("Jane", "Smith", 25);

console.log(users1.greet());
console.log(users2.greet());
console.log(users1.getAge());
console.log(users2.getAge());