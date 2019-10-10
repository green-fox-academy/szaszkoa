'use strict'

export abstract class Animal{
  protected _ownerName: string;
  protected _name: string;
  protected _isHealthy: boolean;
  public _healCost: number;

  heal(){
    this._isHealthy = true;
  }

  isAdoptable(): boolean{
    if(this._isHealthy){
      return true;
    } else {
      return false;
    }
  }

  toString(): string{
    if(this._isHealthy){
      return `${this._name} is healthy, and adoptable`
    } else {
      return `${this._name} is not healthy, healing would cost ${this._healCost}€, and is not adoptable`
    }
  }

}