drop database if exists renasparking;
create database renasparking charset=UTF8 collate utf8_general_ci;

use renasparking;

create table clientes(
    id_cliente integer auto_increment not null primary key,
    nome varchar(50) not null,
    sobrenome varchar(50) not null,
    data_nasci varchar(10) not null,
    cpf varchar(11) not null unique,
    rg varchar(10) not null unique,
    email varchar(50) not null,
    cep varchar(20) not null,
    endereco varchar(100) not null,
    numero decimal(5,0) not null, 
    bairro varchar(50) not null,
    cidade varchar(50) not null,
    uf varchar(5) not null,
    complemento varchar(20) not null,
    status_cli varchar(3) not null

);

create table telefones(
    id_cli integer not null,
    tipo_tel varchar(10) not null,
numero varchar(20) not null,
foreign key (id_cli) references clientes(id_cliente)

);

create table carros(
    id_carro integer auto_increment not null primary key,
    id_cli integer not null,
    placa varchar(10) not null unique,
    marca varchar(50) not null,
    categoria varchar(30) not null
 
);

create table vagas(
    id_vaga numeric(10) not null primary key,
    categoria_vaga varchar(30) not null,
    valor_h float(6,2) not null


);

create table registro_estac(
    id_registro integer auto_increment not null primary key,
    id_vag numeric(10) not null,
    id_car integer not null,
    id_cli integer not null, 
    data date not null,
    h_entrada time not null,
    h_saida time,
    valor_final float(10,2),
    forma_pagamento varchar(30),
    status_pag varchar(10) not null,
    foreign key (id_vag) references vagas(id_vaga),
    foreign key (id_cli) references clientes(id_cliente),
    foreign key (id_car) references carros(id_carro)
);

alter table carros add foreign key (id_cli) references clientes(id_cliente);

  
insert into clientes values(default,'Tony','Halls','05/09/1999','80821611089','558782780','TonyH@gmail.com','13055910','Rua Joaquin Cardoso ',400, 'Vila formosa','Jaguariúna','SP','casa','Sim');
insert into clientes values(default,'Juzyssara','Montes','16/03/1993','44333810043','268726548','JuzyMonte@hotmail.com','15048639','Rua São Bernado' ,600 , 'Esmeraldina','Jaguariúna','SP','Apartamento bloco C','Sim');
insert into clientes values(default, 'Renas','Wellisson','01/02/2004','07937014067','256982324','RenasWelli@yahoo.com','25854122','Rua dos Descolados ',656, 'Cambuí','Jaguariúna','SP', 'Mansão','Sim');



insert into telefones values(1,'Celular','(19)98843-0190');
insert into telefones values(1,'Fixo','(33)6604-1210');
insert into telefones values(2,'Celular','(49)93736-5429');
insert into telefones values(3,'Celular','(19)93838-2238');

insert into carros values(default,1,'MWK7015','Scania','Caminhão');
insert into carros values(default,3,'EDL3Z90','Ferrari','Carro');
insert into carros values(default,2,'CIZ8920','Honda','Moto');
insert into carros values(default,3,'HXW3364','BMW','Carro');

insert into vagas values(1,'Veículo Pequeno',5.00);
-- insert into vagas values(2,'Veículo Pequeno',5.00);
-- insert into vagas values(3,'Veículo Pequeno',5.00);
-- insert into vagas values(4,'Veículo Pequeno',5.00);
-- insert into vagas values(5,'Veículo Pequeno',5.00);
-- insert into vagas values(6,'Veículo Pequeno',5.00);
-- insert into vagas values(7,'Veículo Pequeno',5.00);
-- insert into vagas values(8,'Veículo Pequeno',5.00);
-- insert into vagas values(9,'Veículo Pequeno',5.00);
-- insert into vagas values(10,'Veículo Pequeno',5.00);
-- insert into vagas values(11,'Veículo Pequeno',5.00);
-- insert into vagas values(12,'Veículo Pequeno',5.00);
-- insert into vagas values(13,'Veículo Pequeno',5.00);
-- insert into vagas values(14,'Veículo Pequeno',5.00);
-- insert into vagas values(15,'Veículo Pequeno',5.00);
-- insert into vagas values(16,'Veículo Pequeno',5.00);
-- insert into vagas values(17,'Veículo Pequeno',5.00);
-- insert into vagas values(18,'Veículo Pequeno',5.00);
-- insert into vagas values(19,'Veículo Pequeno',5.00);
-- insert into vagas values(20,'Veículo Pequeno',5.00);
-- insert into vagas values(21,'Veículo Pequeno',5.00);
-- insert into vagas values(22,'Veículo Pequeno',5.00);
-- insert into vagas values(23,'Veículo Pequeno',5.00);
-- insert into vagas values(24,'Veículo Pequeno',5.00);
-- insert into vagas values(25,'Veículo Pequeno',5.00);
-- insert into vagas values(26,'Veículo Pequeno',5.00);
-- insert into vagas values(27,'Veículo Pequeno',5.00);
-- insert into vagas values(28,'Veículo Pequeno',5.00);
-- insert into vagas values(29,'Veículo Pequeno',5.00);
-- insert into vagas values(30,'Veículo Pequeno',5.00);
-- insert into vagas values(31,'Veículo Pequeno',5.00);
-- insert into vagas values(32,'Veículo Pequeno',5.00);
-- insert into vagas values(33,'Veículo Pequeno',5.00);
-- insert into vagas values(34,'Veículo Pequeno',5.00);
-- insert into vagas values(35,'Veículo Pequeno',5.00);
-- insert into vagas values(36,'Veículo Pequeno',5.00);
-- insert into vagas values(37,'Veículo Pequeno',5.00);
-- insert into vagas values(38,'Veículo Pequeno',5.00);
-- insert into vagas values(39,'Veículo Pequeno',5.00);
-- insert into vagas values(40,'Veículo Pequeno',5.00);
-- insert into vagas values(41,'Veículo Pequeno',5.00);
-- insert into vagas values(42,'Veículo Pequeno',5.00);
-- insert into vagas values(43,'Veículo Pequeno',5.00);
-- insert into vagas values(44,'Veículo Pequeno',5.00);
-- insert into vagas values(45,'Veículo Pequeno',5.00);
-- insert into vagas values(46,'Veículo Pequeno',5.00);
-- insert into vagas values(47,'Veículo Pequeno',5.00);
-- insert into vagas values(48,'Veículo Pequeno',5.00);
-- insert into vagas values(49,'Veículo Pequeno',5.00);
-- insert into vagas values(50,'Veículo Pequeno',5.00);

