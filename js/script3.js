/**
 * Calcola la somma dei primi 10 numeri di un array.
 */




const numbers = [484, 454864, 2, 2959, 45, 49498, 7878, 4, 96, 58, 45, 78, 6]

let sum = 0;

for ( i = 0; i < 10; i++) {

    sum += numbers[i];
}

console.log (sum)