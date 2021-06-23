function productos(){
    let munecasVendidas = document.getElementById("munecasVendidas").value;
    let payasosVendidos = document.getElementById("payasosVendidos").value;
    let pesoMunecas = munecasVendidas * 75;
    let pesoPayasos = payasosVendidos * 112;
    let pesoTotal= Math.ceil((pesoMunecas + pesoPayasos)/1000);//Math.ceil para redondear hacia arriba
    
    document.write(`<h1>El numero de paquetes es: ${pesoTotal} con un peso total de: ${(pesoMunecas+pesoPayasos)/1000} kg </h1>`);

 }