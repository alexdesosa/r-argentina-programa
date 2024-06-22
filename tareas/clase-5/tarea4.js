
//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."


let numeros = document.querySelectorAll('.numeros');
let contenedorDeNumeros = [];

numeros.forEach(numero => {
    contenedorDeNumeros.push(Number(numero.textContent));
});

if(contenedorDeNumeros.length){
    contenedorDeNumeros.forEach(numero => {
        let elNumeroPromedio = document.querySelector('#elNumeroPromedio');
        let elNumeroPequenio = document.querySelector('#elNumeroMasPequenio');
        let elNumeroGrande = document.querySelector('#elNumeroMasGrande');
        let elNumeroFrecuente = document.querySelector('#elNumeroMasFrecuente');

        let suma = contenedorDeNumeros.reduce((acc, numero) => acc + numero, 0);
        let promedio = suma / contenedorDeNumeros.length;
        elNumeroPromedio.textContent = `El promedio es ${promedio}`;

        let elNumeroMenor = Math.min(...contenedorDeNumeros);
        elNumeroPequenio.textContent = `El número más pequeño es ${elNumeroMenor}`;

        let elNumeroMayor = Math.max(...contenedorDeNumeros);
        elNumeroGrande.textContent = `El número más grande es ${elNumeroMayor}`;
        
        let frecuencia = {};
        let elNumeroMasFrecuente = 0;
        let elNumeroMasrepetido;

        contenedorDeNumeros.forEach(numero => {
            if(frecuencia[numero]) {
                frecuencia[numero]++;
            } else {
                frecuencia[numero] = 1;
            }

            if(frecuencia[numero] > elNumeroMasFrecuente){
                elNumeroMasFrecuente = frecuencia[numero];
                elNumeroMasrepetido = numero;
            }
        })

        elNumeroFrecuente.textContent = `El número más frecuente es ${elNumeroMasrepetido}`
    })
}








