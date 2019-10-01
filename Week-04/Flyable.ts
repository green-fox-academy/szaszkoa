'use strict';
interface Flyable {
    land(): any;
    fly(): any;
    takeOff(): any;
}

abstract class Vehicle implements Flyable {
    protected _speed: string;
    protected _passengerCapacity: number;
    protected _weaponry: string;

    constructor(speed, passengerCapacity, weaponry) {
        this._passengerCapacity = passengerCapacity;
        this._speed = speed;
        this._weaponry = weaponry;
    }

    abstract land();
    abstract fly();
    abstract takeOff();
}

abstract class Animal implements Flyable {
    protected _name: string;
    protected _age: number;
    protected _deadliness: string;

    constructor(name, age: number, deadliness) {
        this._name = name;
        this._age = age;
        this._deadliness = deadliness;
    }

    abstract land();
    abstract fly();
    abstract takeOff();
}

class Helicopter extends Vehicle implements Flyable{

    constructor(){
        super('quite fast', 4, 'Gatling guns')
    }
    takeOff(){
        return `The ${this._speed} Helicopter armed with ${this._weaponry}, carrying ${this._passengerCapacity} person, have lifted off.`;
    }

    fly(){
        return 'the helicopter is flying';
    }

    land(){
        return `The ${this._speed} Helicopter armed with ${this._weaponry}, carrying ${this._passengerCapacity} person, have succesfully landed.`;
    }

}

class Bird extends Animal implements Flyable{

    constructor(){
        super('Harpy Eagle', 14, 'Extremely dangerous')
    }

    land(){
        return `The ${this._age} year old ${this._name} has landed, and its ${this._deadliness}.`
    }

    fly(){
        return `The ${this._age} year old ${this._name} is flying, and doing so its ${this._deadliness}`
    }

    takeOff(){
        return `The ${this._age} year old ${this._name} is taking off, and its ${this._deadliness}`

    }
}


let chopper1 = new Helicopter;
let birdy1 = new Bird;

console.log('--------Testing the functions of the flying objects')
console.log('Helicopter ----------------------')
console.log(chopper1.takeOff());
console.log(chopper1.fly());
console.log(chopper1.land());
console.log('Bird ----------------------------')
console.log(birdy1.takeOff());
console.log(birdy1.fly());
console.log(birdy1.land());
console.log('---------End of simulation')
