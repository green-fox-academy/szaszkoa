'use strict';

export class Anagram {
  public _text: string;

  constructor(text: string) {
    this._text = text;
  }

  isAnagramOf(text: string): boolean {
    let textCollector: string[] = [];
    let textCollector2: string[] = [];
    if (text.length != this._text.length) {
      return false
    } else {
      for (let i: number = 0; i < text.length; i++) {
        textCollector.push(text.charAt(i));
        textCollector2.push(this._text.charAt(i));
      }
      let testText = textCollector.sort().join('');
      let testText2 = textCollector2.sort().join('');
      if (testText === testText2) {
        return true;
      } else {
        return false;
      }
    }
  }
}

let kiscica = new Anagram('kiskutya');
console.log(kiscica.isAnagramOf('kkisutya'));


