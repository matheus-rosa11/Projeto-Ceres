create database ceres;

use ceres;

create table empresa (
idEmpresa int primary key auto_increment,
nome varchar (45),
email varchar(45),
senha varchar(45),
cnpj char (18)
);

create table usuario (
idUsuario int primary key auto_increment,
nome varchar (45),
email varchar (45),
senha varchar (45),
fkEmpresa int, foreign key (fkEmpresa) references empresa (idEmpresa)
);

create table plantacao (
idPlantacao int primary key auto_increment,
cep char (9),
complemento varchar (45),
numero int,
fkEmpresa int, foreign key (fkEmpresa) references empresa (idEmpresa)
);

create table sensor (
idSensor int primary key auto_increment,
tipo char(5), 
constraint chkTipo check (tipo = 'dht11' or tipo = 'lm35'),
fkPlantacao int, 
foreign key (fkPlantacao) references plantacao (idPlantacao)
);

create table dadosSensor (
idDadosSensor int auto_increment,
fkSensor int,
primary key (idDadosSensor,fkSensor),
temperatura double,
umidade double,
dataSensor datetime
);

insert into empresa (nome, cnpj) values
('Ponta Cana',  '00000000000000'),
('So Cana', '11111111111111'),
('Pe De Cana', '22222222222222');

select * from empresa;

insert into usuario (nome,email,senha,fkEmpresa)
values ('João Ribeiro','joRib@gmail.com','JoRi123',1),
       ('Andreia Pires','andreiaP@gmail.com','deia321',2),
       ('Rodrigo Alves', 'RodAlves@gmail.com','Rod1234',3);
       
insert into plantacao (CEP,complemento, numero,fkEmpresa)
       values ('08461200','rua da academia',120,1),
              ('02996120','em frente a fabrica',44,1),
              ('06382270','perto do BK',318,2);
              

       
       
