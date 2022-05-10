var hectares = 0;
var producao = 0;

function trocarTela() {
    hectares = ipt_hec.value;
    producao = ipt_producao.value;
    page_one.style.display = "none";
    page_two.style.display = "flex";
    let totalAno = calcular(hectares, producao) * 12;

    // Calculando perda máxima do usuário:

    res_perda_cliente.innerHTML = "R$" + (totalAno * 0.8).toFixed(2);

    // Isso Resultaria no lucro de apenas:

    res_lucro_cliente.innerHTML = "R$" + (totalAno * 0.2).toFixed(2);
    

    // Resultado Lucro Total Possível com Ceres abaixo

    res_lucro_ceres.innerHTML = "R$" + (totalAno * 0.95).toFixed(2);
    // 95% de produtividade total

    // Resultado saldo:

    res_novo_saldo.innerHTML = "R$" + (totalAno - totalAno * 0.05).toFixed(2);
}

function calcular(hec, prod) {

    var total = prod * hec
    // produção total ao mês
    return total;
    
}