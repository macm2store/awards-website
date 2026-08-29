//with access modifiers
class User{
    private name: string;
    private age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    public getName(){
        return this.name;
    }
    public getAge(){
        return this.age;
    }

    public setName(name: string){
        this.name = name;
    }
    public setAge(age: number){
        if (age > 0){
            this.age = age;
        }
    }
    
} 

const user = new User("John", 30);
console.log(user.getName());
console.log(user.getAge());

user.setName("Jane");
user.setAge(25);
console.log(user.getName());
console.log(user.getAge());