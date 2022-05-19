var hectares = 0;
var producao = 0;

function trocarTela() {
    hectares = ipt_hec.value;
    producao = ipt_producao.value;
    page_one.style.display = "none";
    page_two.style.display = "flex";
    let totalAno = calcular(hectares, producao) * 12;

    // Calculando perda máxima do usuário:

    res_perda_cliente.innerHTML = (totalAno * 0.8).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    // Isso Resultaria no lucro de apenas:

    res_lucro_cliente.innerHTML = "R$" + (totalAno * 0.2).toFixed(2);
    

    // Resultado Lucro Total Possível com Ceres abaixo

    res_lucro_ceres.innerHTML = "R$" + (totalAno * 0.95).toFixed(2);
    // 95% de produtividade total

    // Resultado saldo:

    var atual = totalAno - totalAno * 0.05

    var f = atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    // console.log(f)

    res_novo_saldo.innerHTML = ': ' + f;
    
}

function calcular(hec, prod) {

    var total = prod * hec
    // produção total ao mês
    return total;
    
}