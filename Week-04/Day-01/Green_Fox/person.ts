'use strict';

export class Person {
    protected _name: string;
    protected _age: number;
    protected _gender: string;

    constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female') {
        this._name = name,
        this._age = age,
        this._gender = gender
    };

    public introduce(): void {
        console.log(`Hi i'm ${this._name}, a ${this._age} year old ${this._gender}`+ this.specificIntroduction());
    };
    
    protected specificIntroduction(): string {
        return '';
    };

    protected specificGetGoal(): string {
        return 'Live for the moment!';
    };

    public getGoal(): void {
        console.log(`My goal is: ${this.specificGetGoal()}`);
    };


}


