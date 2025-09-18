const boton = document.getElementById("CambiarTema")
const body = document.querySelector("body")

const temaGuardado = localStorage.getItem("tema")
if(temaGuardado === "oscuro"){
    body.classList.add("oscuro")
}

boton.addEventListener("click", function(){
    body.classList.toggle("oscuro"); //.toggle("nombreClase") si la clase está puesta, la quita; si no está, la agrega

    if(body.classList.contains("oscuro")){ //seguarda en el localstorage el tema actual
        localStorage.setItem("tema", "oscuro")
    } else{
        localStorage.setItem("tema", "claro")
    }
})
