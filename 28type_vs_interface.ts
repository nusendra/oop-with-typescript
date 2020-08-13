type Name = {
    name: string
}

type Age = {
    age: number
}

type Employee1 = Name & Age;
type Employee2 = Name | Age;

const employee: Employee1 = {
    name: 'daasd',
    age: 20
}