// Create Sharpie class
// We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
// When creating one, we need to specify the color and the width
// Every sharpie is created with a default 100 as inkAmount
// We can use() the sharpie objects
// which decreases inkAmount

class Sharpie{
    _color: string;
    _width: number;
    _inkAmount: number;

    constructor(color: string, width: number){
        this._color = color;
        this._width = width;
        this._inkAmount = 100;
    }

    use(distance: number){
        this._inkAmount -= (distance*this._width);
        console.log('The sharpie has used this amount of ink: '+(distance*this._width))
    }

    get inkAmount(){
        return console.log(this._inkAmount)
    }
}

let filctoll1 = new Sharpie('red', 2)
filctoll1.inkAmount;
filctoll1.use(10);
filctoll1.inkAmount;