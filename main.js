
function enviarFormulario(){

let dia = parseInt(document.getElementById('dia').value);
let mes = parseInt(document.getElementById('mes').value);
let año = parseInt(document.getElementById('año').value);


let fechaNacimiento = new Date(año, mes - 1, dia);
let fechaActual = new Date();
let diferencia = fechaActual - fechaNacimiento;

let regex = /^[^+{}\[\]:;?!¡!-]*$/;

    if (!regex.test(dia) || !regex.test(mes) || !regex.test(año) || dia < 1 || dia > 31 || mes < 1 || mes > 11 || año < 1900 || año > 2099) {
        document.getElementById('error').innerText = "Por favor, ingresa una fecha válida.";
        document.getElementById('result-año').innerText = "--";
        document.getElementById('result-mes').innerText ="--";
        document.getElementById('result-dia').innerText = "--";
        return;
    } else{

let años = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25));

let fechaNacimientoEsteAño = new Date(fechaActual.getFullYear(), mes - 1, dia);

if (fechaActual < fechaNacimientoEsteAño) {
    fechaNacimientoEsteAño.setFullYear(fechaActual.getFullYear());
}

let meses = fechaActual.getMonth() - fechaNacimientoEsteAño.getMonth();
if (meses < 0) {
    meses += 12;
}

let dias = fechaActual.getDate() - fechaNacimientoEsteAño.getDate();
if (dias < 0) {
    var ultimoDiaMesAnterior = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 0).getDate();
    dias += ultimoDiaMesAnterior;
}

if(isNaN(dias) || isNaN(meses) || isNaN(años)){
    document.getElementById('result-año').innerText = "--";
    document.getElementById('result-mes').innerText ="--";
    document.getElementById('result-dia').innerText = "--";
} else{

    document.getElementById('result-año').innerText = años;
    document.getElementById('result-mes').innerText = meses;
    document.getElementById('result-dia').innerText = dias;
}
}
}
