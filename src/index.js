const sede = localStorage['objectToPass']
console.log(sede)
const location = document.getElementById('sede')
location.innerHTML = sede
let generacion = "primera"

import { estudiantes, studentsNumber, porcentage, alumnosMasNoventa, alumnosMenosSesenta, busquedaAlumnos } from "./data.js";

estudiantes(sede, generacion)
let btnPrimera = document.getElementById('btnPrimera')
let btnSegunda = document.getElementById('btnSegunda')
let btnTercera = document.getElementById('btnTercera')

btnPrimera.addEventListener('click', () => {
  busquedaAlumnos(sede, "primera")
  generacion = "primera"
})
btnSegunda.addEventListener('click', () => {
  busquedaAlumnos(sede, "segunda")
  generacion = "segunda"
})
btnTercera.addEventListener('click', () => {
  busquedaAlumnos(sede, "tercera")
  generacion = "tercera"
})