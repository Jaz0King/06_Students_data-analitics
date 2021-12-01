let arr = []

export function estudiantes(sede, gen) {
  console.log(sede)
  fetch("../data/students.json")
    .then((response) => response.json())
    .then((data) => {
      traerDatos(data)
      studentsNumber(sede, gen)
      porcentage(sede, gen)
      alumnosMenosSesenta(sede, gen)
      alumnosMasNoventa(sede, gen)
      busquedaAlumnos(sede, gen)
    })
    .catch((error) => console.log(error));
}
function traerDatos(data) {
  arr = data
  console.log(data)
}
export function studentsNumber(sede, gen) {
  console.log(arr[sede].generacion[gen].estudiantes.length)
  let num = document.getElementById('numeroAlumnos')
  num.innerHTML = `<h6>Alumnos:</h6>`
  num.innerHTML += arr[sede].generacion[gen].estudiantes.length
}

export function porcentage(sede, gen) {
  let x = 0;
  for (let i = 0; i < arr[sede].generacion[gen].estudiantes.length; i++) {
    x += arr[sede].generacion[gen].estudiantes[i].progreso.porcentajeCompletado
  }
  x = x / (arr[sede].generacion[gen].estudiantes.length)
  console.log(x)
  let porc = document.getElementById('porcentaje')
  porc.innerHTML = `<h6>Porcentaje promedio completado:</h6>`
  porc.innerHTML += x
}

export function alumnosMenosSesenta(sede, gen) {
  let menos60 = document.getElementById('menos60')
  menos60.innerHTML = `<h6>Alumnos menos 60:</h6>`
  for (let i = 0; i < arr[sede].generacion[gen].estudiantes.length; i++) {
    //console.log(arr[sede].generacion[gen].estudiantes[i].progreso.porcentajeCompletado)
    if (arr[sede].generacion[gen].estudiantes[i].progreso.porcentajeCompletado < 60) {
      console.log('menos de sesenta: ' + arr[sede].generacion[gen].estudiantes[i].nombre)
      menos60.innerHTML += arr[sede].generacion[gen].estudiantes[i].nombre + `<br>`
    } else { }
  }
}

export function alumnosMasNoventa(sede, gen) {
  let mas90 = document.getElementById('mas90')
  mas90.innerHTML = `<h6>Alumnos mas 90:</h6>`
  for (let i = 0; i < arr[sede].generacion[gen].estudiantes.length; i++) {
    //console.log(arr[sede].generacion[gen].estudiantes[i].progreso.porcentajeCompletado)
    if (arr[sede].generacion[gen].estudiantes[i].progreso.porcentajeCompletado > 90) {
      console.log('mas de noventa: ' + arr[sede].generacion[gen].estudiantes[i].nombre)
      mas90.innerHTML += arr[sede].generacion[gen].estudiantes[i].nombre + `<br>`
    } else { }
  }
}
export function busquedaAlumnos(sede, gen) {
  let modalDiv = document.getElementById('modalDiv')
  let nombres = document.getElementById('nombres')
  nombres.innerHTML = ''
  let entrada = document.getElementById('busqueda').value.toLowerCase()
  for (let i = 0; i < arr[sede].generacion[gen].estudiantes.length; i++) {
    let nombre = (arr[sede].generacion[gen].estudiantes[i].nombre).toLowerCase()
    console.log(nombre.indexOf(entrada))
    if (nombre.indexOf(entrada) !== -1) {
      nombres.innerHTML += `
      <p data-bs-toggle="modal" data-bs-target=#id${i} >${arr[sede].generacion[gen].estudiantes[i].nombre}</p><br>
      `
      modalDiv.innerHTML += `    <div
      class="modal fade"
      id=id`+ `${i}` + `
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">` + `${arr[sede].generacion[gen].estudiantes[i].nombre}` +
        `</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <h5>Type:</h5><p>${i}</p>
            <h5>Year:</h5><p>${i}</p> </div>
            <h5>imdbID:</h5><p>${i}</p>
            <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>`
      console.log(arr[sede].generacion[gen].estudiantes[i].nombre)
    }
  }
  if (nombres.innerHTML === '') {
    nombres.innerHTML += `<li>Nombre no encontrado</li>`
  }
}
