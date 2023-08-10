/**
 * MD5
 * ts: 1000
 * private key: 12345
 * tsprivate_heypubli_key
 * private_key
 * 1000abcde12345
 */

 let clave_publica = '8388510529e82924036f09c1e16d14e6';
 let clave_privada = '02054ef3bb2a4352610d620e38e5388d18d62635';
 let hash = '4d9135e5e41963f8b74823793a6fffc2';

 async function obtenerPersonajes(letra) {
     let url = `https://gateway.marvel.com:443/v1/public/characters?apikey=${clave_publica}&ts=1000&hash=${hash}&nameStartsWith=${letra}`;
     let respuesta = await fetch(url);
     let datos = await respuesta.json();
     return datos.data.results;
 }

 function mostrarPersonajes(personajes) {
     let contenedorPersonajes = document.getElementById('contenedor-personajes');
     contenedorPersonajes.innerHTML = ''; 

     personajes.forEach(personaje => {
         let img = document.createElement('img');
         img.src = personaje.thumbnail.path + '.' + personaje.thumbnail.extension;
         
         let nombre = document.createElement('h3');
         nombre.textContent = personaje.name;
         
         let divPersonaje = document.createElement('div');
         divPersonaje.appendChild(img);
         divPersonaje.appendChild(nombre);
         
         contenedorPersonajes.appendChild(divPersonaje);
     });
 }

 document.addEventListener('DOMContentLoaded', () => {
     const entrada = document.getElementById('busqueda-input');

     entrada.addEventListener('input', async (evento) => {
         const letra = evento.target.value;
         const personajes = await obtenerPersonajes(letra);
         mostrarPersonajes(personajes);
     });
 });