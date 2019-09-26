// Reuse your Animal class
// Create a Farm class
//     it has list of Animals
//     it has slots which defines the number of free places for animals
//     breed() -> creates a new animal if there's place for it
//     slaughter() -> removes the least hungry animal

class Animal {
    _name: string;
    private _hunger: number;
    private _thirst: number;

    constructor(name?: string) {
        this._hunger = 50;
        this._thirst = 50;
        this._name = name;
    }

    public eat() {
        this._hunger -= 1;
    }
    public drink() {
        this._thirst -= 1;
    }
    public play(amount?: number) {
        if (amount) {
            if (this._hunger + amount >= 100 || this._thirst + amount>= 100) {
                console.log('your pet ' + this._name + ' played itself to death')
            } else {
                this._hunger += amount;
                this._thirst += amount;
            }
        } else {
            if (this._hunger + 1 >= 100 || this._thirst + 1 >= 100) {
                console.log('your pet ' + this._name + ' played itself to death')
            } else {
                this._hunger += 1;
                this._thirst += 1;
            }

        }

    }

}

class Farm {
    public _liveStock: Animal[];
    private _slots: number;

    constructor(slots: number){
        this._liveStock = [];
        this._slots = 5;
    
    }

    addAnimal(animal): void{
        if(this._slots == 0){
            console.log('Your farm is already at full capacity');
        } else {
            this._liveStock.push(animal);
            this._slots--;
        }
    }

    breed(): void{


    };

    slaughter(): void{


    };
}

let myFarm = new Farm(5);

let pig1 = new Animal('pig1');
let pig2 = new Animal('pig2');
let pig3 = new Animal('pig3');
let pig4 = new Animal('pig4');
let pig5 = new Animal('pig5');
let pig6 = new Animal('pig6');

myFarm.addAnimal(pig1);
myFarm.addAnimal(pig2);
myFarm.addAnimal(pig3);
myFarm.addAnimal(pig4);
myFarm.addAnimal(pig5);
myFarm.addAnimal(pig6);

console.log(myFarm._liveStock);