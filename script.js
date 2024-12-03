
const person1 = {
    firstName: 'Ema',
    lastName: "Marroquin",
    age: 21,
    isEmployed: true,
    sayHello: function(){
        console.log("Hola soy Ema!")
    },
    eat: function(){
        console.log("I'm eating a lot of pizzas")
    },
};

const person2 = {
    firstName: 'Diego',
    lastName: "Carra",
    age: 33,
    isEmployed: false,
    sayHello: function(){
        console.log("Hey, Im Diego!")
    },
    eat: function(){
        console.log("I'm eating a lot of HotDogs")
    },
}

person1.eat();
person2.eat();