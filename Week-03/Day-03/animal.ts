// Create an Animal class
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// // Every animal can play() which increases both by one

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

let Horse = new Animal('Zsuzsa');
let Dog = new Animal('Kajla');
let Frog = new Animal('HipnoToad');

console.log(Frog);
Frog.eat;
Frog.drink;
Frog.play(1);
console.log(Frog);

