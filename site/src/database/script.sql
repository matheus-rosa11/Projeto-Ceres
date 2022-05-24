create database Ceres;
use Ceres;

create table empresa(
idEmpresa int primary key auto_increment,
nome varchar(45),
cnpj varchar(18)
);

create table usuario(
idUsuario int primary key auto_increment,
email varchar(45),
senha varchar(20),
tipo varchar(20) constraint chkTipo check(tipo = 'empresa' or tipo = 'admin'),
fkEmpresa int, foreign key (fkEmpresa) references empresa (idEmpresa)
);

create table plantacao(
idPlantacao int primary key auto_increment,
cep char(8),
complemento varchar(45),
fkEmpresa int, foreign key (fkEmpresa) references empresa (idEmpresa)
);

create table sensor(
idSensor int primary key auto_increment,
tipo varchar(20) constraint chkTipoSensor check (tipo = 'dht11' or tipo = 'lm35'),
fkPlantacao int, foreign key (fkPlantacao) references plantacao (idPlantacao)
);

create table dadosDHT11(
idDadosDHT11 int auto_increment,
fkSensor int, foreign key (fkSensor) references sensor (idSensor),
primary key (idDadosDHT11, fkSensor),
dtCaptura datetime,
umidade double
);

create table dadosLM35(
idDadosLM35 int auto_increment,
fkSensor int, foreign key (fkSensor) references sensor (idSensor),
primary key (idDadosLM35, fkSensor),
dtCaptura datetime,
temperatura double
);
