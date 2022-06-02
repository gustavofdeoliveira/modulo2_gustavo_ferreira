var api = 'http://127.0.0.1:3061';

window.onload = function () {
    $.get("/getDados", function (resultado) {
        $('#name').html(resultado[0].name);
        $('#email').html(resultado[0].email);
        $('#phone').html(resultado[0].phone);
    });
    metodos.get();
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

/*Modo noturno*/
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

var metodos = {
    insert(name) {
        $.ajax({
            type: 'POST',
            url: api + '/insertLinguagem',
            data: { name: name },
        }).done(function () {
            metodos.get();
        }).fail(function (msg) {
        }).always(function (msg) {
        });

    },
    get() {
        $.ajax({
            url: api + '/getLinguagens',
            type: 'GET',
            success: data => {
                var list = '';
                data.forEach(element => {
                    list += `<li class="d-flex">${element.name}<div class="w-100"><button class="pull-right" id="btn-excluir" onclick="metodos.delete(${element.id})"><i class="fa fa-times" aria-hidden="true"></i></button><button class="pull-right" id="btn-edit" onclick="adicionarLinguagem(${element.id}, '${element.name}')"><i class="fa fa-pencil" aria-hidden="true"></i></button></div></li>`;
                });
                $('#linguagens').html(list);
            }
        });

    },
    delete(id) {

        if (confirm('Confirma a exclusão?')) {
            $.ajax({
                type: 'POST',
                url: api + '/deleteLinguagem',
                data: { id: id },
            }).done(function () {
                metodos.get();
            }).fail(function (msg) {
        
            }).always(function (msg) {
                
            });
        }
    },
    update(id, name) {


        $.ajax({
            type: 'POST',
            url: api + '/updateLinguagem',
            data: { name: name, id: id },
        }).done(function () {
            metodos.get();
        }).fail(function (msg) {
            
        }).always(function (msg) {
            
        });


    },
}

function adicionarLinguagem(id, name) {
    if (name == null) {
        name = '';
    }
    var input = '<div class="input"><div class="d-flex"><input type="text" id="nameLinguagem" value="' + name + '" placeholder="adicionar uma nova"><button class="pull-right" id="btn-excluir" onclick="removerLinguagem(' + id + ')"><i class="fa fa-times"aria-hidden="true"></i></button><button onclick="saveLinguagem(' + id + ')" class="pull-right" id="btn-edit"><i class="fa fa-floppy-o"aria-hidden="true"></i></button></div></div>';
    document.getElementById("input").innerHTML = input;
}

function removerLinguagem() {
    var input = '';
    $("#input").html(input);
}

function saveLinguagem(id) {
    var name = document.getElementById("nameLinguagem").value;
    if (id != null) {
        metodos.update(id, name);
    } else {
        metodos.insert(name);
    }
    removerLinguagem()
}
