'use strict';

import { Plant } from "./plant";

// - The Flower
//   - needs water if its current water amount is less then 5
//   - when watering it the flower can only absorb the 75% of the water
//   - eg. watering with 10 the flower's amount of water should only increase with
//     7.5

export class Flower extends Plant{
    protected _plantType: string;
    protected _waterAbsortion: number;

    constructor(color: string){
        super(color);
        this._plantType = 'Flower';
        this._waterAbsortion = 0.75;
    }

    public watering(water): number{
        return this._waterAmount +=(water*this.absorbWater());
    }


    public absorbWater(): number{
        return this._waterAbsortion;
    }

    public isThirsty(): boolean{
        return this._waterAmount<10 ? true : false
    }

    public getColor(): string{
        return this._color;
    }

}
