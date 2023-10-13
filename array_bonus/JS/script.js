/* Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro. */

const first =[];
const second = [];

for (let i = 0; i <= getRndInteger(1,60); i++) {
    first.push(getRndInteger(1, 100));
}

for (let c =0; c <= getRndInteger(1,60); c++) {
    second.push(getRndInteger(1,100));
}

console.log(first);
console.log(second);

if(first.length < second.length){

    for (let a = 0; a<(second.length - first.length + a); a++) {
        first.push(getRndInteger(1, 100));
    }
    console.log(first);
    console.log(second);
}
else if(second.length < first.length){

    for (let p = 0; p <(first.length - second.length + p); p++) {
        second.push(getRndInteger(1, 100));
    }
    console.log(first);
    console.log(second);
    
}
else{
    console.log(first);
    console.log(second);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}