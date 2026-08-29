interface Employee {
    name: string;
    id: number;
}

interface Admin {
    isAdmin: boolean;
    accessLevel: number;
}

type AdminEmployee = Employee & Admin;

let adminEmployee: AdminEmployee = {
    name: "John Doe",
    id: 1,
    isAdmin: true,
    accessLevel: 1,
};

console.log(adminEmployee.name);
console.log(adminEmployee.id);