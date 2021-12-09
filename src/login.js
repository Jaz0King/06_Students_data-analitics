let entrar = document.getElementById('botonEntrar')

entrar.addEventListener('click', () =>{
    usuario= document.getElementById('inputP1').value
    contraseña= document.getElementById('inputP2').value
    video = document.getElementById('login')
    console.log(usuario,contraseña)
    if(usuario=="directora" && contraseña=="123") {
        window.location.href = "./sucursales.html"
    } else {
        //alert("Usuario y/o contraseña incorrectos")
        
        video.innerHTML = `
            <img id="tronchaToro" src="../assets/imágenes/directora.jpeg">
            <audio autoplay><source src="../assets/audio/palabraMágica.ogg" type="video/mp4"></audio>
            `
        console.log(error)

    }
})
