/**
 * Cambia la sección visible según el botón presionado
 * @param {string} idTema - El ID de la sección que se desea mostrar
 */
function mostrarTema(idTema) {
    // Ocultar todas las secciones
    document.querySelectorAll('.tema').forEach(seccion => {
        seccion.classList.remove('active');
    });
    // Mostrar la sección elegida
    document.getElementById(idTema).classList.add('active');
}


/**
 * Calculadora de MRU: resuelve d = v * t
 */
document.getElementById('btn-calcular-mru').addEventListener('click', function() {
    const dVal = parseFloat(document.getElementById('distancia').value);
    const uD = parseFloat(document.getElementById('unidadDistancia').value);
    const v = parseFloat(document.getElementById('velocidad').value);
    const tVal = parseFloat(document.getElementById('tiempo').value);
    const uT = parseFloat(document.getElementById('unidadTiempo').value);
    const res = document.getElementById('texto-resultado-mru');


    // Convertir a unidades base (metros y segundos) para calcular
    let d = dVal * uD;
    let t = tVal * uT;


    if (isNaN(d) && !isNaN(v) && !isNaN(t)) {
        // Calcula Distancia y reconvierte a la unidad del select
        res.innerHTML = `Distancia: <strong>${((v * t) / uD).toFixed(2)}</strong> unidades.`;
    } else if (isNaN(v) && !isNaN(d) && !isNaN(t)) {
        // Calcula Velocidad
        res.innerHTML = t !== 0 ? `Velocidad: <strong>${(d / t).toFixed(2)} m/s</strong>` : " Tiempo no puede ser 0";
    } else if (isNaN(t) && !isNaN(d) && !isNaN(v)) {
        // Calcula Tiempo y reconvierte a la unidad del select
        res.innerHTML = v !== 0 ? `Tiempo: <strong>${((d / v) / uT).toFixed(2)}</strong> unidades.` : " Velocidad no puede ser 0";
    } else {
        res.innerHTML = " Deja vacío solo el campo que quieres hallar.";
    }
});


/**
 * Calculadora de MRUA: resuelve vf = v0 + (a * t)
 */
document.getElementById('btn-calcular-mrua').addEventListener('click', function() {
    const v0 = parseFloat(document.getElementById('v0_mrua').value);
    const a = parseFloat(document.getElementById('a_mrua').value);
    const t = parseFloat(document.getElementById('t_mrua').value);
    const res = document.getElementById('texto-resultado-mrua');


    if (!isNaN(v0) && !isNaN(a) && !isNaN(t)) {
        const vf = v0 + (a * t);
        res.innerHTML = `Velocidad Final (v_f): <strong>${vf.toFixed(2)} m/s</strong>`;
    } else {
        res.innerHTML = " Llena todos los campos para calcular.";
    }
});/**
 * Cambia la sección visible según el botón presionado
 * @param {string} idTema - El ID de la sección que se desea mostrar
 */
function mostrarTema(idTema) {
    // Ocultar todas las secciones
    document.querySelectorAll('.tema').forEach(seccion => {
        seccion.classList.remove('active');
    });
    // Mostrar la sección elegida
    document.getElementById(idTema).classList.add('active');
}


/**
 * Calculadora de MRU: resuelve d = v * t
 */
document.getElementById('btn-calcular-mru').addEventListener('click', function() {
    const dVal = parseFloat(document.getElementById('distancia').value);
    const uD = parseFloat(document.getElementById('unidadDistancia').value);
    const v = parseFloat(document.getElementById('velocidad').value);
    const tVal = parseFloat(document.getElementById('tiempo').value);
    const uT = parseFloat(document.getElementById('unidadTiempo').value);
    const res = document.getElementById('texto-resultado-mru');


    // Convertir a unidades base (metros y segundos) para calcular
    let d = dVal * uD;
    let t = tVal * uT;


    if (isNaN(d) && !isNaN(v) && !isNaN(t)) {
        // Calcula Distancia y reconvierte a la unidad del select
        res.innerHTML = `Distancia: <strong>${((v * t) / uD).toFixed(2)}</strong> unidades.`;
    } else if (isNaN(v) && !isNaN(d) && !isNaN(t)) {
        // Calcula Velocidad
        res.innerHTML = t !== 0 ? `Velocidad: <strong>${(d / t).toFixed(2)} m/s</strong>` : " Tiempo no puede ser 0";
    } else if (isNaN(t) && !isNaN(d) && !isNaN(v)) {
        // Calcula Tiempo y reconvierte a la unidad del select
        res.innerHTML = v !== 0 ? `Tiempo: <strong>${((d / v) / uT).toFixed(2)}</strong> unidades.` : " Velocidad no puede ser 0";
    } else {
        res.innerHTML = " Deja vacío solo el campo que quieres hallar.";
    }
});


/**
 * Calculadora de MRUA: resuelve vf = v0 + (a * t)
 */
document.getElementById('btn-calcular-mrua').addEventListener('click', function() {
    const v0 = parseFloat(document.getElementById('v0_mrua').value);
    const a = parseFloat(document.getElementById('a_mrua').value);
    const t = parseFloat(document.getElementById('t_mrua').value);
    const res = document.getElementById('texto-resultado-mrua');


    if (!isNaN(v0) && !isNaN(a) && !isNaN(t)) {
        const vf = v0 + (a * t);
        res.innerHTML = `Velocidad Final (v_f): <strong>${vf.toFixed(2)} m/s</strong>`;
    } else {
        res.innerHTML = " Llena todos los campos para calcular.";
    }
});