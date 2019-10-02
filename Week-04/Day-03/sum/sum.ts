'use strict';

export class Sum{
  _numberList = [];

  sumAll(){
    let collector: number = 0;
    if(this._numberList.length == 0){
      return 0;
    } else {
      for(let i: number = 0; i < this._numberList.length; ++i){
        collector += this._numberList[i];
      }
      return collector;
    }
  }

}

let testlist = new Sum
testlist._numberList = [5];
console.log(testlist.sumAll())

