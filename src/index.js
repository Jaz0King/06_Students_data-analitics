const sede = localStorage['objectToPass']
localStorage.removeItem('objectToPass')
console.log(sede)
const location = document.getElementById('sede')
location.innerHTML = sede
if(sede=='ajusco'){
  let mapa = document.getElementById('marcoImagen')
  mapa.innerHTML =`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6015.2682977899585!2d-99.1975469513815!3d19.225598784554762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdfdf6a3ef005d%3A0xb4c2a9c688e66926!2zMTnCsDEzJzI4LjQiTiA5OcKwMTEnMzkuNyJX!5e0!3m2!1ses!2smx!4v1638135188085!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
}else {
  if(sede=='chapultepec'){

  }else {

  }
}
let btnPrimera = document.getElementById('btnPrimera')
let btnSegunda = document.getElementById('btnSegunda')
let btnTercera = document.getElementById('btnTercera')

btnPrimera.addEventListener('click', () => {

})
btnSegunda.addEventListener('click', () => {


})
btnTercera.addEventListener('click', () => {


})

/*------Temporal -----*/
/*
const location = document.getElementById('sede')
let sede = "ajusco"
location.innerHTML = sede
*/
/*------------------- */


import { porcentajeCompletado, numeroEstudiantes, renderAlumnos, menosSesenta, masNoventa } from "./data.js";
numeroEstudiantes(sede,"primera")