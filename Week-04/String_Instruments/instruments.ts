'use strict'

export abstract class Instrument{
    protected _name: string;
    
    constructor(name) {
        this._name = name;
    }

    abstract play(): void
}

export abstract class StringedIntruments extends Instrument{
    protected _numberOfStrings: number;
    
    constructor(name: string, stringNumber: number){
        super(name);
        this._numberOfStrings = stringNumber;
    }

    abstract sound(): void
}

export class ElectricGuitar extends StringedIntruments{

    constructor(stringNumber: number = 6){
        super('Electric Guitar', stringNumber);
    }

    sound(){
        return 'Twang'
    }

    play(){
        console.log(`${this._name}, a ${this._numberOfStrings}-stringed instrument, which goes ${this.sound()}`)
    }
}

export class BassGuitar extends StringedIntruments{
    constructor(stringNumber: number = 4){
        super('BassGuitar', stringNumber);
    }

    sound(){
        return 'Duum-duum-duum';
    }

    play(){
        console.log(`${this._name}, a ${this._numberOfStrings}-stringed indtrument, which goes ${this.sound()}`)
    }
}

export class Violin extends StringedIntruments{
    constructor(stringNumber: number = 4 ){
        super('Violin', stringNumber);
    }

    sound(){
        return 'Screech'
    }

    play(){
        console.log(`${this._name}, a ${this._numberOfStrings}-stringed indtrument, which goes ${this.sound()}`)
    }
}

