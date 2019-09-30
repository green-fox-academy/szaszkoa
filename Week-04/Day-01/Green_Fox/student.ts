'use strict';
import { Person } from './person';

export class Student extends Person {
    protected _previousOrganisation: string;
    protected _skippedDays: number;

    constructor(name?: string, age?: number, gender?: string, previousOrganisation: string = 'The School of Life') {
        super(name, age, gender);
        this._previousOrganisation = previousOrganisation;
        this._skippedDays = 0;
    }

    protected specificIntroduction(): string {
        return ` from ${this._previousOrganisation} who skipped ${this._skippedDays} days from the course already`;
    };

    protected specificGetGoal(): string {
        return 'Be a Software Developer';
    };

    public skipDays(numberOfDays: number){
        this._skippedDays += numberOfDays;
    };

};
