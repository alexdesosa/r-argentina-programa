/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

document.querySelector("#añadirBoton").onclick = (event) => {
    event.preventDefault();
    let $cantidadFamiliar = document.querySelector("#cantidadFamilia").value;
    cantidadFamiliar($cantidadFamiliar);
  };
  
  function cantidadFamiliar(cantidad) {
    let contenedorFamiliar = document.querySelector("#familiares");
    contenedorFamiliar.innerHTML = "";
  
    for (let i = 1; i <= cantidad; i++) {
      const label = document.createElement("label");
      const input = document.createElement("input");
  
      label.htmlFor = `familiar${i}`;
      label.innerHTML = `<br> Miembro Familiar #${i}`;
  
      input.type = "number";
      input.id = `familiar${i}`;
      input.classList.add("familiar");
  
      contenedorFamiliar.appendChild(label);
      contenedorFamiliar.appendChild(input);
  
      const salarioLabel = document.createElement("label");
      const salarioInput = document.createElement("input");
  
      salarioLabel.htmlFor = `sueldoFamiliar${i}`;
      salarioLabel.innerHTML = `Sueldo Familiar #${i}`;
  
      salarioInput.type = "number";
      salarioInput.id = `sueldoFamiliar${i}`;
      salarioInput.classList.add("sueldoFamiliar");
  
      contenedorFamiliar.appendChild(salarioLabel);
      contenedorFamiliar.appendChild(salarioInput);
    }
  
    document.querySelector("#calcularBotonSalario").onclick = (event) => {
      event.preventDefault();
      let salarios = document.querySelectorAll(".sueldoFamiliar");
      let sueldos = [];
      salarios.forEach((salario) => {
        if(salario.value){
        sueldos.push(Number(salario.value));
    }});
  
      if (sueldos.length > 0) {
        let sumarSalarios = sueldos.reduce((acc, suma) => acc + suma, 0);
        let mayorSalario = Math.max(...sueldos);
        let menorSalario = Math.min(...sueldos);
        let promedioSalarioAnual = sumarSalarios / sueldos.length;
        let promedioSalarioMensual = promedioSalarioAnual / 12;
  
        document.querySelector("#analizarSalarios").style.display = 'block';
        document.querySelector('#salarioMayor').textContent = `El salario mayor anual es de ${mayorSalario}`;
        document.querySelector('#salarioMenor').textContent = `El salario menor anual es de ${menorSalario}`;
        document.querySelector('#salarioPromedio').textContent = `El salario promedio anual es de ${promedioSalarioAnual}`;
        document.querySelector('#salarioPromedioMensual').textContent = `El salario promedio mensual es de ${promedioSalarioMensual.toFixed(2)}`;

      }
    };
  
    document.querySelector("#calcularBoton").onclick = (event) => {
      event.preventDefault();
      let familiares = document.querySelectorAll(".familiar");
      let edades = [];
      familiares.forEach((familiar) => {
        if(edades.value){
        edades.push(Number(familiar.value));
    }});
  
      if (edades.length > 0) {
        let sumarEdades = edades.reduce((acc, suma) => acc + suma, 0);
        let mayorEdad = Math.max(...edades);
        let menorEdad = Math.min(...edades);
        let promedioEdades = sumarEdades / edades.length;
  
        document.querySelector("#analisis").style.display = "block";
        document.querySelector("#promedioEdad").textContent = `Promedio de Edad: ${promedioEdades.toFixed(2)}`;
        document.querySelector("#mayorEdad").textContent = `La mayoría de Edad: ${mayorEdad}`;
        document.querySelector("#menorEdad").textContent = `La minoría de Edad: ${menorEdad}`;
  
        document.querySelector("#resetearBoton").onclick = (event) => {
          event.preventDefault();
          document.querySelector("#analisis").style.display = "none";
          document.querySelector("#promedioEdad").textContent = ``;
          document.querySelector("#mayorEdad").textContent = ``;
          document.querySelector("#menorEdad").textContent = ``;
          contenedorFamiliar.innerHTML = "";
          document.querySelector("#cantidadFamilia").value = "";
        };
      }
    };
  }
  

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
