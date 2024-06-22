//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

/*
Ejemplo form:
  <form id="entrada-bar" onsubmit="return false;">
    <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
    <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
    <input type="submit" value="Ingresar" id="ingresar"/>
  </form>

  <div id="resultado">Hola</div>
*
* */

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#entradaBar').addEventListener('submit', (event) => {
        event.preventDefault();
        const primerNombre = document.querySelector('#primerNombreUsuario').value;
        const segundoNombre = document.querySelector('#segundoNombreUsuario').value;
        const apellidoUsuario = document.querySelector('#apellidoUsuario').value;
        const edadUsuario = Number(document.querySelector('#edadUsuario').value);

        const container = document.querySelector('#resultado');

        container.textContent = `Bienvenido ${primerNombre} ${segundoNombre} ${apellidoUsuario} de ${edadUsuario} años `
    })
})
