

let btnTema = document.getElementById("btnTema");
let body = document.body;

function modo(){
     body.classList.toggle("oscuro");

    // Cambiar icono en ambos botones
    if (body.classList.contains("oscuro")) {
        btnTemaCompu.textContent = "Oscuro";
        btnTemaCelu.textContent = "Oscuro";
    } else {
        btnTemaCompu.textContent = "Claro";
        btnTemaCelu.textContent = "Claro";
    }
}

btnTemaCompu.addEventListener('click', modo)
btnTemaCelu.addEventListener('click',modo)

let btnProximamente1 = document.getElementById('btnProx1');
let btnProximamente2 = document.getElementById('btnProx2');
function noDisponible()
{
    alert('Estamos trabajando en este proyecto...')
}
btnProximamente1.addEventListener('click', noDisponible)
btnProximamente2.addEventListener('click', noDisponible)

let btnForm = document.getElementById('btnFormulario');
function formNoDisponible(){
    alert('Esta función no está disponible')
}
btnForm.addEventListener('click', formNoDisponible)
