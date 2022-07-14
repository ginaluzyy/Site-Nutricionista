var tabela = document.querySelector('table')

//entrando na tabela e excluindo o pai do evento que que foi clicado (imc= o pai é o paciente)
    tabela.addEventListener("dblclick", function(event){
        event.target.parentNode.classList.add("fadeOut")
        setTimeout(function() {  //está pedindo ao js segurar por 500ms a proxima ação
            event.target.parentNode.remove();
        },500)
        
});



/*
pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        console.log("fui clicado 2x!")        
        this.remove();              --> this é o dono do evento, o cara que foi clicado!
    })
})
*/