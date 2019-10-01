'use strict';

import { Plant } from "./plant";

// - The Tree
//   - needs water if its current water amount is less then 10
//   - when watering it the tree can only absorb the 40% of the water
//   - eg. watering with 10 the tree's amount of water should only increase with 4

export class Tree extends Plant{
    protected _plantType: string;
    protected _waterAbsortion: number;

    constructor(color?: string){
        super(color);
        this._plantType = 'Tree';
        this._waterAbsortion = 0.4;
    }

    public watering(water): number{
        return this._waterAmount +=(water*this.absorbWater());
    }

    public absorbWater(): number{
        return this._waterAbsortion;
    }

    public isThirsty(): boolean{
        return this._waterAmount<5 ? true : false
    }

    public getColor(): string{
        return this._color;
    }

}