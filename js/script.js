// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


// CICLO
// creo un ciclo che raccolga i numeri da 1 a 100
for(let i = 1; i <= 100; i++){
    // stampo in console tutti i numeri raccolti dal ciclo
    // console.log(i);

    // creo una variabile con il contenuto di i
    let valore = i;


    // CONDIZIONE
    // numeri divisibili sia per 3 che per 5
    if ((i % 3 === 0) && (i % 5 === 0)){
        valore = "FizzBuzz";
    
    // numeri divisibili per 3
    }else if(i % 3 === 0){
        valore = "Fizz";

    // numeri divisibili per 5
    }else if (i % 5 === 0){
        valore = "Buzz";
    }

    // stampo in console il ciclo con i giusti valori attribuiti ad ogni cifra in base alla condizioni precedenti
    console.log(valore);
}
