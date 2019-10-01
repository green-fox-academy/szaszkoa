'use strict';

export class Plant{
    protected _color: string;
    protected _waterAmount: number;

    constructor(color){
        this._color = color;
        this._waterAmount = 0;
    }

}