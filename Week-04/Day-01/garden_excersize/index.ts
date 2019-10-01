'use strict';

/* TODO: second Flower doesnt get water
* method doesnt care if flower is thirsty or not
* howsMyGarden does not iterate trough all the plants in the garden, only gets the first one
*/

import {Plant} from './plant';
import {Tree} from './tree';
import {Flower} from './flower';
import { Garden } from './garden';

let newFlower = new Flower ('Yellow');
let newFlower2 = new Flower ('Green');
let newTree = new Tree ('Purple');

let newGarden = new Garden;
newGarden.addFlower(newFlower);
newGarden.addFlower(newFlower2);
newGarden.addTree(newTree)
// console.log(newGarden.howsMyGarden())
newGarden.watering(300);
console.log(newGarden)

// let newTree = new Tree ('Green');
// console.log(newTree);
// newTree.watering(100);
// console.log(newTree);
