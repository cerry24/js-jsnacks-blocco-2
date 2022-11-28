// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari




const numbers = [];

for ( let i = 0; i < 5; i++ ) {
    const randomNumber = Math.floor ( Math.random() * (1000 - 1 + 1) + 1);

    numbers.push(randomNumber);
}

console.log(numbers);


let sum = 0;

for ( let i = 0; i < numbers.length; i++ ) {
    if ( i % 2 === 1) {
        sum += numbers[i];
    }
}

console.log(sum);