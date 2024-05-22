let valor = document.querySelector("#valor")
        range.addEventListener('input', function(){
            valor.innerHTML = range.value
        })

        //email

document.addEventListener("DOMContentLoaded", function(e){
    //declarando as variaveis
        const email =document.querySelector(".info-email");
        const mensagem = document.querySelector(".mensagem")

        //Oculta a mensagem e adciona a classe Hidden
        mensagem.classList.add("hidden");


    email.addEventListener('keyup', function(e){
   //verifica se a tecla Enter foi pressionada
   if(e.keyCode === 13){
    //controla o comportamento do evento Ex.  não envia os dados formularios
    e.preventDefault();
    
    //Exibe a mensagem e remove a classe hidden
    mensagem.classList.remove("hidden");
    //oculta o campo email
    email.style.display="none";
    //limpa o campo email
    email.value="";
    
}
})
})