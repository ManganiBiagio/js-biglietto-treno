const inputKm=document.getElementById("km");
const inputAge=document.getElementById("age");
const outputSpan=document.getElementById("output-span");
const bottoneForm=document.getElementById("bottone-form");
const boxOutput=document.getElementById("box-output");



bottoneForm.addEventListener("click",()=> PriceTicket());

function PriceTicket(){
    let age=parseInt(inputAge.value);
    let price=(parseInt(inputKm.value))* 0.21;
    
    if(isNaN(price)){
        alert("il numero di km inserito non è valido");
    }
    else{
        if(isNaN(age)){
            alert("ricordati di inserire un età");
        }
        else{
            if(age<18){
                price*=0.8;
    
            }
            else if(age>=65){
                price*=0.6;
            }
            outputSpan.innerHTML=`${price.toFixed(2)} €`;

        }
        


    }
    
}


class Destinazione{
    constructor(citta,distanza){
        this.citta=citta;
        this.distanza=distanza;
    }
    
}

const ListaDestinazione=[new Destinazione("firenze",200),new Destinazione("milano",150),new Destinazione("roma",100),];
console.log(ListaDestinazione[0].citta);