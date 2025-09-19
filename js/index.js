const boton = document.getElementById("CambiarTema")
const body = document.querySelector("body")

const temaGuardado = localStorage.getItem("tema")
if (temaGuardado === "oscuro") {
    body.classList.add("oscuro")
}

boton.addEventListener("click", function () {
    body.classList.toggle("oscuro"); //.toggle("nombreClase") si la clase está puesta, la quita; si no está, la agrega

    if (body.classList.contains("oscuro")) { //seguarda en el localstorage el tema actual
        localStorage.setItem("tema", "oscuro")
    } else {
        localStorage.setItem("tema", "claro")
    }
})

const imagenes = document.querySelector('.imagenes')
const btnAnterior = document.getElementById('anterior')
const btnSiguiente = document.getElementById('siguiente')
const indicador = document.getElementById('indice')

let indiceActual = 0;

const totalImagenes = document.querySelectorAll('.imagenes img').length

const nombres = ["París", "Roma", "Rio De Janeiro"];
const descripciones = [
    "La ciudad es uno de los principales destinos turísticos del mundo, con una amplia variedad de restaurantes, bares, discotecas y teatros. También alberga numerosas galerías de arte, museos y exhibiciones.",
    "Es uno de los principales centros turísticos de Italia y Europa, es famosa por sus muchos monumentos y museos, entre los que se cuentan el Coliseo, la Catedral de San Pablo, el Museo Vaticano, la Basílica de San Pedro, el Palacio de los Papas en el Vaticano, entre muchos otros",
    "Rio de Janeiro es conocida en todo el mundo por su increíble naturaleza: mar, playas, montañas y selvas tropicales forman un deslumbrante paisaje que se entrelaza con iconos creados por el hombre como el Cristo del Corcovado o el mirador del Pan de Azúcar.",
    
];

function actualizarCarrusel() {
    imagenes.style.transform = `translateX(-${indiceActual * 100}%)`;
    indicador.textContent = indiceActual + 1;

    document.getElementById('nombreImagen').textContent = nombres[indiceActual];
    document.getElementById('descripcionImagen').textContent = descripciones[indiceActual];
}
btnSiguiente.addEventListener('click', function (){
    indiceActual = (indiceActual + 1) % totalImagenes
    actualizarCarrusel()
});
btnAnterior.addEventListener('click', function (){
    indiceActual = (indiceActual - 1 + totalImagenes) % totalImagenes
    actualizarCarrusel()
});