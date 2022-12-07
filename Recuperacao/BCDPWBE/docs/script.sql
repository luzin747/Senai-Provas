drop database if exists empresaRec;
create database empresaRec charset=UTF8 collate utf8_general_ci;
use empresaRec;

create table funcionarios(
   id_func INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
   nome VARCHAR(30) not null,
   especialidade VARCHAR(50) not null

);

create table ordem_servico(
    id_os INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_func INTEGER NOT NULL,
    descricao VARCHAR(50) NOT NULL,
    custo FLOAT NOT NULL,

    foreign key (id_func) references funcionarios(id_func) on delete cascade
); 

insert into funcionarios value (default, 'Ana', 'Encanador(a)');
insert into funcionarios value (default, 'Juliana', 'Petroleiro(a)');
insert into funcionarios value (default, 'Fabiana', 'Pintor(a)');
insert into funcionarios value (default, 'Ibana', 'Eletricista');

insert into ordem_servico value (default, '1', 'Concertar Chuveiro', '50.00');
insert into ordem_servico value (default, '1', 'Torneira Pingnado', '50.00');
insert into ordem_servico value (default, '1', 'Vazamento no Banheiro', '300.00');
insert into ordem_servico value (default, '2', 'Trocar porta da Cozinha', '50.00');
insert into ordem_servico value (default, '2', 'Instalar Piso no Banheiro', '600.00');
insert into ordem_servico value (default, '3', 'Pintar um Quarto', '200.00');
insert into ordem_servico value (default, '4', 'Trocar Resistencia chuveiro', '50.00');

-- drop view if exists vw_ordemServicos;
-- create view vw_ordemServicos as
-- select f.id_func, f.nome, f.especialidade, os.id_os, os.descricao, os.custo, from funcionarios f
-- inner join ordem_servico os on
-- os.id_os = f.id_func;


select * from funcionarios;
select * from ordem_servico;
