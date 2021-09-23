//document.getElementById("count-el").innerText = 5

let firstBatch = 5;
let secondBatch = 6;

//initialize the count
//when incremnet is click increase the count
//change the count-el in the html to reflect the new count

// let count = 0;
// count = count + 1;
// console.log(count);

// function increment() {
//     console.log("the button was clicked");
// }

//function

// function print() {
//     console.log(42);
   
// }

// print();

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// function totalLaps() {
//     let totalLaps = lap1 + lap2 + lap3;
//     console.log(totalLaps);
// }
// totalLaps();

let count = 0;

let countEl = document.getElementById("count-el"); //grab the count-el element, store it in a count-el variable
// console.log(countEl);
let saveEl = document.getElementById("save-el");

let ds = " - ";

function increment() {
    count = count += 1;
    countEl.innerText = count; //set count-el innerText to count
    console.log(count);
}

function save() {
    let cont = count + " " + ds;
    saveEl.textContent += cont;
    countEl.textContent = 0;
    count = 0;
}

