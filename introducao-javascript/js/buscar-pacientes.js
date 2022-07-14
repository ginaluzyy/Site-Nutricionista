var botaoAdicionar = document.querySelector('#buscar-pacientes')

botaoAdicionar.addEventListener("click", function(){
    console.log("buscando");

    var xhr = new XMLHttpRequest(); //REQUISITANDO UM HTTP DO TIPO XML

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes") //escrevendo o endereço API



    xhr.addEventListener("load", function(){  //load vai ler na pagina atual
        var erroAjax = document.querySelector("#erro-ajax");
        if(xhr.status == 200){
            erroAjax.classList.add("invisivel")
            var resposta = xhr.responseText; //a resposta volta no responseText
            var pacientes = JSON.parse(resposta) //o parse vai converter o JSON em JS
        
            pacientes.forEach( function(paciente){ //percorrendo os pac e add na tabela
                adicionaPacienteNaTabela(paciente)
            });
        } else {
            erroAjax.classList.remove("invisivel")
        }
        
       
    });

    xhr.send(); //enviando os dados
})




/* JSON --> JAVASCRIPT OBJECT NOTATION 
É UMA STRING TRANSPOSTADA TAO PARECDA COM JAVA SCRIPT 
QUE PODE FACILMENTE SER TRANSFORMADA EM ARRAY DE OBJETOS JAVASCRIPT*/