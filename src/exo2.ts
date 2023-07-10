// Exercice 2 - Les tableaux
// Creeer un tableau qui contient les nombres de 1 Ã  10
// 1 - en initialisant une variable
// 2 - en utilisant une boucle
// 3 - en utilisant un new Array, fill et map
// Afficher la longueur du tableau
// Afficher le premier Ã©lÃ©ment du tableau
// Afficher le dernier Ã©lÃ©ment du tableau
// Afficher le 4Ã¨me Ã©lÃ©ment du tableau
// doublez toutes les valeurs du tableau dans une variable tableauBis
// Afficher le tableauBis

export const exo2 = () => {
    console.log('exo2');
};

//  Initialiser le tableau avec les nombres de 1 à 10 (VARIABLE)
let tableau: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Initialiser le tableau vide (BOUCLE)
        // let tableau: number[] = [];

// Utiliser une boucle pour ajouter les nombres de 1 à 10 au tableau
        // for (let i = 1; i <= 10; i++) {
        // tableau.push(i);
        // }

// Utiliser NEW ARRAY, FILL ET MAP pour créer le tableau avec les nombres de 1 à 10
        // let tableau: number[] = Array.from({ length: 10 }, (_, index) => index + 1);

console.log("Longueur du tableau :", tableau.length);
console.log("Premier élément :", tableau[0]);
console.log("Dernier élément :", tableau[tableau.length - 1]);
console.log("4ème élément :", tableau[3]);
let tableauBis: number[] = tableau.map((element) => element * 2);
console.log("tableauBis :", tableauBis);