insert into vagas values(51,'Veículo Médio',10.00);
-- insert into vagas values(52,'Veículo Médio',10.00);
-- insert into vagas values(53,'Veículo Médio',10.00);
-- insert into vagas values(54,'Veículo Médio',10.00);
-- insert into vagas values(55,'Veículo Médio',10.00);
-- insert into vagas values(56,'Veículo Médio',10.00);
-- insert into vagas values(57,'Veículo Médio',10.00);
-- insert into vagas values(58,'Veículo Médio',10.00);
-- insert into vagas values(59,'Veículo Médio',10.00);
-- insert into vagas values(60,'Veículo Médio',10.00);
-- insert into vagas values(61,'Veículo Médio',10.00);
-- insert into vagas values(62,'Veículo Médio',10.00);
-- insert into vagas values(63,'Veículo Médio',10.00);
-- insert into vagas values(64,'Veículo Médio',10.00);
-- insert into vagas values(65,'Veículo Médio',10.00);
-- insert into vagas values(66,'Veículo Médio',10.00);
-- insert into vagas values(67,'Veículo Médio',10.00);
-- insert into vagas values(68,'Veículo Médio',10.00);
-- insert into vagas values(69,'Veículo Médio',10.00);
-- insert into vagas values(70,'Veículo Médio',10.00);
-- insert into vagas values(71,'Veículo Médio',10.00);
-- insert into vagas values(72,'Veículo Médio',10.00);
-- insert into vagas values(73,'Veículo Médio',10.00);
-- insert into vagas values(74,'Veículo Médio',10.00);
-- insert into vagas values(75,'Veículo Médio',10.00);
-- insert into vagas values(76,'Veículo Médio',10.00);
-- insert into vagas values(77,'Veículo Médio',10.00);
-- insert into vagas values(78,'Veículo Médio',10.00);
-- insert into vagas values(79,'Veículo Médio',10.00);
-- insert into vagas values(80,'Veículo Médio',10.00);
-- insert into vagas values(81,'Veículo Médio',10.00);
-- insert into vagas values(82,'Veículo Médio',10.00);
-- insert into vagas values(83,'Veículo Médio',10.00);
-- insert into vagas values(84,'Veículo Médio',10.00);
-- insert into vagas values(85,'Veículo Médio',10.00);
-- insert into vagas values(86,'Veículo Médio',10.00);
-- insert into vagas values(87,'Veículo Médio',10.00);
-- insert into vagas values(88,'Veículo Médio',10.00);
-- insert into vagas values(89,'Veículo Médio',10.00);
-- insert into vagas values(90,'Veículo Médio',10.00);
-- insert into vagas values(91,'Veículo Médio',10.00);
-- insert into vagas values(92,'Veículo Médio',10.00);
-- insert into vagas values(93,'Veículo Médio',10.00);
-- insert into vagas values(94,'Veículo Médio',10.00);
-- insert into vagas values(95,'Veículo Médio',10.00);
-- insert into vagas values(96,'Veículo Médio',10.00);
-- insert into vagas values(97,'Veículo Médio',10.00);
-- insert into vagas values(98,'Veículo Médio',10.00);
-- insert into vagas values(99,'Veículo Médio',10.00);
-- insert into vagas values(100,'Veículo Médio',10.00);

