//Se declara una variable con un arreglo vacío para almacenar los datos del fetch
let arr = []
introAudio ()

//Se exportan las funciones a utilizar a index.js
export function estudiantes(sede, gen) {
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
//Vaciamos los datos del json en la variable "arr" que contiene el arreglo vacío 
function traerDatos(data) {
  arr = data
}
//Función para obtener el número de alumnos por generación de la sede
export function studentsNumber(sede, gen) {
  let num = document.getElementById('numeroAlumnos')
  num.innerHTML = `<h6>Alumnos:</h6>`
  num.innerHTML += arr[sede].generacion[gen].estudiantes.length
}
//Función para obtener el progreso promedio por genración de la sede
export function porcentage(sede, gen) {
  let x = 0;
  for (let i = 0; i < arr[sede].generacion[gen].estudiantes.length; i++) {
    x += arr[sede].generacion[gen].estudiantes[i].progreso.porcentajeCompletado
  }
  //Se divide a suma del porcentage de cada alumna entre el número de alumnas
  x = x / (arr[sede].generacion[gen].estudiantes.length)
  let porc = document.getElementById('porcentaje')
  porc.innerHTML = `<h6>Porcentaje promedio completado:</h6>`
  porc.innerHTML += x
}
//Función para obtener y renderear alumnas con menos del 60% del curso completado
export function alumnosMenosSesenta(sede, gen) {
  let menos60 = document.getElementById('menos60')
  menos60.innerHTML = `<h6>Alumnos menos 60:</h6>`
  for (let i = 0; i < arr[sede].generacion[gen].estudiantes.length; i++) {
    //Checa alumna por alumna si su porcentaje completado es menor a 60%
    if (arr[sede].generacion[gen].estudiantes[i].progreso.porcentajeCompletado <= 60) {
      //Si es menor a 60% lo renderea en el html
      menos60.innerHTML += arr[sede].generacion[gen].estudiantes[i].nombre + `<br>`
    } else { }
  }
}
//Función para obtener y renderear alumnas con mas del 90% del curso completado
export function alumnosMasNoventa(sede, gen) {
  let mas90 = document.getElementById('mas90')
  mas90.innerHTML = `<h6>Alumnos mas 90:</h6>`
  for (let i = 0; i < arr[sede].generacion[gen].estudiantes.length; i++) {
    //Checa alumna por alumna si su porcentaje completado es mayor a 90%
    if (arr[sede].generacion[gen].estudiantes[i].progreso.porcentajeCompletado >= 90) {
      //Si es mayor a 90% lo renderea en el html
      mas90.innerHTML += arr[sede].generacion[gen].estudiantes[i].nombre + `<br>`
    } else { }
  }
}
//Funcion para obtener información del avance de temas y subtemas de cada alumna
function pTemas(sede, gen, id, temas) {
  let temasYSub = document.getElementById(id)
  //Se inicializan las variables vacias para concatenar la información de cada tema
  let tema1 = ''
  let tema2 = ''
  let tema3 = ''
  //Se obtiene la información de cada tema 
  for (const tema in temas) {
    // Se declaran variables para guardar los valores y las llaves de cada tema en un arreglo 
    let valores = Object.values(temas[tema].subtemas)
    let claves = Object.keys(temas[tema].subtemas)
    //Se compara cada tema y se guardan los valores en una cadena de caracteres en las variables vacias
    for (let i = 0; i < valores.length; i++) {
      if (tema == "01-Introduccion-a-programacion") {
        //Se guardan los valores de cada subtema
        tema1 += `<strong>   ${claves[i]}</strong><br>`
        tema1 += `Completado: ${valores[i].completado}<br>`
        tema1 += `DuracionSubTema: ${valores[i].duracionSubtema}<br>`
        tema1 += `Tipo: ${valores[i].tipo}<br>`
      } else {
        if (tema == "02-Variables-y-tipo-de-datos") {
          tema2 += `<strong>   ${claves[i]}</strong><br>`
          tema2 += `Completado: ${valores[i].completado}<br>`
          tema2 += `DuracionSubTema: ${valores[i].duracionSubtema}<br>`
          tema2 += `Tipo: ${valores[i].tipo}<br>`
        } else {
          tema3 += `<strong>   ${claves[i]}</strong><br>`
          tema3 += `Completado: ${valores[i].completado}<br>`
          tema3 += `DuracionSubTema: ${valores[i].duracionSubtema}<br>`
          tema3 += `Tipo: ${valores[i].tipo}<br>`
        }
      }
    }
  }

  //Se renderea dinamicamente la información de Temas y Subtemas en un acordion dentro del modal en el html
  //Se llaman los id´s dinámicos para renderear la información de temas y subtemas de cada alumna
  temasYSub.innerHTML = `
  <div class="accordion" id="accordionExample1${id}">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne${id}">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne${id}" aria-expanded="false" aria-controls="collapseOne${id}">
        Introduccion-a-programacion ${temas["01-Introduccion-a-programacion"].porcentajeCompletado}% ${temas["01-Introduccion-a-programacion"].duracionTemaCompletado}/${temas["01-Introduccion-a-programacion"].duracionTema}
      </button>
    </h2>
    <div id="collapseOne${id}" class="accordion-collapse collapse" aria-labelledby="headingOne${id}" data-bs-parent="#accordionExample1${id}">
      <div class="accordion-body">
      ${tema1}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo${id}">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo${id}" aria-expanded="false" aria-controls="collapseTwo${id}">
        Variables-y-tipo-de-datos ${temas["02-Variables-y-tipo-de-datos"].porcentajeCompletado}% ${temas["02-Variables-y-tipo-de-datos"].duracionTemaCompletado}/${temas["02-Variables-y-tipo-de-datos"].duracionTema}
      </button>
    </h2>
    <div id="collapseTwo${id}" class="accordion-collapse collapse" aria-labelledby="headingTwo${id}" data-bs-parent="#accordionExample1${id}">
      <div class="accordion-body">
      ${tema2}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree${id}">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree${id}" aria-expanded="false" aria-controls="collapseThree${id}">
        UX ${temas["03-UX"].porcentajeCompletado}% ${temas["03-UX"].duracionTemaCompletado}/${temas["03-UX"].duracionTema}
      </button>
    </h2>
    <div id="collapseThree${id}" class="accordion-collapse collapse" aria-labelledby="headingThree${id}" data-bs-parent="#accordionExample1${id}">
      <div class="accordion-body">
      ${tema3}
      </div>
    </div>
  </div>
</div>
  `
}
//Función para filtrar por temas completados y no completados
function pCompletado(sede, gen, id, temas) {
  let completadoYnoCompletado = document.getElementById(id)
  let completadoString = ''
  let noCompletadoString = ''
  for (const tema in temas) {
    let valores = Object.values(temas[tema].subtemas)
    let claves = Object.keys(temas[tema].subtemas)
    for (let i = 0; i < valores.length; i++) {
      if (valores[i].completado == 1) {
        completadoString += claves[i] + '<br>'
      } else {
        noCompletadoString += claves[i] + '<br>'
      }
    }
  }
  //Se renderea dinámicamente la información de temas completados y no completdos
  completadoYnoCompletado.innerHTML += `
  <div class="accordion" id="accordionCompletadoYNo${id}">
    <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour${id}">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour${id}" aria-expanded="false" aria-controls="collapseFour${id}">
        Completados
      </button>
    </h2>
    <div id="collapseFour${id}" class="accordion-collapse collapse" aria-labelledby="headingTwo${id}" data-bs-parent="#accordionCompletadoYNo${id}">
      <div class="accordion-body">
        ${completadoString}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFive${id}">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive${id}" aria-expanded="false" aria-controls="collapseFive${id}">
        No completados
      </button>
    </h2>
    <div id="collapseFive${id}" class="accordion-collapse collapse" aria-labelledby="headingThree${id}" data-bs-parent="#accordionCompletadoYNo${id}">
      <div class="accordion-body">
        ${noCompletadoString}
      </div>
    </div>
  </div>
</div>
  `
}
//Función para obtener la información de tipos de subtemas
function sTipo(sede, gen, id, temas) {
  //Se inicializan las variables vacias para concatenar la información de cada subtema
  let tipos = document.getElementById(id)
  let ejercicio = ' '
  let lectura = ' '
  let quiz = ' '
  //Se obtiene la información de cada tema 
  for (const tema in temas) {
    // Se declaran variables para guardar los valores y las llaves de cada subtema en un arreglo 
    let valores = Object.values(temas[tema].subtemas)
    let claves = Object.keys(temas[tema].subtemas)
    //Se guardan los valores de cada tipo de subtema
    for (let i = 0; i < valores.length; i++) {
      if (valores[i].tipo == 'lectura') {
        lectura += claves[i] + '<br>'
      } else {
        if (valores[i].tipo == 'ejercicio') {
          ejercicio += claves[i] + '<br>'
        } else {
          quiz += claves[i] + '<br>'
        }
      }
    }
  }
  //Se renderea dinámicamente la información de tipos de subtemas
  tipos.innerHTML += `
<div class="accordion" id="accordionExample${id}">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingUno${id}">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseUno${id}" aria-expanded="false" aria-controls="collapseUno${id}">
       Lecturas 
      </button>
    </h2>
    <div id="collapseUno${id}" class="accordion-collapse collapse" aria-labelledby="headingUno${id}" data-bs-parent="#accordionExample${id}">
      <div class="accordion-body">
      ${lectura}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingDos${id}">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDos${id}" aria-expanded="false" aria-controls="collapseDos${id}">
        Ejercicios
      </button>
    </h2>
    <div id="collapseDos${id}" class="accordion-collapse collapse" aria-labelledby="headingDos${id}" data-bs-parent="#accordionExample${id}">
      <div class="accordion-body">
      ${ejercicio}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTres${id}">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTres${id}" aria-expanded="false" aria-controls="collapseTres${id}">
        Quizzes
      </button>
    </h2>
    <div id="collapseTres${id}" class="accordion-collapse collapse" aria-labelledby="headingTres${id}" data-bs-parent="#accordionExample${id}">
      <div class="accordion-body">
      ${quiz}
      </div>
    </div>
  </div>
</div>
  `
}

//Función para buscar por nombre de alumnas 
export function busquedaAlumnos(sede, gen) {
  let estudiantes = arr[sede].generacion[gen].estudiantes
  //Se ordenan alfabeticamente las alumnas rendereadas
  estudiantes.sort(function (a, b) {
    let nameA = a.nombre.toLowerCase()
    let nameB = b.nombre.toLowerCase()
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }
    return 0
  })
  //Se renderean dinamicamente las cards por alumna 
  let modalDiv = document.getElementById('modalDiv')
  let nombres = document.getElementById('nombres')
  //Se declaran las varibles y rnderean vacias para limpiar las cards y los modales por alumna
  nombres.innerHTML = ''
  modalDiv.innerHTML = ''
  let entrada = document.getElementById('busqueda').value.toLowerCase()
  for (let i = 0; i < arr[sede].generacion[gen].estudiantes.length; i++) {
    let nombre = (arr[sede].generacion[gen].estudiantes[i].nombre).toLowerCase()
    //Se compara el nombre de la alumna con el valor ingresado en la busqueda por nombre y renderea la card y el modal
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
      //Se renderea el modal con la información de temas, subtemas, duración y completitud por alumna 
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
      //Se llaman las funicones para obtener los valores y renderearlos en la card y el modal
      pTemas(sede, gen, `${i}temas`, arr[sede].generacion[gen].estudiantes[i].progreso.temas)
      pCompletado(sede, gen, `${i}completados`, arr[sede].generacion[gen].estudiantes[i].progreso.temas)
      sTipo(sede, gen, `${i}tipo`, arr[sede].generacion[gen].estudiantes[i].progreso.temas)
    }
  }
  //En caso de no encontrar coincidencias por el nombre ingresado se muestra nombre o encontrado
  if (nombres.innerHTML === '') {
    nombres.innerHTML += `<li>Nombre no encontrado</li>`
  }
}

