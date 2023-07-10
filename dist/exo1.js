"use strict";
//## Exercice 1 - Les variables
//creeer une variable a qui contient le nombre 5
//creeer une variable b qui contient le nombre 1
//afficher deux logs pour indiquer si ces variables sont supÃ©rieures Ã  PI
//et qui est la plus grande des deux valeurs (utiliser une ternaire)
Object.defineProperty(exports, "__esModule", { value: true });
exports.exo1 = void 0;
const exo1 = () => {
    console.log('exo1');
};
exports.exo1 = exo1;
let a = 5;
let b = 1;
console.log("a est supérieur à PI :", a > Math.PI);
console.log("b est supérieur à PI :", b > Math.PI);
let plusGrandeValeur = (a > b) ? a : b;
console.log("La plus grande valeur est :", plusGrandeValeur);