insert into vagas values(101,'Veículo Grande',20.00);
-- insert into vagas values(102,'Veículo Grande',20.00);
-- insert into vagas values(103,'Veículo Grande',20.00);
-- insert into vagas values(104,'Veículo Grande',20.00);
-- insert into vagas values(105,'Veículo Grande',20.00);
-- insert into vagas values(106,'Veículo Grande',20.00);
-- insert into vagas values(107,'Veículo Grande',20.00);
-- insert into vagas values(108,'Veículo Grande',20.00);
-- insert into vagas values(109,'Veículo Grande',20.00);
-- insert into vagas values(110,'Veículo Grande',20.00);
-- insert into vagas values(111,'Veículo Grande',20.00);
-- insert into vagas values(112,'Veículo Grande',20.00);
-- insert into vagas values(113,'Veículo Grande',20.00);
-- insert into vagas values(114,'Veículo Grande',20.00);
-- insert into vagas values(115,'Veículo Grande',20.00);
-- insert into vagas values(116,'Veículo Grande',20.00);
-- insert into vagas values(117,'Veículo Grande',20.00);
-- insert into vagas values(118,'Veículo Grande',20.00);
-- insert into vagas values(119,'Veículo Grande',20.00);
-- insert into vagas values(120,'Veículo Grande',20.00);
-- insert into vagas values(121,'Veículo Grande',20.00);
-- insert into vagas values(122,'Veículo Grande',20.00);
-- insert into vagas values(123,'Veículo Grande',20.00);
-- insert into vagas values(124,'Veículo Grande',20.00);
-- insert into vagas values(125,'Veículo Grande',20.00);
-- insert into vagas values(126,'Veículo Grande',20.00);
-- insert into vagas values(127,'Veículo Grande',20.00);
-- insert into vagas values(128,'Veículo Grande',20.00);
-- insert into vagas values(129,'Veículo Grande',20.00);
-- insert into vagas values(130,'Veículo Grande',20.00);
-- insert into vagas values(131,'Veículo Grande',20.00);
-- insert into vagas values(132,'Veículo Grande',20.00);
-- insert into vagas values(133,'Veículo Grande',20.00);
-- insert into vagas values(134,'Veículo Grande',20.00);
-- insert into vagas values(135,'Veículo Grande',20.00);
-- insert into vagas values(136,'Veículo Grande',20.00);
-- insert into vagas values(137,'Veículo Grande',20.00);
-- insert into vagas values(138,'Veículo Grande',20.00);
-- insert into vagas values(139,'Veículo Grande',20.00);
-- insert into vagas values(140,'Veículo Grande',20.00);
-- insert into vagas values(141,'Veículo Grande',20.00);
-- insert into vagas values(142,'Veículo Grande',20.00);
-- insert into vagas values(143,'Veículo Grande',20.00);
-- insert into vagas values(144,'Veículo Grande',20.00);
-- insert into vagas values(145,'Veículo Grande',20.00);
-- insert into vagas values(146,'Veículo Grande',20.00);
-- insert into vagas values(147,'Veículo Grande',20.00);
-- insert into vagas values(148,'Veículo Grande',20.00);
-- insert into vagas values(149,'Veículo Grande',20.00);
-- insert into vagas values(150,'Veículo Grande',20.00);


insert into registro_estac values(default,1,3,2,DATE_SUB(curdate(),INTERVAL 5 DAY),'08:00','','','','Aberto');
insert into registro_estac values(default,3,1,1,DATE_SUB(curdate(),INTERVAL 5 DAY),'09:30','','','','Aberto');
insert into registro_estac values(default,2,2,3,DATE_SUB(curdate(),INTERVAL 2 DAY),'10:00','','','','Aberto');
insert into registro_estac values(default,2,4,3,DATE_SUB(curdate(),INTERVAL 6 DAY),'08:30','12:30',40.00,'Cartão Débito','Pago');

create view vw_clientes as
select c.id_cliente as cliente_id, c.nome as Nome_cliente, c.cpf, c.email , c.status_cli,t.tipo_tel, t.numero as telefone from clientes c
inner join telefones t on c.id_cliente = t.id_cli;

select * from vw_clientes;


create view vw_estacionar as
select r.id_registro,v.id_vaga as vagas, c.id_cliente as clientes, v.categoria_vaga , v.valor_h , ca.placa as carros, r.forma_pagamento, r.status_pag from clientes c
inner join registro_estac r on c.id_cliente = r.id_cli
inner join vagas v on r.id_vag = v.id_vaga 
inner join carros ca on  r.id_car = ca.id_carro where r.h_saida  = "";

select * from vw_estacionar;

create view estacionamento_pagos as
select *, (valor_final) as v_final from registro_estac where h_saida  <> ""; 

select * from estacionamento_pagos;


select * from `clientes`;
select * from `telefones`;
select * from `carros`;
select * from `vagas`;
select * from `registro_estac`;
select * from vw_clientes;
select * from vw_estacionar;
select * from estacionamento_pagos;