/*-----------------------------------TRACCIA----------------------------------------------

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
MILESTONE 1
Prepariamo l'HTML ed il CSS per ottenere il risultato grafico che vediamo nell'immagine allegata.
MILESTONE 2
Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.
MILESTONE 3
In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;
#MILESTONE 4
Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!
BONUS
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

----------------------------------------------------------------------------------------*/

//# FUNCTIONS
//function for cell creation
const createCell = (content) => {
    const cell = document.createElement('div');
    cell.classList.add('cell', 'd-flex', 'justify-center', 'align-center');
    cell.append(content);
    cell.addEventListener('click', () => {
        cell.classList.toggle('clicked');
        console.log(content);
    })
    return cell;
}


//1. Pick elements from DOM
const inputDifficulty = document.getElementById('difficulty');
console.log(inputDifficulty);
const buttonPlay = document.getElementById('play');
console.log(buttonPlay);
const targetGrid = document.querySelector('.grid');
console.log(targetGrid);
const targetTitle = document.querySelector('main h1');
console.log(targetTitle);


//2. Add listener to button

buttonPlay.addEventListener('click', () =>{
    console.log('press');

    //3. Reset Grid
    targetGrid.innerText = '';

    //4. Add d-none to title
    targetTitle.classList.add('d-none');

    //5. Add d-flex to grid

    if (targetGrid.classList.contains('d-none')){
        targetGrid.classList.remove('d-none');
        targetGrid.classList.add('d-flex');
    }

    //6. Add cells into grid
    let cell = ''
    for (let i = 1; i <= 100; i++){

        cell = createCell(i);
        targetGrid.appendChild(cell);

    }
});
