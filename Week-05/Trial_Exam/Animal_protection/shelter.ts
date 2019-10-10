'use strict';

import { Dog, Cat, Parrot } from './animal_types';
import { Animal } from './animal';

export class Shelter {
  protected _budget: number;
  protected _animals: Animal[];
  protected _adoptersName: string[];

  constructor() {
    this._budget = 50;
    this._animals = [];
    this._adoptersName = [];
  }

  rescue(animal: Animal): string {
    this._animals.push(animal);
    return `The Shelter currently has ${this._animals.length} rescued animal(s)`;
  }

  addAdopter(name: string): void {
    this._adoptersName.push(name);
  }

  heal(): string {
    for (let i: number = 0; i < this._animals.length; i++) {
      if (this._animals[i].isAdoptable() === false && this._budget >= this._animals[i]._healCost) {
        this._animals[i].heal();
        this._budget -= this._animals[i]._healCost
        return `1 animal have been healed`
      }
    }
    return `No animals were healed.`
  }

  findNewOwner(): any {
    if (this._animals.length === 0 || this._adoptersName.length === 0) {
      console.log('Adoption is not possible')
    } else {
      while (1 === 1) {
        let rand1: number = Math.floor(Math.random() * this._animals.length)
        if (this._animals[rand1].isAdoptable) {
          this._animals.splice(rand1, 1);
          let rand2: number = Math.floor(Math.random() * this._adoptersName.length)
          this._adoptersName.splice(rand2, 1);
        }
        break
      }
    }
  }

  earnDonation(amount: number): string{
    this._budget += amount;
    return `The shelters budget recieved ${amount}€ trough donation`
  }

  toString(): void{
    console.log(`Budget: ${this._budget}€ \r\nThere are ${this._animals.length} animal(s) and ${this._adoptersName.length} potential adopter(s).`)
    this._animals.forEach(element => {
      console.log(element.toString());
    });
  }

}




