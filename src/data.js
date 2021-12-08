let arr = []

export function estudiantes(sede, gen) {
  //console.log(sede)
  fetch("../data/students.json")
    .then((response) => response.json())
    .then((data) => {
      traerDatos(data)
      studentsNumber(sede, gen)
      porcentage(sede, gen)
      alumnosMenosSesenta(sede, gen)
      alumnosMasNoventa(sede, gen)
      busquedaAlumnos(sede, gen)
      renderGraph(sede, gen)
    })
    .catch((error) => console.log(error));
}

function traerDatos(data) {
  arr = data
  //console.log(data)
}
export function studentsNumber(sede, gen) {
  //console.log(arr[sede].generacion[gen].estudiantes.length)
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
  //console.log(x)
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
      //console.log('menos de sesenta: ' + arr[sede].generacion[gen].estudiantes[i].nombre)
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
      //console.log('mas de noventa: ' + arr[sede].generacion[gen].estudiantes[i].nombre)
      mas90.innerHTML += arr[sede].generacion[gen].estudiantes[i].nombre + `<br>`
    } else { }
  }
}

function pTemas(sede, gen, id, temas) {
  let temasYSub = document.getElementById(id)
  //console.log(temas)
  let tempString = ''
  let secSting = ''
  let thrSting = ''

  tempString += ' <div class="accordion" id="accordionPanelsStayOpenExample">'
  for (const tema in temas) {
    //tempString += `<select class="form-select" aria-label="Default select example">`
    tempString +=
      `<div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      ${tema} ${temas[tema].duracionTema}min.  /${temas[tema].duracionTema} 
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
          <div class="accordion-body">`
    //console.log("*")
    //console.log(tema)
    //tempString += `<option selected>${tema} </option>`
    //console.log(temas[tema].subtemas)
    let valores = Object.values(temas[tema].subtemas)
    let claves = Object.keys(temas[tema].subtemas)
    //console.log(claves)
    //console.log(valores)
    for (let i = 0; i < valores.length; i++) {

      //console.log('   ' + claves[i])
      //console.log('     Completado: ' + valores[i].completado)
      //console.log('     DuracionSubTema: ' + valores[i].duracionSubtema)
      //console.log('     Tipo: ' + valores[i].tipo)
      //  tempString += `<option> ${claves[i]}</option>`
      tempString += `<strong>   ${claves[i]}</strong> 
      <p> Completado: ${valores[i].completado}</p>
      <p> DuracionSubTema: ${valores[i].duracionSubtema}</p>
      <p> Tipo: ${valores[i].tipo}</p>`

    }


    //console.log("----------")
    tempString += `  </div>
       </div>
  </div>`
    //tempString += `</select>`
    //temasYSub.innerHTML = tempString
  }
  tempString += '</div>'
  //console.log(tempString)
  temasYSub.innerHTML = tempString
}

function pCompletado(sede, gen, id, temas) {
  console.log(temas)
  let completadoYnoCompletado = document.getElementById(id)
  let completadoString = ''
  let noCompletadoString = ''
  for (const tema in temas) {
    let valores = Object.values(temas[tema].subtemas)
    let claves = Object.keys(temas[tema].subtemas)
    console.log(valores)
    console.log(claves)
    for (let i = 0; i < valores.length; i++) {
      if (valores[i].completado == 1) {
        console.log("completados" + claves[i])
        completadoString += claves[i] + '<br>'
      } else {
        console.log("no completados" + claves[i])
        noCompletadoString += claves[i] + '<br>'
      }
    }
  }

  completadoYnoCompletado.innerHTML += `
  <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Completados
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
       ${completadoString} 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        No completados
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
        ${noCompletadoString}
      </div>
    </div>
  </div>
</div>`

}

