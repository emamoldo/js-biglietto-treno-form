// selezionare gli elementi HTML
let element_Name = document.querySelector('.name input'); // HTML eleemnt di name


let button_genera = document.querySelector('.generate');

console.log(element_Name);

console.log(element_Name.value);


/// creare un event listiner che al click esegue la lettura dei dati e i calcoli per poi alla fine stampare il risultato finale del prezzo


button_genera.addEventListener('click', function(){
    let value_Name = element_Name.value;

    console.log(value_Name);

    // Richedo all'utente i km da percorrere
    const km = Number (prompt("how many km?"));

    // Richiedo all'utente l'età
    const age = Number (prompt("how old are you?"));

    // Calcolo il prezzo standard del biglietto
    let tiket = km * 0.21


    if (age < 18) {
        tiket = tiket - tiket *0.2
    } else if (age > 65) {
        tiket = tiket - tiket *0.4
    }



    console.log(tiket.toFixed(2));

    // stampa innerHTML = ticket.tofixd...
    document.querySelector('#name .value_Name').innerHTML = value_Name;

});