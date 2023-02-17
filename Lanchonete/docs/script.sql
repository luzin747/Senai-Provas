drop database if exists lanchonete;
create database lanchonete charset=UTF8 collate UTF8_general_ci;
use lanchonete;

-- CRIANDO TABELA DE ENTREGADORES --
create table entregador(
    id integer not null primary key auto_increment,
    nome varchar(30) not null,
    email varchar(30) not null,
    senha varchar(30) not null,
    veiculo varchar(30) not null
);

-- CRIANDO TABELA DE PEDIDOS --
create table pedidos(
    id_pedido integer not null primary key auto_increment,
    cliente varchar(30) not null,
    endereco varchar(100) not null,
    bairro varchar (30) not null,
    cidade varchar (30) not null,
    produto varchar(100) not null,
    quantidade integer not null,
    preco float (5,2) not null,
    dia varchar(11) not null,
    hora_pedido varchar(30) not null,
    hora_entrega varchar(30),
    hora_fim varchar(30),
    id_entregador integer not null,
    foreign key (id_entregador) references entregador (id)
);


-- CRIANDO TABELA DE PRODUTOS --
create table produtos(
    id_produto integer not null primary key auto_increment,
    nome_produto varchar(30) not null,
    preco float (4,2) not null
);

-- IMPORTANDO INFORMAÇÕES DO CSV

LOAD DATA INFILE 'D:/Senai-Provas/Lanchonete/docs/entregadores.csv'
INTO TABLE entregador
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/Senai-Provas/Lanchonete/docs/pedidos.csv'
INTO TABLE pedidos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;


insert into produtos values(default,'Refrigerante - Lata', 5.00);
insert into produtos values(default,'Suco de Laranja - 500ml', 6.00);
insert into produtos values(default,'Guaravita - 500ml', 5.00);

insert into produtos values(default,'X-Burguer', 14.99);
insert into produtos values(default,'X-Bacon', 18.99);
insert into produtos values(default,'X-Egg', 16.99);
insert into produtos values(default,'X-Tudo', 21.99);
insert into produtos values(default,'X-Frango', 18.99);

select * from pedidos;
select * from entregador;
select * from produtos;
