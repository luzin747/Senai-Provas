drop database if exists cursos;
create database cursos charset=UTF8 collate utf8_general_ci;
use cursos;

create table alunos(
   id_aluno INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
   nome_aluno VARCHAR(30) not null,
   sobrenome VARCHAR(50) not null

);

create table cursos(
    id_curso INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    curso VARCHAR(30) NOT NULL,
    duracao INTEGER NOT NULL
); 

create table cursados(
    aluno_cursado INTEGER NOT NULL,
    curso INTEGER NOT NULL,
    data_cursados VARCHAR(25) NOT NULL, 

    foreign key (aluno_cursado) references alunos(id_aluno) on delete cascade,
    foreign key (curso) references cursos(id_curso) on delete cascade
);


LOAD DATA INFILE 'D:/Senai-Provas/Avaliacoes/BackWelli/docs/alunos.csv'
INTO TABLE alunos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/Senai-Provas/Avaliacoes/BackWelli/docs/cursos.csv'
INTO TABLE cursos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/Senai-Provas/Avaliacoes/BackWelli/docs/cursados.csv'
INTO TABLE cursados
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

create view vw_cursados as
select a.id_aluno as id_aluno, a.nome_aluno, a.sobrenome , c.id_curso as id_curso, c.curso, c.duracao, cs.data_cursados  from alunos a
inner join cursados cs on cs.aluno_cursado = a.id_aluno
inner join cursos c on c.id_curso = cs.curso;


select * from vw_cursados;
select * from alunos;
select * from cursos;
select * from cursados;
