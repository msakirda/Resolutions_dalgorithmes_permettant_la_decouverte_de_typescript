// Exercice 4 - Les Ã©lections
// ```typescript
// const candidats = ["lepeigne", "melangeons", "macreau", "varousselle", "paicvaissrelle", "poutoutout", "hidalgogo"];
// const votes = [];
// ```

// 1. Remplir le tableau de votes du premier tour avec 1000 votes alÃ©atoires
// Afficher le nombre de votes pour chaque candidat
// Afficher le nom du candidat qui a le plus de votes
// Afficher les noms des candidats qui passent au deuxiÃ¨me tour

// 2. Nous ne sommes plus en dÃ©mocratie, paicvaissrelle rachÃ¨te des voix Ã  lepeigne:
// 10â‚¬ par voix, Elle a un budget de 1000â‚¬, combien de voix peut-elle acheter ?

// 3. Simulez le deuxiÃ¨me tour avec 1000 votes alÃ©atoires entre les deux premiers candidats
// N'oubliez pas, paicvaissrelle peut acheter des voix aux electeurs de lepeigne s'il lui reste de l'argent.
// Si lepeigne passe au deuxiÃ¨me tour avec paicvaissrelle, elle lui pique des voix.
// Si lepeigne ne pas au deuxiÃ¨me tour, elle dÃ©marre avec, au maximum les voix de lepeigne au premier tour.

// 4. Simulez les votes avec ce tableau de sondage :
// ``` typescript
// const sondage = [
    // { candidat: "lepeigne", voix: 21 },
    // { candidat: "melangeons", voix: 19 },
    // { candidat: "macreau", voix: 21 },
    // { candidat: "varousselle", voix: 3 },
    // { candidat: "paicvaissrelle", voix: 1 },
    // { candidat: "poutoutout", voix: 1 },
    // { candidat: "hidalgogo", voix: 1 },
// ];

export const exo4 = () => {
    console.log('exo4');
};

const candidats = ["lepeigne", "melangeons", "macreau", "varousselle", "paicvaissrelle", "poutoutout", "hidalgogo"];
const votes: string[] = [];
for (let i = 0; i < 1000; i++) {
  const randomIndex = Math.floor(Math.random() * candidats.length);
  votes.push(candidats[randomIndex]);
}
const votesParCandidat: { [key: string]: number } = {};
for (const candidat of candidats) {
  votesParCandidat[candidat] = votes.filter((vote) => vote === candidat).length;
}
console.log("Nombre de votes pour chaque candidat :", votesParCandidat);
const candidatPlusVotes = Object.keys(votesParCandidat).reduce((a, b) => (votesParCandidat[a] > votesParCandidat[b] ? a : b));
console.log("Candidat avec le plus de votes :", candidatPlusVotes);
const candidatsDeuxiemeTour = Object.keys(votesParCandidat).filter((candidat) => votesParCandidat[candidat] > 0.1 * votes.length);
console.log("Candidats passant au deuxième tour :", candidatsDeuxiemeTour);

const prixAchatVoix: number = 10;
const budget: number = 1000;

const nombreVoixAchetees: number = Math.floor(budget / prixAchatVoix);
console.log("Nombre de voix que paicvaissrelle peut acheter :", nombreVoixAchetees);

const candidat1: string = candidatsDeuxiemeTour[0];
const candidat2: string = candidatsDeuxiemeTour[1];
const votesDeuxiemeTour: string[] = [];

for (let i = 0; i < 1000; i++) {
  const randomIndex = Math.random();
  const vote =
    randomIndex < votesParCandidat[candidat1] / (votesParCandidat[candidat1] + votesParCandidat[candidat2])
      ? candidat1
      : candidat2;
  votesDeuxiemeTour.push(vote);
}
if (candidatsDeuxiemeTour.includes("lepeigne") && budget > 0) {
  const voixAchetable = Math.min(nombreVoixAchetees, votesParCandidat["lepeigne"]);
  for (let i = 0; i < voixAchetable; i++) {
    votesDeuxiemeTour[i] = "paicvaissrelle";
  }
}

const votesDeuxiemeTourParCandidat: { [key: string]: number } = {};

for (const candidat of [candidat1, candidat2]) {
  votesDeuxiemeTourParCandidat[candidat] = votesDeuxiemeTour.filter((vote) => vote === candidat).length;
}

console.log("Résultats du deuxième tour :", votesDeuxiemeTourParCandidat);

const sondage = [
    { candidat: "lepeigne", voix: 21 },
    { candidat: "melangeons", voix: 19 },
    { candidat: "macreau", voix: 21 },
    { candidat: "varousselle", voix: 3 },
    { candidat: "paicvaissrelle", voix: 1 },
    { candidat: "poutoutout", voix: 1 },
    { candidat: "hidalgogo", voix: 1 },
  ];
  
  const sondageVotes: string[] = [];
  
  for (const vote of sondage) {
    for (let i = 0; i < vote.voix; i++) {
      sondageVotes.push(vote.candidat);
    }
  }
  
  console.log("Votes du sondage :", sondageVotes);
  