// without class
let user1 = { firstName:"John", lastName:"Doe", age: 30 };
let user2 = { firstName:"Jane", lastName:"Smith", age: 25 };

function greetUser(user:{firstName: string, lastName: string}) {
    return `Hello, ${user.firstName} ${user.lastName}`;
}

function getUserAge (user: {age: number}) {
    return user.age;
}

console.log(greetUser(user1)) ;
console.log(getUserAge(user1));