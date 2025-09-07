const nombre = document.getElementById("firstname")
const apellido = document.getElementById("lastname")
const email = document.getElementById("email")

const mensajeNombre = nombre.nextElementSibling //busca donde tiene que poner el mensaje y lo pone en el elemento hermano
const mensajeApellido = apellido.nextElementSibling
const mensajeEmail = email.nextElementSibling

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

nombre.addEventListener('input', () =>{
    validarCampo(nombre, mensajeNombre, val => val !== "", "Nombre obligatorio")//se valda mientras se escrbe
}) //falatria validar que sean letras

apellido.addEventListener('input', () => {
    validarCampo(apellido, mensajeApellido, val => val !== "", "Apellido obligatorio")
})

email.addEventListener('input', () => {
    validarCampo(email, mensajeEmail,
        val => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val), //regex que comprueba si el email tiene un formato correcto.
        "Email inválido"
    )
})