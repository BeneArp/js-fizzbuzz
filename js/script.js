// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


// creo un ciclo che raccolga i numeri da 1 a 100
for(let i = 1; i <= 100; i++){
    // stampo in console tutti i numeri raccolti dal ciclo
    // console.log(i);

    // creo una variabile con il contenuto di i
    let valore = i;

    // condizione
    if(i % 3 === 0){
        valore = "Fizz";

    }else if (i % 5 === 0){
        valore = "Buzz";
    }
    else if ((i % 3 === 0) && (i % 5 === 0)){
        valore = "FizzBuzz";
    }

    console.log(valore);
}