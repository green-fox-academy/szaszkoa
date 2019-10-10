'use strict';
import { Cat, Dog, Parrot } from './animal_types'
import { Shelter } from './shelter'

let cat = new Cat('Maszat');
let dog = new Dog('Bodri');
let parrot = new Parrot('Csipike');
let shelter = new Shelter;
shelter.rescue(cat)
shelter.rescue(dog)
shelter.rescue(parrot);
shelter.heal();
shelter.addAdopter('Tamas')
shelter.addAdopter('Kelemen')
shelter.earnDonation(50)
console.log(shelter)
shelter.toString()
