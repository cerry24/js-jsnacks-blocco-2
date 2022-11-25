/**
 * Calcola la somma, la media e il valore massimo dei primi 10 numeri di un array.
 */




const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

let sum = 0;
let average = 0;
let max= 0;

for ( i = 0; i < 10; i++) {

    sum += numbers[i];

    if ( numbers[i] > max) {
        max = numbers[i];
    }
}

average = sum / 10

console.log (sum);
console.log (average);
console.log (max);