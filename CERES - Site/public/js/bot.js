function selecao3() {
    // msg1.style.display = "none";
    msg2.style.display = "block";
    descMsg.innerHTML = "Estou com outro problema/dúvida";
    msg3.style.display = "block";
    descMsg2.innerHTML = "Iremos te encaminhar para um formulário de chamado. <br> Por favor, preencha todos os campos";
    select1.style.display = "none";
    select2.style.display = "none";
    select3.style.display = "none";
    select4.style.display = "flex";
    botMain.scrollTo(0,1000);
}

function irForm(){
    window.location = "../suporte.html";
}