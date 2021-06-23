

let button= document.querySelector("#button");
button.addEventListener("click", function(){
    let celcius= parseInt(document.querySelector("#celcius").value);
    let kelvin = celcius + 273.15;
    let farenheit= (celcius * 9)/5 + 32;
    let resultados= document.querySelector("#resultados");
    resultados.textContent="";
    let elementoNuevo= document.createElement("h1");
    elementoNuevo.appendChild(document.createTextNode(`Los grados convertidos son:`));
    elementoNuevo.appendChild( document.createElement("br"));
    elementoNuevo.appendChild(document.createTextNode(` Grados Kelvin: ${kelvin}`));
    elementoNuevo.appendChild( document.createElement("br"));
    elementoNuevo.appendChild(document.createTextNode(`Grados Ferenheit: ${farenheit}`));
    resultados.appendChild(elementoNuevo);

    /* document.write`<h1> los grados convertidos son: <br> Los grados Kelvin son: ${kelvin} <br> Los grados Farenheit ${farenheit} </h1> `; */
});

