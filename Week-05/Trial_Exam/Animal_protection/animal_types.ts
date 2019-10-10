'use strict';

import { Animal } from "./animal";

export class Cat extends Animal{

  constructor(name: string = 'Cat'){
    super();
    this._isHealthy = false;
    this._name = name;
    this._healCost = Math.floor(Math.random()*7)
  }

}

export class Dog extends Animal{

  constructor(name: string = 'Dog'){
    super();
    this._isHealthy = false;
    this._name = name;
    this._healCost = Math.floor(Math.random()*6)+1
  }

}

export class Parrot extends Animal{

  constructor(name: string = 'Parrot'){
    super();
    this._isHealthy = false;
    this._name = name;
    this._healCost = Math.floor(Math.random()*7)+4
  }

}


