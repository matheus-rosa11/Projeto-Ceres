create database Ceres;

use Ceres;


create table Empresa (
id_empresa int primary key auto_increment,
nome varchar (45),
cnpj varchar (14)
);

create table Usuario (
id_Usuario int auto_increment,
nome varchar (45),
email varchar (70),
senha varchar (50),
fk_Empresa int,
foreign key (fk_Empresa) references Empresa (id_Empresa),
primary key (id_usuario, fk_Empresa)
);

create table plantacao (
id_plantacao int primary key auto_increment,
cep char (8),
complemento varchar (45),
numero int,
fk_Empresa int,
foreign key (fk_Empresa) references Empresa (id_Empresa)
);

create table sensor (
id_sensor int primary  key auto_increment,
tipo_Sensor char (5), constraint chktipo check (tipo_Sensor = 'DHT11' or tipo_Sensor = 'LM35'),
 fk_plantacao int,
 foreign key (fk_plantacao) references plantacao (id_plantacao)
 );
 
 create table dados_Sensor (
 id_Dados_Sensor int primary key auto_increment,
 fk_sensor int,
 foreign key  (fk_sensor) references sensor (id_sensor),
 tempratura double,
 umidade double,
 data_Sensor datetime
 );