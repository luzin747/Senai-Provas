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

insert into clientes values(default,'Tony','Halls','05/09/1999','80821611089','558782780','19988547502','33768990','TonyH@gmail.com','13055910','Rua Joaquin Cardoso ',400, 'Vila formosa','Jaguariúna','SP','casa','Sim');
insert into clientes values(default,'Juzyssara','Montes','16/03/1993','44333810043','268726548','19978570192','32260117','JuzyMonte@hotmail.com','15048639','Rua São Bernado' ,600 , 'Esmeraldina','Jaguariúna','SP','Apartamento bloco C','Sim');
insert into clientes values(default, 'Renas','Wellisson','01/02/2004','07937014067','256982324','21943559874',null,'RenasWelli@yahoo.com','25854122','Rua dos Descolados ',656, 'Cambuí','Jaguariúna','SP', 'Mansão','Sim');

insert into carros values(default,1,'MWK7015','Scania','Caminhão');
insert into carros values(default,3,'EDL3Z90','Ferrari','Carro');
insert into carros values(default,2,'CIZ8920','Honda','Moto');
insert into carros values(default,3,'HXW3364','BMW','Carro');

insert into vagas values(1,'Veículo Pequeno',5.00);

insert into vagas values(2,'Veículo Médio',10.00);

insert into vagas values(3,'Veículo Grande',20.00);

insert into registro_estac values(default,1,3,2,DATE_SUB(curdate(),INTERVAL 3 DAY),'08:00','','','','Aberto');
insert into registro_estac values(default,3,1,1,DATE_SUB(curdate(),INTERVAL 3 DAY),'09:30','','','','Aberto');
insert into registro_estac values(default,2,2,3,DATE_SUB(curdate(),INTERVAL 2 DAY),'10:00','','','','Aberto');
insert into registro_estac values(default,2,4,3,DATE_SUB(curdate(),INTERVAL 4 DAY),'08:30','12:30',40.00,'Cartão Débito','Pago');

create view vw_clientes as
select id_cliente as cliente_id, nome as Nome_cliente, sobrenome as Sobrenome, cpf, email , celular, telefone_fixo, status_cli  from clientes;
select * from vw_clientes;

create view vw_telefones as
select id_cliente as cliente_id, celular as cel_cliente, telefone_fixo as fixo_Cliente from clientes;
select * from vw_telefones;

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
select * from `carros`;
select * from `vagas`;
select * from `registro_estac`;
select * from vw_clientes;
select * from vw_estacionar;
select * from estacionamento_pagos;