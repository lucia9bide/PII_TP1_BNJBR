const nombre = document.getElementById("firstname")
const apellido = document.getElementById("lastname")
const email = document.getElementById("email")
const edad = document.getElementById("edad")
const telefono = document.getElementById("numberTel")
const comentario = document.querySelector("textarea[name='comentario']")

const mensajeNombre = nombre.nextElementSibling //busca donde tiene que poner el mensaje y lo pone en el elemento hermano
const mensajeApellido = apellido.nextElementSibling
const mensajeEdad = edad.nextElementSibling
const mensajeEmail = email.nextElementSibling
const mensajeTelefono = telefono.nextElementSibling
const mensajeComentario = comentario.nextElementSibling

//funcon para valdar todo
function validarCampo(input, mensajeElemento, condicion, mensajeError) {
    if (condicion(input.value.trim())) //toma el valor que escribió el usuario y quita los espacios al inicio y al final, para no marcar error si solo escribió un espacio
    {
        mensajeElemento.textContent = 'Correcto'
        mensajeElemento.style.color = 'green'
    } else {
        mensajeElemento.textContent = mensajeError
        mensajeElemento.style.color = 'red'
    }
}

nombre.addEventListener('input', () => {
    validarCampo(
        nombre, 
        mensajeNombre, 
        val => /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(val), 
        "Nombre inválido, solo puede contener letras"
    )
})

apellido.addEventListener('input', () => {
    validarCampo(
        apellido, 
        mensajeApellido, 
        val => /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(val), 
        "Apellido inválido, solo puede contener letras"
    )
})

edad.addEventListener("input", () => {
    validarCampo(
        edad,
        mensajeEdad,
        val => val !== "" && val >= 1 && val <= 100,
        "Ingrese una edad válida (1-100)"
    )
})

email.addEventListener('input', () => {
    validarCampo(email, mensajeEmail,
        val => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val), //regex que comprueba si el email tiene un formato correcto.
        "Email inválido"
    )
})

telefono.addEventListener("input", () => {
    validarCampo(
        telefono,
        mensajeTelefono,
        val => /^[\d\s-]{7,15}$/.test(val),
        "Teléfono inválido (solo números, 7 a 15 dígitos)"
    )
})

comentario.addEventListener("input", () => {
    validarCampo(
        comentario,
        mensajeComentario,
        val => val.length >= 10 && val.length <= 300,
        "El comentario debe tener entre 10 y 300 caracteres"
    )
})