const main = document.createElement('main');
const figure = document.createElement('figure');
const section = document.createElement('section');

figure.innerHTML = '<img src="./img/ristorante-ambrosia.jpg" alt="Restaurante Ambrosia">';

section.innerHTML = `
  <h1>DIVINA CUCINA</h1>
  <p>Nell’antica Roma l’ambrosia era il nettare degli dèi, per questo l’abbiamo scelto come nome del Ristorante Ambrosia dell’Hotel Artemide di Roma.</p>
  <p>Perché non c’è niente di più divino delle pietanze che prepariamo ogni giorno per i nostri ospiti. Con amore, con passione e con dedizione assoluta.</p>
  <p>Divina è la pasta fresca della brigata guidata dallo chef Massimo Gonnella, che nei suoi ravioli, negli gnocchi e nelle fettuccine mette tutta l’arte gastronomica ereditata dalla famiglia.</p>
  <p>Come assolutamente divino è affondare la forchetta nel velluto del suo delizioso tortino al cioccolato, mentre tutta Roma si sdraia ai tuoi piedi da questa terrazza panoramica che domina la Capitale.</p>
`;

main.appendChild(figure);
main.appendChild(section);

export default main;