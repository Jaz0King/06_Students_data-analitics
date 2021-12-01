export function estudiantes(sede, gen) {
  console.log(sede)
  fetch("../data/students.json")
    .then((response) => response.json())
    .then((data) => {
      studentsNumber(sede, gen, data)
      porcentage(sede, gen, data)
      render(sede, gen, data)
      alumnosMenosSesenta(sede, gen, data)
      alumnosMasNoventa(sede, gen, data)
    })
    .catch((error) => console.log(error));
}

function studentsNumber(sede, gen, data) {
  console.log(data)
  console.log(data[sede].generacion[gen].estudiantes.length)
  let num = document.getElementById('numeroAlumnos')
  num.innerHTML += data[sede].generacion[gen].estudiantes.length
}

function porcentage(sede, gen, data) {
  let x = 0;
  for (let i = 0; i < data[sede].generacion[gen].estudiantes.length; i++) {
    x += data[sede].generacion[gen].estudiantes[i].progreso.porcentajeCompletado
  }
  x = x / (data[sede].generacion[gen].estudiantes.length)
  console.log(x)
  let porc = document.getElementById('porcentaje')
  porc.innerHTML += x
}

function render(sede, gen, data) {
  console.log(data)
  for (let i = 0; i < data[sede].generacion[gen].estudiantes.length; i++) {
    //console.log(data[sede].generacion[gen].estudiantes[i].nombre)
    let alumnos = document.getElementById("nombres")
    alumnos.innerHTML += ` <div id="nombres">
     <p> "${data[sede].generacion[gen].estudiantes[i].nombre}" </p>
     </div> `
  }
}

function alumnosMenosSesenta(sede, gen, data) {
  let menos60 = document.getElementById('menos60')
  for (let i = 0; i < data[sede].generacion[gen].estudiantes.length; i++) {
    //console.log(data[sede].generacion[gen].estudiantes[i].progreso.porcentajeCompletado)
    if (data[sede].generacion[gen].estudiantes[i].progreso.porcentajeCompletado < 60) {
      console.log('menos de sesenta: ' + data[sede].generacion[gen].estudiantes[i].nombre)
      menos60.innerHTML += data[sede].generacion[gen].estudiantes[i].nombre + `<br>`
    } else { }
  }
}

function alumnosMasNoventa(sede, gen, data) {
  let mas90 = document.getElementById('mas90')
  for (let i = 0; i < data[sede].generacion[gen].estudiantes.length; i++) {
    //console.log(data[sede].generacion[gen].estudiantes[i].progreso.porcentajeCompletado)
    if (data[sede].generacion[gen].estudiantes[i].progreso.porcentajeCompletado > 90) {
      console.log('mas de noventa: ' + data[sede].generacion[gen].estudiantes[i].nombre)
      mas90.innerHTML += data[sede].generacion[gen].estudiantes[i].nombre + `<br>`
    } else { }
  }
}

