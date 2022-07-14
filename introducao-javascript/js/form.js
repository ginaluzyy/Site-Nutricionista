var ul = document.querySelector("#mensagens-erro");
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);  // extraindo form dos pacientes no html

    //retornando msg de erro se peso e altura invalidos
    var erros = validaPaciente(paciente);
    if(erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }
    adicionaPacienteNaTabela(paciente)

    //adicionando paciente na tabela

    form.reset();
    ul.innerHTML ="";
});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);  //cria tr e td do paciente para o html
var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}



function exibeMensagensDeErro(erros){
    ul.innerHTML ="";

    erros.forEach(function(erro){          //foreach percorre lista arrays
        var li =document.createElement("li")
        li.textContent = erro;
        ul.appendChild(li)
    })
}






function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc (form.peso.value, form.altura.value)
    }
    return paciente;
}




//criando os apendices do formulario
function montaTr (paciente) { 
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd (paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd (paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd (paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd (paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd (paciente.imc, "info-imc"));
    return pacienteTr;
}

//criando classes dos novos formularios
function montaTd (dado, classe) {  
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}




// verificando se peso e altura inseridos são validos E RETORNANDO O ERRO PARA --> ERROS
function validaPaciente(paciente){

    var erros = [];  //criando um array de erros

    if(!validaPeso(paciente.peso) || paciente.peso.length == 0) 
    erros.push("Valor de Peso é inválido!");  //.push --> puxa uma mensagem para dentro do array
    
    if(!validaAltura(paciente.altura) || paciente.altura.length == 0 ) 
    erros.push("Valor de Altura é inválida!");

    if(paciente.nome.length == 0 ){
        erros.push("Valor de Nome é inválido!");  
    }  
    if(paciente.gordura.length == 0){
        erros.push("Valor de Gordura é inválido!");  
    }   
    
    return erros;
}

