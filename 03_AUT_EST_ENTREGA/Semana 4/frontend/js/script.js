window.onload = function () {
    var duration = 3; // Converter para segundos
    document.getElementById("curriculo").style.display = 'none';
    document.getElementById("loader").style.display = 'flex';
    startTimer(duration); // iniciando o timer
}

function startTimer(duration) {
    var timer = duration, seconds;
    var setIntervalo = setInterval(function () {
        seconds = parseInt(timer % 60, 10);
        if (--timer <= 0) {
            clearInterval(setIntervalo);
            document.getElementById("curriculo").style.display = 'block';
            document.getElementById("loader").style.display = 'none';
        }
    }, 1000);
}