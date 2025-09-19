
var form = document.getElementById("formulario");
async function sendToServer(event)
{
    var consulta = {};
    consulta.nombre     = document.getElementById("firstname").value
    consulta.apellido   = document.getElementById("lastname").value
    consulta.pais       = document.getElementById("country").value
    consulta.tipoDoc    = document.getElementById("identificacion").value === "1" ? "dni" : "pasaporte"
    consulta.numDoc     = document.getElementById("documentacion").value
    consulta.edad       = document.getElementById("edad").value
    consulta.email      = document.getElementById("mail").value
    consulta.tel        = document.getElementById("numberTel").value
    consulta.genero     = document.getElementById("genderbox").value
    consulta.tipoConsul = document.getElementById("consultabox").value
    consulta.textoConsul= document.getElementById("comentario").value
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
