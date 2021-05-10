// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.

// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
var studente = {
    nome : "Alessandro",
    cognome : "De Santis",
    età : 23
}

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (var key in studente) {
    console.log(studente[key]);
}

// Creare un array di oggetti di studenti.
var studenti = [

    {
        nome : "Alessandro",
        cognome : "De Santis",
        età : 23
    },
    {
        nome : "Mario",
        cognome : "Rossi",
        età : 25
    },
    {
        nome : "Leonardo",
        cognome : "Ferrari",
        età : 22
    },
    {
        nome : "Lorenzo",
        cognome : "Bianchi",
        età : 24
    },

]

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for (i = 0; i < studenti.length; i++) {
    console.log(studenti[i].nome, studenti[i].cognome);
}

// Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.
studenti.push({
    nome : prompt("Nome Studente"),
    cognome : prompt("Cognome Studente"),
    età : prompt("Età Studente")
});

console.log(studenti);