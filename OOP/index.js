// Classes and Objects
// four Pillars of object orientted programming
// OOP is a paradigm that actually tells you to divide your code in field and methods
// fields are properties in this case

class Person{

    constructor(name,age){
        this.age=age
        this.name=name
    }

    getname=()=>{

    }

}

class House{
    constructor(address,price,residents){
        this.address=address
        this.price=price
        this.residents=residents
    }

    getPrice=()=>{
        return this.price
    }

    getAddress=()=>{
        return this.address
    }

    getResident=()=>{
        return this.residents
    }

}

// four pillors of OOP

// Abstraction
// hiding heavy implementation from the users
// Encapsulation=> protecting properties from being accessed out of the class
// no possible way to create private variables, but you can always using underscores if you 
// working in a team=> kinda inform them that this property shouldnt be accessed out of the class
// Inheritence=> reduces redandancy and improve reusability 
// Polymophisim

let person1=new Person('Mike',24)
// console.log(person1.name) => not advisable to acccess properties out of the class