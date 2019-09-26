// Create a Station and a Car classes
// Station
//     gasAmount
//     refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
// Car
//     gasAmount
//     capacity
//     create constructor for Car where:
//         initialize gasAmount -> 0
//         initialize capacity -> 100

class Station{
    public _gasAmount: number
    public _name: string
    constructor(name: string, gasAmount?: number){
        this._name = name
        if(gasAmount){
            this._gasAmount = gasAmount
        } else {
            this._gasAmount = 2500;
        }
    }
//     refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
    refill(car: Car){
        car.fill();
        this._gasAmount -= car._capacity;
    }

}

class Car{
    public _name: string;
    public _gasAmount: number;
    public _capacity: number;

    constructor(name){
        this._name = name
        this._gasAmount = 0;
        this._capacity = 100;
    }

    fill(){
        this._gasAmount += this._capacity;
    }

}

let station1 = new Station('MOL')
let car1 = new Car('VolksWagen');
let car2 = new Car('Volvo')

console.log('The '+station1._name+' stations available fuel amount is: '+station1._gasAmount);
console.log('The '+car1._name+' car\'s fuel level is '+car1._gasAmount);

station1.refill(car1);

console.log('The '+station1._name+' stations available fuel amount is: '+station1._gasAmount);
console.log('The '+car1._name+' car\'s fuel level is '+car1._gasAmount);

station1.refill(car2)

console.log('The '+station1._name+' stations available fuel amount is: '+station1._gasAmount);
console.log('The '+car2._name+' car\'s fuel level is '+car2._gasAmount);
