'use strict'

export abstract class Instrument{
    protected _name: string;
    
    constructor(name) {
        this._name = name;
    }

    play(): void{}
}

export abstract class StringedIntruments extends Instrument{
    protected _numberOfStrings: number;
    
    constructor(name?: string, stringNumber?: number){
        super(name);
        this._numberOfStrings = stringNumber;
    }

    sound(){
        return this.play();
    }
}

export class ElectricGuitar extends StringedIntruments{
    protected _sound: string;

    constructor(stringNumber: number = 6, name?: string, ){
        super();
        this._name = 'Electric Guitar'
        this._sound = 'Twang'
        this._numberOfStrings = stringNumber;
    }

    play(){
        console.log(`${this._name}, a ${this._numberOfStrings}-stringed instrument, which goes ${this._sound}`)
    }
}

export class BassGuitar extends StringedIntruments{
    protected _sound: string;

    constructor(stringNumber: number = 4, name?: string, ){
        super();
        this._name = 'Bass Guitar'
        this._sound = 'Duum-duum-duum'
        this._numberOfStrings = stringNumber;
    }

    play(){
        console.log(`${this._name}, a ${this._numberOfStrings}-stringed indtrument, which goes ${this._sound}`)
    }
}

export class Violin extends StringedIntruments{
    protected _sound: string;

    constructor(stringNumber: number = 4, name?: string, ){
        super();
        this._name = 'Violin'
        this._sound = 'Screech'
        this._numberOfStrings = stringNumber;
    }

    play(){
        console.log(`${this._name}, a ${this._numberOfStrings}-stringed indtrument, which goes ${this._sound}`)
    }
}

