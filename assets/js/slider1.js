const lista1 = document.querySelectorAll('.list-cards li');
const btnProx = document.querySelector('#proximo');
const btnAnt = document.querySelector('#anterior');

let acumulador = 0;

// function cardVisivel(acumulador, lista1){
//     acumulador = acumulador + 1;
//     lista1.item(acumulador).style.display = 'flex';
//     lista1.item(acumulador - 1).style.display = 'none';
//     console.log(acumulador)
// };

btnProx.addEventListener('click', function () {
    if (acumulador === 4) {
        console.log(acumulador)
        acumulador = -1;
        lista1.item(acumulador + 5).style.display = 'none';
    }
    acumulador += 1;
    lista1.item(acumulador).style.display ='flex'
    lista1.item(acumulador - 1).style.display = 'none';
    console.log(acumulador);
});

btnAnt.addEventListener('click', function(){
    if (acumulador === 0) {
        acumulador = 5;
        lista1.item(acumulador - 5).style.display = 'none';
    }
    acumulador -= 1;
    lista1.item(acumulador).style.display ='flex'
    lista1.item(acumulador + 1).style.display = 'none';
});

// console.log(lista1.item(0).style.display ='flex')