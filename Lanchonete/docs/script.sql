drop database if exists lanchonete;
create database lanchonete charset=UTF8 collate UTF8_general_ci;
use lanchonete;

-- CRIANDO TABELA DE PEDIDOS --
create table pedidos(
    id_pedido integer not null primary key auto_increment,
    cliente varchar(30) not null,
    endereco varchar(30) not null,
    produto varchar(100) not null,
    dia date not null,
    hora_pedido varchar(30) not null,
    hora_entrega varchar(30) not null,
    hora_fim varchar(30) not null,
    entregador varchar(30) not null
);

-- CRIANDO TABELA DE ENTREGADORES --
create table entregador(
    id_entregador integer not null primary key auto_increment,
    nome varchar(30) not null,
    email varchar(30) not null,
    senha varchar(30) not null,
    veiculo varchar(30) not null
);

-- CRIANDO TABELA DE PRODUTOS --
create table produtos(
    id_produto integer not null primary key auto_increment,
    nome_produto varchar(30) not null
);

-- IMPORTANDO INFORMAÇÕES DO CSV
LOAD DATA INFILE '/docs/pedidos.csv'
INTO TABLE pedidos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/PROJETOS/EstacionamentoAtualizado/docs/bd/clientes.csv'
INTO TABLE entregador
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

insert into produtos values(default,'Refrigerante - Lata');
insert into produtos values(default,'Suco de Laranja - 500ml');
insert into produtos values(default,'Guaravita - 500ml');

insert into produtos values(default,'X-Burguer');
insert into produtos values(default,'X-Bacon');
insert into produtos values(default,'X-Egg');
insert into produtos values(default,'X-Tudo');
insert into produtos values(default,'X-Frango');