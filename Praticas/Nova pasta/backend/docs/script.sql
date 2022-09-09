drop database if exists locadora;
create database locadora charset=UTF8 collate utf8_general_ci;
use locadora;

CREATE TABLE clientes(
    codigo INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome varchar(30) not null,
    endereco VARCHAR(30) not null,
    telefone VARCHAR(30) not null

);

create table filmes(
    cod_film INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome varchar(20) NOT NULL,
    genero varchar(30) NOT NULL

);

CREATE TABLE locacoes(
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    cod_cli INTEGER NOT NULL,
    cod_film INTEGER NOT NULL,
    data_loca VARCHAR(20) NOT NULL,
    data_devolucao VARCHAR(20) NOT NULL,

    foreign key(cod_cli) REFERENCES clientes(codigo),
    foreign key(cod_film) REFERENCES filmes(cod_film)

);



describe clientes;
describe filmes;
describe locacoes;

LOAD DATA INFILE 'D:/Senai-Provas/Praticas/Nova pasta/backend/docs/csv/clientes.csv'
INTO TABLE clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/Senai-Provas/Praticas/Nova pasta/backend/docs/csv/filmes.csv'
INTO TABLE filmes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/Senai-Provas/Praticas/Nova pasta/backend/docs/csv/locacoes.csv'
INTO TABLE locacoes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;