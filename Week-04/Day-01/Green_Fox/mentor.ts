'use strict';
import { Person } from './person';

export class Mentor extends Person {
    protected _level: string; //junior / intermediate / senior

    constructor(name?: string, age?: number, gender?: string, Level: string = 'intermediate') {
        super(name, age, gender);
        this._level = Level;
    }

    protected specificIntroduction(): string {
        return ` ${this._level} mentor`;
    };

    protected specificGetGoal(): string {
        return 'Educate brilliant junior software developers';
    };

}

