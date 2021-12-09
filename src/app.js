//Botonoes de las 3 sedes del bootcam que dirigen al datadashboard de cada sede
let ajusco = document.getElementById('sAju')
let iztapalapa = document.getElementById('sIzt')
let chapultepec = document.getElementById('sCha')
//Al dar click en el botón de la sede se guarda el valor de la sede en el almacenaje local en el navegador
ajusco.addEventListener('click', () =>{
    console.log('ajusco')
    let data = "ajusco"
    localStorage.setItem('objectToPass',data)
    window.location.href = "./index.html"
})
iztapalapa.addEventListener('click', () =>{
    console.log('iztapalapa')
    let data = "iztapalapa"
    localStorage.setItem('objectToPass',data)
    window.location.href = "./index.html"
})
chapultepec.addEventListener('click', () =>{
    console.log('chapultepec')
    let data = "chapultepec"
    localStorage.setItem('objectToPass',data)
    window.location.href = "./index.html"
})