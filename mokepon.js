let ataqueJugador
let ataqueEnemigo
function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click" , seleccionarMascotaJugador)
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)
}
function seleccionarMascotaJugador() {
    let imputHipodoge = document.getElementById("hipodoge")
    let imputCoticon = document.getElementById("coticon")
    let imputRatigueya = document.getElementById("ratigueya")
    let spanMascotaJugador = document.getElementById("mascota-jugador")
    if(imputHipodoge.checked){
        spanMascotaJugador.innerHTML = "Hipodoge"
    }else if(imputCoticon.checked){
        spanMascotaJugador.innerHTML = "Coticon"
    } else if(imputRatigueya.checked){
        spanMascotaJugador.innerHTML = "Ratigueya"
    }  else {
        alert("POR FAVOR SELECCIONA UNA MASCOTA") 
     }
    seleccionarMascotaEnemigo()
}
function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio (1,3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if(mascotaAleatoria == 1){
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    } else if (mascotaAleatoria == 2){
        spanMascotaEnemigo.innerHTML = "Coticon"
    } else {
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    }
}      
function ataqueFuego() {
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO"
    } else if(ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA"
    } else {
        ataqueEnemigo = "TIERRA"
    }
    combate()
}
function combate(){
    // COMBATE 
    if(ataqueEnemigo == ataqueJugador){
        crearMensaje("EMPATE")
    } else if(ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
        crearMensaje("GANASTE")
    } else if(ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
        crearMensaje("GANASTE")
    } else if(ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
        crearMensaje("GANASTE")
    } else {
        crearMensaje("PERDISTE")
    }
}
function crearMensaje(resultado) {
    let sectionMensaje = document.getElementById("mensaje")
        
    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu mascota atacó con "  + ataqueJugador +  ", la mascota del enemigo atacó con " + ataqueEnemigo + ", - " + resultado
    sectionMensaje.appendChild(parrafo)
}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
window.addEventListener("load" , iniciarJuego)
