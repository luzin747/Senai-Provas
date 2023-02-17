drop database if exists tarefas;
create database tarefas charset=UTF8 collate UTF8_general_ci;
use tarefas;

--CRIANDO TABELA DE TAREFAS 
create table lista(    
    id_task integer not null primary key auto_increment,    
    descricao varchar(300) not null,    
    horario_inicial time not null,    
    horario_final time,    
    status integer not null
);

insert into lista values (default, 'Fazer outra coisa', CURTIME(), null, 1);select * from lista;