export function traerNumeroEstudiantes() {
  let numeroEstudiantes = 0;
  fetch("../data/students.json")
    .then((response) => response.json())
    .then((data) => {
      //console.log(data)
      console.log(data.ajusco.generacion.primera.estudiantes.length)
      numeroEstudiantes = data.ajusco.generacion.primera.estudiantes.length
      return numeroEstudiantes
    })
    .catch((error) => console.log(error));

}

export function traerPorcentajeCompletado() {
  fetch("../data/students.json")
    .then((response) => response.json())
    .then((data) => {
      let x= 0;
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