//Funciones para los efectos de sonido
function introAudio () {
  const audioIntro = document.getElementById("intro")
  audioIntro.volume = 0.8;
  audioIntro.play()
}

//Se declaran las variables para expresar los valores en una gráfica dentro del html
export const ctx = document.getElementById("myChart").getContext("2d");
export const myChart = new Chart(ctx, {
  type: "pie",
  data: {

    datasets: [
      {
        label: "Estudiantes",
        data: [12, 19, 2],
        backgroundColor: [
          "rgba(200, 3, 255, .7)",
          "rgba(1, 255, 1, .7)",
          "rgba(255, 255, 0, .7)"

        ],
        borderColor: [
          "#fff",
          "#fff",
          "#fff"
        ],
        color: "#000",
        borderSadow: 1,
      },
    ],
    labels: ["Mas 90 %", "Menos 60 %", "Entre 60 y 90 %"],
  },
  options: {
    responsive: false,
    plugins: {
      legend: {
        labels: {
          font: {
            size: 15
          },
          color: 'white'
        }
      }
    }
  },
});

//Se renderea la gráfica en el html 
export function renderGraph(sede, gen) {
  //Se limpian los datos de la gráfica para volver a graficar
  myChart.data.datasets[0].data = []
  //Se declaran las variables para reutilizar los valores
  let total = arr[sede].generacion[gen].estudiantes.length
  let mas90 = 0
  let menos60 = 0
  //Se compara alumna por alumna si tiene de completitud  menos 
  for (let i = 0; i < arr[sede].generacion[gen].estudiantes.length; i++) {
    //de 90% o mas
    if (arr[sede].generacion[gen].estudiantes[i].progreso.porcentajeCompletado > 90) {
      mas90++
    } else {
      //de 60% o menos
      if (arr[sede].generacion[gen].estudiantes[i].progreso.porcentajeCompletado < 60) {
        menos60++
      } else {

      }
    }
  }
  //entre 61% y el 89% de completitud
  let resto = total - mas90 - menos60
  //Se envian los valores a las variables 
  myChart.data['datasets'][0].data.push(mas90)
  myChart.data['datasets'][0].data.push(menos60)
  myChart.data['datasets'][0].data.push(resto)
  myChart.update()
}