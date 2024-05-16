// 1 creare tabella 76 celle

const creaCelle = (celle) => {
  const selezioneDivTabella = document.getElementById("tabella");
  for (let index = 0; index < celle; index++) {
    // ad ogni iterazione aggiungiamo un div per la tabella
    const divCelle = document.createElement("div");
    //assegno una classe alle celle
    divCelle.classList.add("cella");
    //ad ogni cella aggiungo il suo numero corrispondente in un h3
    const nomeCella = document.createElement("h3");
    nomeCella.innerText = index + 1;
    //appendo il nome dell cella
    divCelle.appendChild(nomeCella);
    //appendo tutte le cella al div
    selezioneDivTabella.appendChild(divCelle);
  }
};

//2 seleziona bottone per estrazione numero
const bottone = document.querySelector("button");
// genero numero casuale alla pressione
bottone.addEventListener("click", function (event) {
  const numeroCasuale = Math.floor(Math.random() * 76);
  console.log(event);
  console.log(numeroCasuale);
});

//3 evidenzia cella col numero estratto

// mantieni evidenziate le celle estratte

// avvio funzioni al caricamento della pagina
window.addEventListener("DOMContentLoaded", () => {
  creaCelle(76);
});
