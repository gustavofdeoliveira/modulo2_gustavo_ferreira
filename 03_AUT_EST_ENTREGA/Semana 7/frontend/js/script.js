window.onload = function () {
    $.get("/getDados", function(resultado){
        $('#name').html(resultado[0].name);
        $('#email').html(resultado[0].email);
        $('#phone').html(resultado[0].phone);
    });
    
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

let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled' || darkMode == null) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', null);
}

if (darkMode === 'enabled') {
    enableDarkMode();
}