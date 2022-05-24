function outro() {
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
    fecharBot();
    window.location = "../suporte.html";
}

function conta(){
    msg2.style.display = "block";
    descMsg.innerHTML = "Estou tendo problemas com a conta";
    msg3.style.display = "block";
    descMsg2.innerHTML = "Por favor, baixe um PDF com a solução dos principais problemas <a href='../../resources/pdf/Problemas com a conta.pdf' download>clicando aqui</a>, e caso seu problema não tenha sido resolvido clique no botão abaixo 'Abrir chamado'";
    botMain.scrollTo(0,1000);

    select1.style.display = "none";
    select2.style.display = "none";
    select3.style.display = "none";

    select7.style.display = "block";
}

function produto(){
    msg2.style.display = "block";
    descMsg.innerHTML = "Estou tendo problemas com o produto";
    msg3.style.display = "block";
    descMsg2.innerHTML = "O seu problema é referente ao produto (plataforma) ou produto (sensores)?";
    botMain.scrollTo(0,1000);

    select1.style.display = "none";
    select2.style.display = "none";
    select3.style.display = "none";

    select5.style.display = "block";
    select6.style.display = "block";
}

function plataforma(){
    msg4.style.display = "block";
    descMsg4.innerHTML = "Com o produto (plataforma)";
    msg5.style.display = "block";
    descMsg5.innerHTML = "Por favor, baixe um PDF com a solução dos principais problemas <a href='../../resources/pdf/Problemas com a plataforma.pdf' download>clicando aqui</a>, e caso seu problema não tenha sido resolvido clique no botão abaixo 'Abrir chamado' ";
    botMain.scrollTo(0,1000);

    select5.style.display = "none";
    select6.style.display = "none";

    select7.style.display = "block";
}

function sensores(){
    msg4.style.display = "block";
    descMsg4.innerHTML = "Com o produto (sensores)";
    msg5.style.display = "block";
    descMsg5.innerHTML = "Por favor, baixe um PDF com a solução dos principais problemas <a href='../../resources/pdf/Problemas com os sensores.pdf' download>clicando aqui</a>, e caso seu problema não tenha sido resolvido clique no botão abaixo 'Abrir chamado' ";
    botMain.scrollTo(0,1000);

    select5.style.display = "none";
    select6.style.display = "none";

    select7.style.display = "block";
}


function fecharBot(){
    bot.style.display = "none";
    window.location.reload();
}