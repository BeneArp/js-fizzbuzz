// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


// CICLO
// creo un ciclo che raccolga i numeri da 1 a 100
for(let i = 1; i <= 100; i++){
    // stampo in console tutti i numeri raccolti dal ciclo
    // console.log(i);

    // creo una variabile con il contenuto di i
    let valore = i;


    // prendo dal documento il riferimento al contenitore
    const riferimentoContenitore = document.querySelector(".container");

    // creo una variabile per appendere il div nell'html
    let box = document.createElement("div");
    // aggiungo la classe generica al div
    box.classList.add("col-13")





    // CONDIZIONE
    // numeri divisibili sia per 3 che per 5
    if ((i % 3 === 0) && (i % 5 === 0)){
        valore = "FizzBuzz";

        // aggiungo classe specifica per il div con un valore divisibile sia per 3 che per 5
        box.classList.add("divisione-entrambi")

    // numeri divisibili per 3
    }else if(i % 3 === 0){
        valore = "Fizz";

        // aggiungo classe specifica per il div con un valore divisibile per 3
        box.classList.add("divisione-3")

    // numeri divisibili per 5
    }else if (i % 5 === 0){
        valore = "Buzz";
            
        // aggiungo classe specifica per il div con un valore divisibile per 5
        box.classList.add("divisione-5")
    
    }

    // stampo in console il ciclo con i giusti valori attribuiti ad ogni cifra in base alla condizioni precedenti
    console.log(valore);


    // STAMPO IN PAGINA
    // inserisco i valori ricavati dal ciclo dentro il div
    box.append(valore);

    // inserisco il div nell'html
    riferimentoContenitore.append(box);

}
