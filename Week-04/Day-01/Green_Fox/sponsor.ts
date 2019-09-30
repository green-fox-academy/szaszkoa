'use strict';
import { Person } from './person';

export class Sponsor extends Person {
    protected _company: string; 
    protected _hiredStudents: number;

    constructor(name?: string, age?: number, gender?: string, company: string = 'Google') {
        super(name, age, gender);
        this._company = company;
        this._hiredStudents = 0;
    }

    protected specificIntroduction(): string {
        return ` who represents ${this._company} and hired ${this._hiredStudents} students already`;
    };

    protected specificGetGoal(): string {
        return 'Hire brilliant junoir software developers';
    };

    public hire(){
        this._hiredStudents++;
    }

}

