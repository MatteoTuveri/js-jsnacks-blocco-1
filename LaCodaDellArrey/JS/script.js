/* Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri casuali da 1 a 100 per quanti sono gli elementi da inserire.
Stampiamo poi gli ultimi 5 elementi dell'Array
Bonus:
Chiediamo all'utente quanti elementi dell'array dovremo stampare */

let avvia = document.querySelector('.btn');
avvia.addEventListener('click', function () {
    let arrayInput = document.getElementById('array').value;
    let selectionInput = document.getElementById('selection').value;
    const numberList = [];
    const selectionList = [];

    for (let i = 1; i <= parseInt(arrayInput); i++) {
        numberList.push(getRndInteger(1, 100));
    }

    for (let c = 1; c <= parseInt(selectionInput); c++) {
        selectionList.push(numberList[numberList.length - c]);
    }

    console.log(numberList);
    console.log(selectionList);
})


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}