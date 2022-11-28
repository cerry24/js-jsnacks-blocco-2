/**
 *
 * Generatore di persone fittizie casuali:
 * Il Grande Gatsby ha una lista di nomi e una lista di cognomi, da queste vuole generare una falsa lista di invitati con nome e cognome.
 *
 */




const names = ['Michela', 'Giuseppina', 'Taylor','Donna', 'Marsha', 'Fabio', 'Roberto'];
const lastNames = ['Cappelletti', 'Jager', 'Porcinelli' , 'Buffetti' , 'Forghieri', 'Papagni', 'Marazzini'];

const guests = [];

// Math.floor ( math.random() * (max - min + 1) + min )



for ( let i = 0; i < Math.ceil(Math.random() * 15) + 4; i++ ) {
    const randomNamesIndex = Math.floor ( Math.random() * (names.length) );
    const randomLastNamesIndex = Math.floor ( Math.random() * (lastNames.length) );
    const randomName = names[randomNamesIndex] + " " + lastNames[randomLastNamesIndex];

    guests.push(randomName);
}

console.log(guests);


