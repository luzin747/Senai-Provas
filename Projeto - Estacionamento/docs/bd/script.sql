drop database if exists renasparking;
create database renasparking charset=UTF8 collate utf8_general_ci;
use renasparking;
create table clientes(
    id_cliente integer not null  primary key auto_increment,
    nome varchar(100) not null,
    sobrenome varchar(50) not null,
    data_nasci varchar(10) not null,
    cpf varchar(11) not null  ,
    rg varchar(10) not null unique,
    celular varchar(20),
    telefone_fixo varchar(20),
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

create table carros(
    id_carro integer not null  primary key auto_increment,
    placa varchar(10) not null,
    cpf_cliente varchar(11) not null not null,
    marca varchar(50) not null,
    modelo varchar(50) not null,
    categoria varchar(30) not null 
);

create table vagas(
    numero_vaga numeric(10) not null primary key,
    categoria_vaga varchar(30) not null,
    valor_h float(6,2) not null
);

create table registro_ticket(
    ticket_id integer auto_increment not null primary key,
    number_vaga numeric(10) not null,
    placa_car varchar(10) not null ,
    cpf_cli varchar(11) not null ,
    data date not null,
    h_entrada time not null,
    h_saida time,
    valor_final float(10,2),
    forma_pagamento varchar(30),
    status_pag varchar(10) not null
 
);

alter table registro_ticket add foreign key (number_vaga) references vagas(numero_vaga);

insert into clientes values(default,'Tony','Halls','05/09/1999','80821611089','558782780','19988547502','33768990','TonyH@gmail.com','13055910','Rua Joaquin Cardoso ',400, 'Vila formosa','Jaguariúna','SP','casa','Sim');
insert into clientes values(default,'Juzyssara','Montes','16/03/1993','44333810043','268726548','19978570192','32260117','JuzyMonte@hotmail.com','15048639','Rua São Bernado' ,600 , 'Esmeraldina','Jaguariúna','SP','Apartamento bloco C','Sim');
insert into clientes values(default,'Renas','Wellisson','01/02/2004','07937014067','256982324','21943559874',null,'RenasWelli@yahoo.com','25854122','Rua dos Descolados ',656, 'Cambuí','Jaguariúna','SP', 'Mansão','Sim');

insert into carros values(default,'MWK7015','80821611089','Scania','XT','Caminhão');
insert into carros values(default,'EDL3Z90','07937014067','Bugatti','La Voiture Noire','Carro');
insert into carros values(default,'CIZ8920','44333810043','Honda','CB 500X','Moto');
insert into carros values(default,'HXW3364','07937014067','BMW','Concept XM','Carro');

insert into vagas values(1,'Veículo Pequeno',5.00);

insert into vagas values(2,'Veículo Médio',10.00);

insert into vagas values(3,'Veículo Grande',20.00);

insert into registro_ticket values(default,1,'CIZ8920','44333810043',DATE_SUB(curdate(),INTERVAL 1 DAY),'08:00','','','','Aberto');
insert into registro_ticket values(default,3,'MWK7015','80821611089',DATE_SUB(curdate(),INTERVAL 1 DAY),'09:30','','','','Aberto');
insert into registro_ticket values(default,2,'EDL3Z90','07937014067',DATE_SUB(curdate(),INTERVAL 1 DAY),'10:00','','','','Aberto');
insert into registro_ticket values(default,2,'HXW3364','07937014067',DATE_SUB(curdate(),INTERVAL 2 DAY),'08:30','12:30',40.00,'Cartão Débito','Pago');

create view vw_clientes as
select id_cliente as cliente_id, nome as Nome_cliente, sobrenome as Sobrenome, cpf ,email , celular, telefone_fixo, status_cli  from clientes;
select * from vw_clientes;

create view vw_telefones as
select id_cliente as cliente_id, celular as cel_cliente, telefone_fixo as fixo_Cliente from clientes;
select * from vw_telefones;

create view vw_estacionar as
select r.ticket_id,v.numero_vaga as num_vaga, c.cpf as cpf_cliente, v.categoria_vaga , v.valor_h , ca.placa as  placa_carro, r.forma_pagamento, r.status_pag from clientes c
inner join registro_ticket r on c.cpf = r.cpf_cli
inner join vagas v on r.number_vaga = v.numero_vaga 
inner join carros ca on  r.placa_car = ca.placa where r.h_saida  = "";

select * from vw_estacionar;

create view ticket_pagos as
select *, (valor_final) as v_final from registro_ticket where h_saida  <> ""; 

select * from ticket_pagos;
select * from `clientes`;
select * from `carros`;
select * from `vagas`;
select * from `registro_ticket`;
select * from vw_clientes;
select * from vw_estacionar;
select * from ticket_pagos;