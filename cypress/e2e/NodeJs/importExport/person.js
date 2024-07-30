class Person{
    constructor(name, age){
        this.name = name 
        this.age = age
    }

    get personName(){
        return this.name
    }

    get personAge(){
        return this.age
    }
}

module.exports = {
    Person:Person
}