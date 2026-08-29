//with static function - no need of creating objects.
class User {
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    static isAdult(age:number){
        return age >= 18;
    }
}

console.log(User.isAdult(30),'30');
