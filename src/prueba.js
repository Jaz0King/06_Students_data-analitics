let arr = []
let sede = "ajusco"
let gen = "primera"

function estudiantes(sede, gen) {
  //console.log(sede)
  fetch("../data/students.json")
    .then((response) => response.json())
    .then((data) => {
      ejemplo(sede, gen, data, arr)
    })
    .catch((error) => console.log(error));
}

function ejemplo(sede, gen, data) {
  arr = data
}
estudiantes(sede, gen)
const resultado = document.getElementById('resultado')
let busqueda = document.getElementById('busqueda')
let entrada = document.getElementById('entrada')

entrada.addEventListener('keyup', () => {
  busquedaAlumnos(arr)
})

busqueda.addEventListener('click', () => {
  busquedaAlumnos(arr)
})

function busquedaAlumnos(arr) {
  resultado.innerHTML = ''
  let entrada = document.getElementById('entrada').value.toLowerCase()
  for (let i = 0; i < arr[sede].generacion[gen].estudiantes.length; i++) {
    let nombre = (arr[sede].generacion[gen].estudiantes[i].nombre).toLowerCase()
    console.log(nombre.indexOf(entrada))
    if (nombre.indexOf(entrada) !== -1) {
      resultado.innerHTML += `
      <li>${arr[sede].generacion[gen].estudiantes[i].nombre}</li>
      `
      console.log(arr[sede].generacion[gen].estudiantes[i].nombre)
    }
  }
  if (resultado.innerHTML === '') {
    resultado.innerHTML += `<li>Nombre no encontrado</li>`
  }
}