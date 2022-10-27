const inputKm = document.getElementById("km");
const inputAge = document.getElementById("age");
const outputSpan = document.getElementById("output-span");
const bottoneForm = document.getElementById("bottone-form");
const boxOutput = document.getElementById("box-output");
const inputDestinazione = document.getElementById("destinazione");
const btnNullDestination = document.getElementById("btn-NullDestination");
const boxKm = document.getElementById("km-box");
const listBox = document.getElementById("list-box");

class Destinazione {
    constructor(citta, distanza) {
        this.citta = citta;
        this.distanza = distanza;
    }

}

const ListaDestinazione = [new Destinazione("firenze", 200), new Destinazione("milano", 150), new Destinazione("roma", 100),];
console.log(ListaDestinazione[0].citta);





bottoneForm.addEventListener("click", () => PriceTicket());
btnNullDestination.addEventListener("click",() => AppearKm());

function PriceTicket() {
    let indiceSelezionato = inputDestinazione.selectedIndex;
    let age = parseInt(inputAge.value);
    let price = (parseInt(inputKm.value)) * 0.21;
    console.log(inputDestinazione.options);
    console.log(indiceSelezionato);

    if (indiceSelezionato != 0) {
        switch(indiceSelezionato){
            case 1:
                price=ListaDestinazione[0].distanza * 0.21;
                break;
            case 2:
                price=ListaDestinazione[1].distanza * 0.21;
                break;  
            case 3:
                price=ListaDestinazione[2].distanza * 0.21;
                break; 


        }
        if (isNaN(age)) {
            alert("ricordati di inserire un età");
        }
        else {
            if (age < 18) {
                price *= 0.8;

            }
            else if (age >= 65) {
                price *= 0.6;
            }
            outputSpan.innerHTML = `${price.toFixed(2)} €`;

        }


    }
    else {

        if (isNaN(price)) {
            alert("il numero di km inserito non è valido");
        }
        else {
            if (isNaN(age)) {
                alert("ricordati di inserire un età");
            }
            else {
                if (age < 18) {
                    price *= 0.8;

                }
                else if (age >= 65) {
                    price *= 0.6;
                }
                outputSpan.innerHTML = `${price.toFixed(2)} €`;

            }



        }
    }

}

function AppearKm(){
    boxKm.style.display="block";
    listBox.style.display="none";
    

}



