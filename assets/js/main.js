// selezionare gli elementi HTML
let element_Name = document.querySelector('.name input'); // HTML element di name
// console.log(element_Name);
// console.log(element_Name.value);

let button_genera = document.querySelector('.generate');
let element_Km = document.querySelector('.km input'); //per ottenere i km dall'utente
let discountMinor = 0.2;
let discountOver = 0.4;



/// creare un event listiner che al click esegue la lettura dei dati e i calcoli per poi alla fine stampare il risultato finale del prezzo
button_genera.addEventListener('click', function () {
    let value_Name = element_Name.value;
    // console.log(value_Name);

    let km_value = element_Km.value;
    // console.log(km_value);

    let price = element_Km.value * 0.21;
    // console.log(price);

    let carrozza = Math.floor(Math.random() * 5 + 1);
    // console.log(carrozza);

    let codice_Cp = Math.floor(Math.random() * 99999 + 1)
    // console.log(codice_Cp);


    let age = document.getElementById("age_selector");
    let age_range = age.options[age.selectedIndex].text;
    console.log(age_range);

    if (age_range == 'Minorenne') {
        // console.log('minorenni');
        price = price * discountMinor;
        console.log(price);

    } else if (age_range == 'Over 65') {
        // console.log('over 65');
        price = price * discountOver;
        console.log(price);

    } else {
        // console.log('maggiorenni');
        console.log(price);
    }

    // stampa innerHTML = ticket.tofixd...
    document.querySelector('#name .value_Name').innerHTML = value_Name;
    document.querySelector('#km .km_value').innerHTML = km_value;
    document.querySelector('#prezzo .price').innerHTML = price + '€';
    document.querySelector('#carrozza .value_Carrozza').innerHTML = carrozza;
    document.querySelector('#codice .value_Code').innerHTML = codice_Cp;
    // document.querySelector('#offerf .value_Offer').innerHTML = value_Offer;
});


// Offer -> Standard Tiket -> maggiorenni
//       -> 20% Discont Tiket -> minorenni
//       -> 40% Discont Tiket -> over 65

// Price -> print the price for standard tiket, 20% or 40%