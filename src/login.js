let entrar = document.getElementById('botonEntrar')

entrar.addEventListener('click', () =>{
    usuario= document.getElementById('inputP1').value
    contraseña= document.getElementById('inputP2').value
    console.log(usuario,contraseña)
    if(usuario=="director" || contraseña=="123") {
        window.location.href = "./sucursales.html"
    } else {
        alert("Usuario y/o contraseña incorrectos")
    }
})
    
    