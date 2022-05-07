create database ceres;

use ceres;

create table empresa (
    idEmpresa int primary key auto_increment,
    nomeEmpresa varchar(45),
    cnpj varchar(14)
);

create table usuario (
    idUsuario int auto_increment,
    fkEmpresa int,
    foreign key (fkEmpresa) references empresa(idEmpresa),
    primary key (idUsuario, fkEmpresa),
    email varchar(45),
    senha varchar(45),
    tipoUsuario varchar(45),
    constraint chkTipo check (tipoUsuario = 'empresa' or tipoUsuario = 'admin')
);

create table plantacao (
    idPlantacao int primary key auto_increment,
    cep varchar(8),
    fkEmpresa int,
    foreign key (fkEmpresa) references empresa(idEmpresa)
);

create table sensor (
    idSensor int primary key auto_increment,
    fkPlantacao int,
    foreign key (fkPlantacao) references plantacao(idPlantacao),
    tipoSensor varchar(45)
);

create table dadosdht11 (
    idDadosDHT11 int auto_increment,
    fkSensor int,
    foreign key (fkSensor) references sensor(idSensor),
    primary key (idDadosDHT11, fkSensor),
    dtCapturaDHT11 datetime,
    umidade double
);

create table dadoslm35 (
    idDadosLM35 int auto_increment,
    fkSensor int,
    foreign key (fkSensor) references sensor(idSensor),
    primary key (idDadosLM35, fkSensor),
    dtCapturaLM35 datetime,
    temperatura double
);

