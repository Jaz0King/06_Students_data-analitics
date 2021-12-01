
const sede = localStorage['objectToPass']
localStorage.removeItem('objectToPass')
console.log(sede)
const location = document.getElementById('sede')
location.innerHTML = sede

let gen = ('primera', 'segunda', 'tercera')

if (sede == 'ajusco') { 
        let mapa = document.getElementById('marcoImagen')
        let logo = document.getElementById('logoLoc')
        mapa.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6015.2682977899585!2d-99.1975469513815!3d19.225598784554762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdfdf6a3ef005d%3A0xb4c2a9c688e66926!2zMTnCsDEzJzI4LjQiTiA5OcKwMTEnMzkuNyJX!5e0!3m2!1ses!2smx!4v1638135188085!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
        logo.innerHTML = `<img src="../assets/imágenes/logoAjus.png">`
 } else {
    if (sede == 'iztapalapa') {
        let mapa = document.getElementById('marcoImagen')
        let logo = document.getElementById('logoLoc')
        mapa.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2293.1881586146574!2d-99.0792445205906!3d19.359196189696597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fd934d202773%3A0xd7332b4d3b89852!2sGregorio%20Torres%20Quintero%2036B%2C%20San%20Miguel%2C%20Iztapalapa%2C%2009360%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1638346244226!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
        logo.innerHTML = `<img src="../assets/imágenes/logoIzta.png">`
    } else {
    if (sede == 'chapultepec') {
        let mapa = document.getElementById('marcoImagen')
        let logo = document.getElementById('logoLoc')
        mapa.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.718759093418!2d-99.22484098502558!3d19.424553886888898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d201862022d313%3A0xf4275653671deb74!2sMonte%20Chimborazo%2C%2011000%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1638346434249!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
        logo.innerHTML = `<img src="../assets/imágenes/logoChap.png">`
    }
   }
  }

  
let btnPrimera = document.getElementById('btnPrimera')
let btnSegunda = document.getElementById('btnSegunda')
let btnTercera = document.getElementById('btnTercera')


btnPrimera.addEventListener('click', () => {
    //console.log('btnPrimera')
    //pintar dinámicamente los alumnos de la primera generación segun locación 
   if (gen = 'primera'){
    for (let i = 0; i < data[sede].generacion[gen].estudiantes.length; i++) {
        //console.log(data[sede].generacion[gen].estudiantes[i].nombre)
        let alumnos = document.getElementById("nombres")
        alumnos.innerHTML += ` <div id="nombres">
         <p> "${data[sede].generacion[gen].estudiantes[i].nombre}" </p>
         </div> `
      }
   }

})

btnSegunda.addEventListener('click', () => {
  
})

btnTercera.addEventListener('click', () => {
   
})

import { estudiantes } from "./data.js";
estudiantes(sede, gen)
render(sede, gen, data)



