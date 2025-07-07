//chiedo all'utente di inserire una parola e la salvo nella variabile userWord
const userWord = prompt(`Inserisci una parola e verificherò se essa è palindroma per te`).toLowerCase()
//definisco la funzione che mi verificherà se la parola è palindroma
//definisco una funzione con parametro word
function palindrome (word) {
  //definisco l'array charachters che conterrà i caratteri di word
  let characters = word.split("")
  //applico la funzione .reverse
  let reversedWord = characters.reverse()
  //unisco l'array generato in una stringa
  reversedWord = reversedWord.join("")
  //ora che ho la parola al contrario, confrontabile con userWord la metto a confronto
  if ( reversedWord == word) {
    console.log(`la parola ${word} è palindroma`)
  }
    else {
      console.log(`la parola ${word} non è palindroma`)
    }
}


palindrome (userWord)
