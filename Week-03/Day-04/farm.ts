// Reuse your Animal class
// Create a Farm class
//     it has list of Animals
//     it has slots which defines the number of free places for animals
//     breed() -> creates a new animal if there's place for it
//     slaughter() -> removes the least hungry animal

class Animal {
    public _name: string;
    public _hunger: number;
    public _thirst: number;

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
            if (this._hunger + amount >= 100 || this._thirst + amount >= 100) {
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

    constructor(slots: number) {
        this._liveStock = [];
        this._slots = 5;

    }

    //     breed() -> creates a new animal if there's place for it

    breed(animal): void {
        if (this._slots == 0) {
            console.log('Your farm is already at full capacity');
        } else {
            this._liveStock.push(animal);
            this._slots--;
        }
    }

    //     slaughter() -> removes the least hungry animal

    slaughter() {
        let leastHungry: number = 0;
        for (let i: number = 0; i < this._liveStock.length; i++) {
            if (this._liveStock[i]._hunger < this._liveStock[leastHungry]._hunger) {
                leastHungry = i;
            }
        }
        this._liveStock.splice(leastHungry, 1);
        this._slots++;
    };
}

// creating farm
let myFarm = new Farm(5);

//creating livestock
let pig1 = new Animal('pig1');
let pig2 = new Animal('pig2');
let pig3 = new Animal('pig3');
let pig4 = new Animal('pig4');
let pig5 = new Animal('pig5');
let pig6 = new Animal('pig6');

// adding livestock to farm
myFarm.breed(pig1);
myFarm.breed(pig2);
myFarm.breed(pig3);
myFarm.breed(pig4);
myFarm.breed(pig5);

// making the pigs play to select them for slaughter
pig1.play(4);
pig2.play(7);
pig3.play(10);
pig5.play(5);

// getting hungry in all this work, i wan to eat something, and maybe get a horse after.
console.log(myFarm._liveStock);
myFarm.slaughter();
console.log('----------------------------');
console.log(myFarm._liveStock);
console.log('----------------------------');
myFarm.breed(new Animal('turkey1'));
console.log(myFarm);
