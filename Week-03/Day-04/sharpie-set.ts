// Reuse your Sharpie class
// Create SharpieSet class
//     it contains a list of Sharpie
//     countUsable() -> sharpie is usable if it has ink in it
//     removeTrash() -> removes all unusable sharpies


class Sharpie {
    _color: string;
    _width: number;
    _inkAmount: number;

    constructor(color: string, width: number, inkAmount: number = 100) {
        this._color = color;
        this._width = width;
        this._inkAmount = inkAmount;
    };


use(distance: number){
    this._inkAmount -= (distance * this._width);
    console.log('The sharpie has used this amount of ink: ' + (distance * this._width))
}

get inkAmount(){
    return this._inkAmount
}
}

class sharpieSet {
    _sharpie: Sharpie[];

    constructor(){
        this._sharpie = [];
    }

    add(sharpie){
        this._sharpie.push(sharpie)
    }

    //     countUsable() -> sharpie is usable if it has ink in it
    countUsable(){
        let numberOfUsable: number = 0;
        for(let i= 0; i<this._sharpie.length; i++){
            if(this._sharpie[i]._inkAmount != 0){
                numberOfUsable +=1;
            }
        } 
        
        return numberOfUsable;
    }
    //     removeTrash() -> removes all unusable sharpies

    public removeThrash(): void{
        for(let i: number = 0; i<this._sharpie.length; i++){
            if(this._sharpie[i]._inkAmount == 0){
                this._sharpie.splice(i,1);
            };
    };
    console.log('The empty sharpies have been removed');
}

}

let mySharpieSet = new sharpieSet();

console.log(mySharpieSet)
mySharpieSet.add(new Sharpie('red', 2));
mySharpieSet.add(new Sharpie('green', 3));
mySharpieSet.add(new Sharpie('yellow', 2, 0));
mySharpieSet.add(new Sharpie('blue', 5));
mySharpieSet.add(new Sharpie('purple', 1, 0));
console.log(mySharpieSet);
console.log(mySharpieSet.countUsable())
mySharpieSet.removeThrash();
console.log(mySharpieSet)






