var database = require("../database/config");

function buscarUltimasMedidas(idPlantacao, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        umidade, dtCaptura,
                        CONVERT(varchar, dtCaptura, 108) as momento_grafico
                    from dadosdht11 join sensor on fkSensor = idSensor
                    where sensor.fkPlantacao = ${idPlantacao}
                    order by sensor.fkPlantacao desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select umidade, dtCaptura from dadosdht11 join sensor on fkSensor = idSensor
        where sensor.fkPlantacao = ${idPlantacao} order by sensor.fkPlantacao desc limit ${limite_linhas};`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idPlantacao) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        CONVERT(varchar, momento, 108) as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idAquario} 
                    order by id desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        umidade, temperatura,
                        DATE_FORMAT(dadosdht11.dtCaptura,'%H:%i:%s') as momento_grafico,
                        DATE_FORMAT(dadoslm35.dtCaptura,'%H:%i:%s'),
                        sensor.fkPlantacao
                        from dadosdht11 join sensor on dadosdht11.fkSensor = sensor.idSensor 
                        join dadoslm35 on dadoslm35.fkSensor = sensor.idSensor where sensor.fkPlantacao = ${idPlantacao} 
                    order by sensor.fkPlantacao desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
