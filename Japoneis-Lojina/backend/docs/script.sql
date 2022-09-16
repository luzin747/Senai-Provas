drop database if exists loja;
create database loja charset=UTF8 collate utf8_general_ci;
use loja;

create table lancamentos(
    n_lancamentos integer not null primary key auto_increment,
    datas varchar(20) not null,
    descricao varchar(50) not null,
    valor FLOAT(5,2) not null,
    tipo varchar(10) not null

);

describe lancamentos;

LOAD DATA INFILE 'D:/Senai-Provas/Japoneis-Lojina/backend/docs/csv/loja.csv'
INTO TABLE lancamentos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

SELECT * FROM lancamentos;