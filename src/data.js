export let numeroEstudiantes = 0

export function traerNumeroEstudiantes(sede) {
console.log(sede)
  fetch("../data/students.json")
    .then((response) => response.json())
    .then((data) => studentsNumber(sede, data))
    .catch((error) => console.log(error));
}
//console.log(numeroEstudiantes)

function studentsNumber (sede, data) {
      console.log(sede, data)
      console.log(data[sede])
      //console.log(numeroEstudiantes) generacion.primera.estudiantes.length
      //return numeroEstudiantes
}

export function traerPorcentajeCompletado() {
  let x = 0;
  fetch("../data/students.json")
    .then((response) => response.json())
    .then((data) => {
      //console.log(data)
      for (let i =0 ; i<data.ajusco.generacion.primera.estudiantes.length; i++){
        //console.log(data.ajusco.generacion.primera.estudiantes[i].progreso.porcentajeCompletado)
        x += data.ajusco.generacion.primera.estudiantes[i].progreso.porcentajeCompletado
      }
      x = x/(data.ajusco.generacion.primera.estudiantes.length)
      console.log(x)
      return x
    })
    .catch((error) => console.log(error));
}