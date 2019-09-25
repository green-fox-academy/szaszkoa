// Create a PostIt a class that has
    // a backgroundColor
    // a text on it
    // a textColor
// Create a few example post-it objects:
    // an orange with blue text: "Idea 1"
    // a pink with black text: "Awesome"
    // a yellow with green text: "Superb!"

'use strict';

class PostIt{
    _backgroundColor: string;
    _text: string;
    _textColor: string;

    constructor(backGroundColor: string, text: string, textColor: string){
        this._backgroundColor = backGroundColor;
        this._text = text;
        this._textColor = textColor;

    }

    public set writeText(text: string){
        this._text = text
    }

    public get textWritten(){
        return this._text
    }

}

let PostIt1 = new PostIt('orange', 'idea', 'blue');
let PostIt2 = new PostIt('pink', 'Awesome','black');
let PostIt3 = new PostIt('yelllow', 'Superb', 'green');



console.log(PostIt1.textWritten);
console.log(PostIt2.textWritten);
console.log(PostIt3.textWritten);

PostIt1.writeText = 'bad idea'

console.log(PostIt1.textWritten);