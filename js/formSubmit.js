
async function sendToServer(event)
{
    var form = document.getElementById("formulario");
    var consulta;
    consulta.nombre = getElementById("firstname").value
    consulta.apellido   = getElementById("lastname").value
    consulta.pais       = getElementById("country").value
    consulta.tipoDoc    = getElementById("identificacion").value === "1" ? "dni" : "pasaporte"
    consulta.numDoc     = getElementById("documentacion").value
    consulta.edad       = getElementById("edad").value
    consulta.email      = getElementById("mail").value
    consulta.tel        = getElementById("numberTel").value
    consulta.genero     = getElementById("genderbox").value
    consulta.tipoConsul = getElementById("consultabox").value
    consulta.textoConsul= getElementById("comentario").value
    event.preventDefault();
    var conjson = JSON.stringify(consulta)
    const response = await fetch('http://localhost:3000/submission', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: conjson
            });
}

form.addEventListener("submit", sendToServer)
