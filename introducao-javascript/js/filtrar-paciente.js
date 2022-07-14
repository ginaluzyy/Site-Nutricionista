var campoFiltro = document.querySelector('#filtrar-tabela')


campoFiltro.addEventListener("input", function() {
    var pacientes = document.querySelectorAll('.paciente')

    if(this.value.length > 0){
        for( var i = 0; i < pacientes.length ; i++){
            var paciente = pacientes[i]
            var tdNome = paciente.querySelector(".info-nome")
            var nome = tdNome.textContent;
/*expre regular*/var expressao = new RegExp(this.value, "i")//buscando expressao regular maiusc e minusc



            if (!expressao.test(nome)){ //test faz um teste se no nome tem algo da expressao regular
                paciente.classList.add("invisivel");
            } else{
                paciente.classList.remove("invisivel")
            }
        }
    }else {
        for( var i = 0; i < pacientes.length ; i++){
            var paciente = pacientes[i]
            paciente.classList.remove("invisivel")
        }
    }
    }
)