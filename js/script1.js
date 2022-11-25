/**
 * Crea un array vuoto.
Chiedi per 6 volte all'utente di inserire un numero,
se è dispari inseriscilo nell'array.
 */



const numbers = [];

for ( i = 0; i < 6; i++ ) {
    const userNumber = parseInt (prompt ('inserisci un altro numero'));
    if( userNumber % 2 === 1 ) {
        numbers.push(userNumber);
    }
}

console.log(numbers);