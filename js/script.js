
// Scrivi un programma che stampi in console i numeri da 1 a 100

/* Key Point

1° Milestone
  1. Creare tutte le variabili che ci servono
  2. Creare un ciclo con l'operatore incrementale
  3. Inserire le condition che stampino in funzione del relativo contenuto

2° Milestone: Appendi un elemento html con il numero o la stringa corretta
  1. Creare una variabile che contenga il box-container
  2. All'interno della precedente variabile inserire un altro div
  3. Dare a quest altro div la classe box

3° Milestone: Applica uno stile differente a seconda del valore dell’indice

*/



// 1. Creare tutte le variabili che ci servono

const limit = 100;

const multiplo3 = 3;
const multiplo3_message = ("Fizz");

const multiplo5 = 5;
const multiplo5_message = ("Buzz");

const multiplo3_5_message = ("FizzBuzz");

let box_container = document.querySelector(".box-container");

console.log(box_container);
// console.log(box_element);


// 2. Creare un ciclo con l'operatore incrementale

for (let n = 1; n < limit; n++) {

  let box_element = document.createElement("div");

  if ((n % multiplo3 === 0) && (n % multiplo5 === 0)){

    box_element.className = "box fizzbuzz";
    box_element.append(multiplo3_5_message)
    
    console.log(n, multiplo3_5_message);


  } else if (!(n % multiplo5)) {

    box_element.className = "box buzz";
    box_element.append(multiplo5_message)

    console.log((n, multiplo5_message));


  } else if (!(n % multiplo3)) {

    box_element.className = "box fizz";
    box_element.append(multiplo3_message)

    console.log(n, multiplo3_message);


  } else{

    box_element.className = "box";
    box_element.append(n)

    console.log(n, n);

  }

  box_container.append(box_element);
}