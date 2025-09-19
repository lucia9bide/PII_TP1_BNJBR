var consulta.nombre = getElementById("firstname").value
consulta.apellido   = getElementById("lastname").value
consulta.pais       = getElementById("country").value
consulta.tipoDoc    = getElementById("identificacion").value === "1" ? "dni" : "pasaporte"
consulta.numDoc     = getElementById("documentacion").value
consulta.edad       = getElementById("edad").value
// !!!! hay que agregar el id="edad" a esa parte de formulario.html!!! Sino, no lo va a agarrar.
consulta.email      = getElementById("mail").value
consulta.tel        = getElementById("numberTel").value
consulta.genero     = getElementById("genderbox").value
consulta.tipoConsul = getElementById("consultabox").value
consulta.textoConsul= getElementById("comentario").value
// !!!! hay que agregar el id="comentario" a esa parte de formulario.html!!! Sino, no lo va a agarrar.

function sendToServer()
{
    var conjson = JSON.stringify(consulta)
    const response = await fetch('http://localhost:3000/submission', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: conjson
            });
}
