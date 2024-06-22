//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

document.querySelector("#formulario").onclick = (event) => {
    event.preventDefault();
  let numeroDeClase = Number(document.querySelector("#numeroClase").value);
  let horasDeClase = Number(document.querySelector("#horasClase").value);
  let minutosDeClase = Math.floor(Number(document.querySelector("#minutosClase").value));
  let segundosDeClase = Number(document.querySelector("#segundosClase").value);

    let totalMinutos = (horasDeClase * 60) + minutosDeClase;
    let totalSegundos = (totalMinutos * 60) + segundosDeClase;

 let contenido = document.querySelector('#contenido').textContent = `La clase n° ${numeroDeClase}, tiene un total de ${horasDeClase} horas, ${totalMinutos} minutos y ${totalSegundos} segundos`;
};

