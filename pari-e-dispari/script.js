//Chiedo all'utente di scegliere pari o dispari
const oddOrEven = prompt(`digita pari o dispari`)
console.log(`hai scelto ${oddOrEven}`)
//e il numero da giocare
const userNumber = parseInt(prompt(`inserisci un numero tra 1 e 5`))
console.log(`hai inserito ${userNumber}`)
//genero il pcNumber
const pcNumber = Math.floor(Math.random()*5+ 1)
console.log(`il computer ha generato ${pcNumber}`)
//definisco una funzione con parametri pari o dispari, il numero dell'utente e quello del pc
function oddEvenGame ( x, y) {
  //eseguo la somma tra userNumber e pcNumber
  let sum = x + y;
  //verifico se sum è pari o dispari
  if (sum %2 === 0) {
    console.log(`${userNumber} + ${pcNumber} = ${sum} ed è pari`)
    sum = `pari`
  }
    else{
      console.log(`${userNumber} + ${pcNumber} = ${sum} ed è dispari`)
      sum = `dispari`
    }
    //dopo aver dato un valore in stringa a sum lo confronto con oddOrEven inserito dall'utente e dichiaro il vincitore
    if (sum == oddOrEven) {
      console.log(`Hai vinto`)
    }
      else {
        console.log(`Hai perso`)
      }
    
}

oddEvenGame (userNumber, pcNumber)