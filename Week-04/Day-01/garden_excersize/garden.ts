'use strict';

import {Plant} from './plant';
import {Tree} from './tree';
import {Flower} from './flower';

export class Garden{
    protected _flowers: Flower[];
    protected _trees: Tree[];

    constructor(){
        this._flowers = [];
        this._trees = [];
    }

    public addTree(tree: Tree){
        this._trees.push(tree);
    }

    public addFlower(flower: Flower){
        this._flowers.push(flower);
    }

    public watering(water): number{
        let waterPerPlant = water/(this._flowers.length + this._trees.length);
        for(let i = 0; i<waterPerPlant; i++){
            return this._flowers[i].watering(waterPerPlant), this._trees[i].watering(waterPerPlant);
        }
    }

    public howsMyGarden(){
        for(let i: number = 0;0<this._flowers.length;i++){
            if(this._flowers[i].isThirsty()){
                return `The ${this._flowers[i].getColor()} Flower needs water.`;
            } else{
                return `The ${this._flowers[i].getColor()} Flower doesnt need water.`;
            }
        }
        for(let i: number = 0;0<this._trees.length;i++){
            if(this._trees[i].isThirsty()){
                return `The ${this._trees[i].getColor()} Tree needs water.`;
            } else{
                return `The ${this._trees[i].getColor()} Tree doesnt need water.`;
            }
        }
    }

}
