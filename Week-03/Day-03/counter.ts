// Create a Counter class
// which has an integer property
// when creating it should have a default value 0 or we can specify it when creating
// we can add(number) to increase the counter's value by a whole number
// or we can add() without parameters just increasing the counter's value by one
// and we can get() the current value as string
// also we can reset() the value to the initial value

class counter{
    _Value: number;

    constructor(Value?: number){
        if(Value){
            this._Value = Value
        } else this._Value = 0;
    }

    add(number?: number){
        if(number){
            this._Value += number;
        }else{
            this._Value +=1;
        }
    }

    get get(){
        return  console.log(this._Value);
    }

    reset(){
        this._Value = 0;
    }
}

let first = new counter;
let  second = new counter;

first.add();
first.get;
first.add();
first.get;
first.add(10);
first.get;
first.reset()
first.get;