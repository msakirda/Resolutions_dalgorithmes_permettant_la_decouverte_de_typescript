// Exercice 3 - 
// On a un stock de foin qui contient 800kg de foin.
// On a 2 moutons qui mangent 500g de foin par jour.
// Un des mouton est transformÃ© en gigot au bout de 1000 jours.
// Combien de temps le stock de foin va-t-il durer ?
// MÃªme exercice si le stock est de 20 kg 
// MÃªme exercice si le nombre de mouton est de 5.

export const exo3 = () => {
    console.log('exo3');
};

const stockFoin: number = 800;
const nombreMoutons: number = 2;
const consommationQuotidienne: number = 500;
const dureeStockFoin: number = stockFoin / (nombreMoutons * consommationQuotidienne);
console.log("Le stock de foin durera", dureeStockFoin, "jours");

// Pour le stock 20 kg remplacer ligne 13 le nombre de kilogramme 800-->20
// Pour le nombre de mouton remplacer ligne 14 le nombre 2-->5