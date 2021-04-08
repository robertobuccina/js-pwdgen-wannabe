
//inserisci nome
var name = prompt ("Inserisci il tuo nome");
//inserisci cognome
var surname = prompt ("Inserisci il tuo cognome");
//inserisci colore preferito
var color = prompt ("Inserisci il tuo colore preferito");

var password = name + surname + color + "21";
//risultato
document.getElementById("Credentials").innerHTML = password;
