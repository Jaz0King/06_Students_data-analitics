
let entrar = document.getElementById('botonEntrar')
//Al momento de dar click en el botón entrar se ejecuta la función
entrar.addEventListener('click', () =>{
    usuario= document.getElementById('inputP1').value
    contraseña= document.getElementById('inputP2').value
    video = document.getElementById('login')
    console.log(usuario,contraseña)
// Y se redirige a la página de sucursales del bootcamp    
    if(usuario=="directora" && contraseña=="123") {
        window.location.href = "./sucursales.html"
//Si no es el "id" y la "contraseña" reproducirá un audio y se mostrara la imagen de la directora        
    } else {    
        video.innerHTML = `
            <img id="tronchaToro" src="../assets/imágenes/directora.jpeg">
            <audio autoplay><source src="../assets/audio/palabraMágica.ogg" type="video/mp4"></audio>
            `
        console.log(error)
    }
})
