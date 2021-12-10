//Botonoes de las 3 sedes del bootcam que dirigen al datadashboard de cada sede
let ajusco = document.getElementById('sAju')
let iztapalapa = document.getElementById('sIzt')
let chapultepec = document.getElementById('sCha')
//let bcs = document.getElementById('bcs')

//bcs.innerHTML = `<audio autoplay><source src="../assets/audio/bcs.wav" type="video/mp4"></audio>`

//Al dar click en el botón de la sede se guarda el valor de la sede en el almacenaje local en el navegador
ajusco.addEventListener('click', () =>{
    console.log('ajusco')
    let data = "ajusco"
    localStorage.setItem('objectToPass',data)
    window.location.href = "./index.html"
   //ajusco = `<audio autoplay><source src="../assets/audio/ajusco.mp3" type="video/mp4"></audio>`
})
iztapalapa.addEventListener('click', () =>{
    console.log('iztapalapa')
    let data = "iztapalapa"
    localStorage.setItem('objectToPass',data)
    window.location.href = "./index.html"
    //iztapalapa.innerHTML = `<audio autoplay><source src="../assets/audio/iztapalapa.mp3" type="video/mp4"></audio>`
})
chapultepec.addEventListener('click', () =>{
    console.log('chapultepec')
    let data = "chapultepec"
    localStorage.setItem('objectToPass',data)
    window.location.href = "./index.html"
    //chapultepec.innerHTML = `<audio autoplay><source src="../assets/audio/chapultepec.mp3" type="video/mp4"></audio>`
})