let ajusco = document.getElementById('sAju')
let iztapalapa = document.getElementById('sIzt')
let chapultepec = document.getElementById('sCha')
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