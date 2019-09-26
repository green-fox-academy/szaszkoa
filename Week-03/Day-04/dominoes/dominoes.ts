import { Domino } from "./domino";

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2, 4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value);
    });
}

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

// print(dominoes);
// console.log(dominoes[2].values[1])

// setting the first domino in the snake

let dominoSnake: Domino[] = [];
dominoSnake.push(dominoes[4])

// starting the domino snake

    for (let j = 0; j < dominoes.length; j++) {
        for (let i = 0; i < dominoes.length; i++) {
            if (dominoSnake[j].values[1] == dominoes[i].values[0]) {
                dominoSnake.push(dominoes[i])
            }
        }

    }

console.log(dominoSnake)