function sTipo(sede, gen, id, temas) {
  console.log(temas)
  let tipos = document.getElementById(id)
  let ejercicio = ' '
  let lectura = ' ' 
  let quiz = ' ' 

  for (const tema in temas) {
    let valores = Object.values(temas[tema].subtemas)
    let claves = Object.keys(temas[tema].subtemas)
    console.log(valores)
    console.log(claves)
    for (let i = 0; i < valores.length; i++) {
      if (valores[i].tipo == 'lectura') {
        console.log("lecturas" + claves[i])
        lectura += claves[i] + '<br>'
      } else {
        if (valores[i].tipo == 'ejercicio') {
        console.log("ejercicios" + claves[i])
        ejercicio += claves[i] + '<br>'
       } else {
         console.log("quiz" + claves[i])
         quiz += claves[i] + '<br>'
       }
      }
    }
  }

  tipos.innerHTML += `
  <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Lecturas
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
       ${lectura} 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Ejercicios
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
        ${ejercicio}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Quizzes
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
        ${quiz}
      </div>
    </div>
  </div>
</div>`

}



export function busquedaAlumnos(sede, gen) {
  let modalDiv = document.getElementById('modalDiv')
  let nombres = document.getElementById('nombres')
  nombres.innerHTML = ''
  modalDiv.innerHTML = ''
  let entrada = document.getElementById('busqueda').value.toLowerCase()
  for (let i = 0; i < arr[sede].generacion[gen].estudiantes.length; i++) {
    let nombre = (arr[sede].generacion[gen].estudiantes[i].nombre).toLowerCase()
    //console.log(nombre.indexOf(entrada))
    if (nombre.indexOf(entrada) !== -1) {
      nombres.innerHTML += `
      <div class="card" style="width: 18rem;">
        <h4 class="card-header">${arr[sede].generacion[gen].estudiantes[i].nombre}</h4>
        <div class="card-body">
          <h6>${arr[sede].generacion[gen].estudiantes[i].correo} </h6>
          <h6>Duración: ${arr[sede].generacion[gen].estudiantes[i].progreso.duracionPrograma} hrs.</h6> 
          <h6>Completado: ${arr[sede].generacion[gen].estudiantes[i].progreso.porcentajeCompletado} % </h6> 
          <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target=#id${i}>Información</a>
        </div>
      </div>
      `

      modalDiv.innerHTML += `    
      <div class="modal fade"
      id=id`+ `${i}` + `
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">` + `${arr[sede].generacion[gen].estudiantes[i].nombre}` + `
        </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close">
            </button>
          </div>
          <div class="modal-body">
          <h5>Temas y Subtemas:</h5>
          <div id="${i}temas"> </div>
          <h5>Temas completados y no completados:</h5>
          <div id="${i}completados"> </div>
          <h5>Subtemas por tipo:</h5>
          <div id="${i}tipo"> </div>
            <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>`
      //console.log(arr[sede].generacion[gen].estudiantes[i].nombre)
      pTemas(sede, gen, `${i}temas`, arr[sede].generacion[gen].estudiantes[i].progreso.temas)
      pCompletado(sede, gen, `${i}completados`, arr[sede].generacion[gen].estudiantes[i].progreso.temas)
      sTipo(sede, gen, `${i}tipo`, arr[sede].generacion[gen].estudiantes[i].progreso.temas)
    }
  }

  if (nombres.innerHTML === '') {
    nombres.innerHTML += `<li>Nombre no encontrado</li>`
  }
}

export const ctx = document.getElementById("myChart").getContext("2d");
export const myChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["mas90%", "menos60%", "entre60y90%"],
    datasets: [
      {
        label: "Estudiantes",
        data: [12, 19, 2],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)"
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: false,

  },
});

export function renderGraph(sede, gen) {
  myChart.data.datasets[0].data = []
  let total = arr[sede].generacion[gen].estudiantes.length
  let mas90 = 0
  let menos60 = 0
  for (let i = 0; i < arr[sede].generacion[gen].estudiantes.length; i++) {
    //console.log(arr[sede].generacion[gen].estudiantes[i].progreso.porcentajeCompletado)
    if (arr[sede].generacion[gen].estudiantes[i].progreso.porcentajeCompletado > 90) {
      mas90++
    } else {
      if (arr[sede].generacion[gen].estudiantes[i].progreso.porcentajeCompletado < 60) {
        menos60++
      } else {

      }
    }
  }
  let resto = total - mas90 - menos60
  //console.log(resto, mas90, menos60)
  //console.log(myChart.data.datasets[0])
  myChart.data['datasets'][0].data.push(mas90)
  myChart.data['datasets'][0].data.push(menos60)
  myChart.data['datasets'][0].data.push(resto)
  myChart.update()
}