const animales = ['Perro', 'Gato', 'Pato', 'Leopardo', 'Elefante', 'Hipopotamo', 'Castor', 'Zorro', 'Raton', 'Rinoceronte'];
const marcasPc = ['HP','Dell','IBM','Asus','Toshiba','AlienWare','Apple','Samsung', 'Huawei', 'Lenovo'];
const nombres = ['Santiago', 'Tamara', 'Cesar', 'Gabriela', 'Ana', 'Esteban', 'Diego', 'Alberto', 'Felipe', 'Claudia'];

let lista = document.querySelector('#lista');
let lista1 = document.querySelector('#animales');
let lista2 = document.querySelector('#marcas');
let lista3 = document.querySelector('#companeros');

lista1.addEventListener('click', function(){
    lista.textContent = '';
    animales.forEach( function(animal){
        let item = document.createElement('li');
        item.textContent = animal;
        lista.appendChild(item);
    })
})

lista2.addEventListener('click', function(){
    lista.textContent = '';   // para que se actualice en una nueva lista sin necesidad de recargar pagina
    marcasPc.forEach( function(marcas){
        let item = document.createElement('li');
        item.textContent = marcas;
        lista.appendChild(item);
    })
})

lista3.addEventListener('click', function(){
    lista.textContent = '';
    nombres.forEach( function(personas){
        let item = document.createElement('li');
        item.textContent = personas;
        lista.appendChild(item);
    })
})

