var hectares = 0;
var producao = 0;

function trocarTela() {
    hectares = ipt_hec.value;
    producao = ipt_producao.value;
    page_one.style.display = "none";
    page_two.style.display = "flex";
    let totalAno = calcular(hectares, producao) * 12;

    // Calculando perda máxima do usuário:

    res_perda_cliente.innerHTML = totalAno * 0.8;

    // Isso Resultaria no lucro de apenas:

    res_lucro_cliente.innerHTML = totalAno * 0.2;
    

    // Resultado Lucro Total Possível com Ceres abaixo

    res_lucro_ceres.innerHTML = totalAno * 0.95;
    // 95% de produtividade total

    // Resultado saldo:

    res_novo_saldo.innerHTML = totalAno - totalAno * 0.05;
}

function calcular(hec, prod) {

    var total = prod * hec
    // produção total ao mês
    return total;
    
}