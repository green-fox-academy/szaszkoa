'use strict';

export abstract class Animal {
    protected _name: string;
    protected _age: number;

    /* animals should have the following fileds as well:
    *_type, _mood, _health
    */

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    abstract getName()
    abstract breed()

    /* animals should have the following methods
    * play(), eat(), drink(), sleep() etc
    */
}

export class Mammal extends Animal {
    constructor(name, age?) {
        super(name, age);
    }

    getName() {
        return this._name
    }

    breed() {
        return 'pushing out miniature versions'
    }
}

export class Reptile extends Animal {
    constructor(name, age?) {
        super(name, age);
    }

    getName() {
        return this._name
    }

    breed() {
        return 'laying eggs'
    }
}

export class Bird extends Animal {
    constructor(name, age?) {
        super(name, age);
    }

    getName() {
        return this._name
    }

    breed() {
        return 'laying eggs'
    }
}
