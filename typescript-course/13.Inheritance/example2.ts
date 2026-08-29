// with inheritance
class Person {
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

class User extends Person {
    constructor(firstName: string, lastName: string, age: number, role: string) {
        super(firstName, lastName, age)
    }
}

class Admin extends Person {
    role: string;
    constructor(firstName: string, lastName: string, age: number, role: string) {
        super(firstName, lastName, age)
        this.role = role;
    }
    greet(): string {
        return `Hello, ${this.firstName} ${this.lastName} (${this.role})`;
    }
    manageusers() {
        return `Managing users ${this.role}`;
    }
}

