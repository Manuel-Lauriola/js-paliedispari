//Chiedo all'utente di scegliere pari o dispari
const oddOrEven = prompt(`digita pari o dispari`)
//e il numero da giocare
const userNumber = parseInt(prompt(`inserisci un numero tra 1 e 5`))
// console.log(userNumber)
//genero il pcNumber
const pcNumber = Math.floor(Math.random()*5+ 1)
// console.log(pcNumber)
//definisco una funzione con parametri pari o dispari, il numero dell'utente e quello del pc
function oddEvenGame (evenOrOdd, x, y) {
  //eseguo la somma tra userNumber e pcNumber
  let sum = x + y;
  //verifico se sum è pari o dispari
  if (sum %2 === 0) {
    console.log(`${userNumber} + ${pcNumber} = ${sum} è pari`)
    sum = `pari`
  }
    else{
      console.log(`${userNumber} + ${pcNumber} = ${sum} è dispari`)
      sum = `dispari`
    }
    
}

oddEvenGame (oddOrEven, userNumber, pcNumber)