function limpar() {
    div_erro_login1.innerHTML = "";
    div_erro_login2.innerHTML = "";
}

function entrar() {

    aguardar();

    var emailVar = txt_usuario.value;
    var senhaVar = txt_senha.value;

    // TODO: VERIFICAR AS VALIDAÇÕES QUE ELES ESTÃO APRENDENDO EM ALGORITMOS 
    if (emailVar == "" || senhaVar == "") {
        // cardErro.style.display = "block"
        // mensagem_erro.innerHTML = "Preencha todos os campos para prosseguir!";
        div_erro_login1.innerHTML = "Preencha todos os campos!";
        div_erro_login2.innerHTML = "Preencha todos os campos!";
        finalizarAguardar();
        return false;
    }
    // else {
    //     setInterval(sumirMensagem, 5000)
    // }

    if (emailVar.indexOf("@") == -1 || emailVar.indexOf(".com") == -1) {
        div_erro_login1.innerHTML = "Email inválido.";
        finalizarAguardar();
        return false;
    }
    // else {
    //     setInterval(sumirMensagem, 5000)
    // }

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticarAdm", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.idUsuario;
                sessionStorage.NOME_EMPRESA = json.nomeEmpresa;

                setTimeout(function () {
                    window.location = "./dashboard/index_restrita.html";
                }, 1000); // apenas para exibir o loading

            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");
            document.getElementById('div_erro_login2').innerHTML = 'Email e/ou senha inválido(s).';

            resposta.text().then(texto => {
                console.error(texto);
                console.log('estou aqui');
                finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

// function sumirMensagem() {
//     cardErro.style.display = "none"
// }