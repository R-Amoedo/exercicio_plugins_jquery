$(document).ready(function(){
    $('#cep').mask('00000-000');
    $('#cpf').mask('000.000.000-00', {reverse: true});
    $('#telefone').mask('(00) 00000-0000');

    $('#form').validate({
        debug: true,
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereço: {
                required: true
            }
            ,
            cep: {
                required: true
            },
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposincorretos = validador.numberOfInvalids();
            if (camposincorretos) {
                alert(`Existem ${camposincorretos} campos incorretos`)
            }
        }
    })
});