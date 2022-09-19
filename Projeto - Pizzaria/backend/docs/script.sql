DROP DATABASE IF EXISTS LabonaPizza;
CREATE DATABASE LabonaPizza charset=UTF8 collate utf8_general_ci;
USE LabonaPizza;

CREATE TABLE clientes(
    cliente_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    telefone varchar(15) not null,
    nome varchar(30) not null,
    logradouro varchar(30) not null,
    numero decimal(5,0) not null,
    complemento varchar(30) not null,
    bairro varchar(30) not null,
    referencia varchar(30) not null
);

CREATE TABLE pedidos(
    id_pedido INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    cliente_id integer not null,
    datas varchar(30) not null,
    valor decimal(5,2) not null,

    FOREIGN KEY(cliente_id) REFERENCES clientes(cliente_id)

);

CREATE TABLE pizzas(
    id_pizza INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome varchar(30) not null,
    descricao varchar(30) not null,
    valor decimal(4,2) not null
);

CREATE TABLE item_pedido( 
    id_pedido integer not null,
    id_pizza integer not null,
    quantidade decimal(2,0) not null,
    valor decimal(5,2) not null,


    FOREIGN KEY(id_pedido) REFERENCES pedidos(cliente_id),
    FOREIGN KEY(id_pizza) REFERENCES pizzas(id_pizza)


);


INSERT INTO clientes() VALUES
(default, '55(19)023-59192' ,'Adelcio Biazi', 'Rua Wellington Martins', '1204', 'Fundos', 'Dom Bosco', 'Igreja'),
(default, '55(19)300-43866' ,'Adriano da Silva Ferreira', 'Rua Walter Paulo Costenaro', '1206', '', 'Bela Vista', 'Farm?cia'),
(default, '55(19)263-89010' ,'Alisson Linhares de Carvalho', 'Rua Viviane Mello Bonadia dos ', '1208', '', 'Zambom', ''),
(default, '55(19)707-10045' ,'Amanda Cristina davi Resende', 'Rua Thamires de Campos Luz', '1210', '', 'Santa Cruz', 'Escola'),
(default, '55(19)652-38242' ,'Ana Cl?udia de Moura Laurentin', 'Rua Taynara Cerigueli Dutra', '1212', '', 'Dom Bosco', ''),
(default, '55(19)392-31969' , 'Ana Claudia Maciel', 'Rua Su?llen Rodolfo Martinelli', '1214', 'Frente', 'Dom Bosco', 'Campinho'),
(default, '55(19)708-48819' ,'Argemiro Pentian Junior', 'Rua Silvia Roberta de Jesus Ga', '1216', '', 'Dom Bosco', ''),
(default, '55(19)235-20053' ,'Bento Rafael Siqueira', 'Rua Sergio Willians Poneli', '1218', '', 'Dom Bosco', ''),
(default, '55(19)881-41075' ,'Bernardo Moreira Zabadal', 'Rua Sara Luzia de Melo', '1220', '', 'Dom Bosco', 'suermercado'),
(default, '55(19)621-49233' ,'''Carlos Roberto de Oliveira Caz', 'Rua Raphael Hungaro Moretti', '1222', '', 'Dom Bosco', '');

INSERT INTO item_pedido() VALUES
(1, 1, 1, '32.93'),
(1, 3, 2, '32.61'),
(1, 5, 3, '32.29'),
(1, 7, 4, '31.97'),
(1, 8, 5, '31.81'),
(1, 5, 1, '31.33'),
(1, 10, 2, '31.01'),
(2, 1, 3, '32.93'),
(2, 3, 4, '32.61'),
(2, 5, 5, '32.29'),
(2, 7, 1, '31.97'),
(2, 8, 2, '31.81'),
(2, 10, 3, '31.33'),
(2, 3, 4, '31.01'),
(3, 7, 5, '31.97');


insert into pedidos() values 
(default, 1, '2022-04-08', '641.16'),
(default, 2, '2022-04-08', '704.30'),
(default, 2, '2022-04-08', '673.93'),
(default, 3, '2022-04-08', '647.08'),
(default, 3, '2022-04-09', '795.60'),
(default, 4, '2022-04-09', '611.62'),
(default, 4, '2022-04-09', '980.83'),
(default, 5, '2022-04-10', '292.05'),
(default, 6, '2022-04-10', '716.46'),
(default, 7, '2022-04-10', '454.14'),
(default, 8, '2022-04-10', '221.87'),
(default, 9, '2022-04-10', '124.04'),
(default, 10, '2022-04-11','164.65'),
(default, 10, '2022-04-11','32.61');


insert into pizzas() VALUES
(default, 'A Moda da Casa', 'Molho de tomate fresco, mussarela especial, presunto cozido picado, ovos, cebola fatiada, cobertura ', '32.93'),
(default, 'Alho e ?leo', 'Molho de tomate fresco, alho crocante coberto com parmes?o, or?gano e azeitonas pretas', '32.77'),
(default, 'Aliche', 'Molho especial de tomate fresco, fil?s de aliche importado, or?gano e azeitonas pretas', '32.61'),
(default, 'Ao Funghi', 'Molho de tomate fresco, mussarela especial, champignon fatiado, manjeric?o fresco, or?gano e azeiton', '32.45'),
(default, 'Atum', 'Molho de tomate fresco, atum especial s?lido, cebola fatiada, or?gano e azeitonas pretas', '32.29'),
(default, 'Baiana', 'Molho de tomate fresco, calabresa mo?da levemente apimentada, ovos cozidos picados, cebola fatiada, ', '32.13'),
(default, 'Bauru', 'Molho de tomate fresco, presunto cozido picado, mussarela especial, rodelas de tomate, or?gano e aze', '31.97'),
(default, 'Caipira', 'Molho de tomate fresco, frango desfiado levemente temperado, cobertura de catupiry, milho verde, or?', '31.81'),
(default, 'Calabresa', 'Molho de tomate fresco, calabresa especial fatiada, rodelas de cebola, or?gano e azeitonas pretas', '31.65'),
(default, 'Camponesa', 'Molho de tomate fresco, cobertura de catupiry, milho verde, or?gano e azeitonas pretas', '31.49'),
(default, 'Canadense', 'Molho de tomate fresco, lombo canadense fatiado, cobertura de catupiry, rodelas de cebola, or?gano e', '31.33'),
(default, 'Capri', 'Molho de tomate fresco, fatias de lombo canadense, mussarela especial, rodelas de tomate, manjeric?o', '31.17'),
(default, 'Catupiry', 'Molho de tomate fresco, cobertura de catupiry, or?gano e azeitonas pretas', '31.01'),
(default, 'Cubana', 'Molho de tomate fresco, peito de frango desfiado levemente temperado, coberto com mussarela especial', '30.85'),
(default, 'Escarola', 'Molho de tomate fresco, escarola refogada alho e ?leo, fil?s de aliche importada, coberta com mussar', '35.49'),
(default, 'Firense', 'Molho de tomate fresco, atum s?lido especial, milho verde, coberto com catupiry, or?gano e azeitonas', '35.33'),
(default, 'Frango', 'Molho de tomate fresco, peito de frango desfiado levemente temperado, coberto com catupiry, or?gano ', '35.17'),
(default, 'Gramute', 'Molho de tomate fresco, mussarela especial, presunto cozido picado, champignon fatiado, or?gano e az', '35.01'),
(default, 'Gratinada', 'Molho de tomate fresco, cobertura de catupiry, camada de provolone , salpicada de parmes?o, or?gano ', '34.85'),
(default, 'Grega', 'Molho de tomate fresco, palmito macio em rodelas, ervilhas, cobertura de mussarela especial, or?gano', '34.69'),
(default, 'Imperial', 'Molho de tomate fresco, mussarela especial, atum s?lido, champignon fatiado, or?gano e azeitonas pre', '34.53'),
(default, 'Margherita', 'Molho de tomate fresco, mussarela especial, rodelas de tomate, salpicada de parmes?o, manjeric?o fre', '34.37'),
(default, 'Matriciana', 'Molho de tomate fresco, mussarela especial, champignon fatiado, cobertura de parmes?o, or?gano e aze', '34.21'),
(default, 'Mexicana', 'Molho de tomate fresco, mussarela especial, presunto cozido picado, milho verde, or?gano e azeitonas', '34.05'),
(default, 'Moda do Clientes', 'Molho de tomate fresco, livre escolha dos ingredientes ( m?x.4 ), or?gano e azeitonas pretas', '33.89'),
(default, 'Mussarela', 'Molho de tomate fresco, cobertura de mussarela especial, or?gano e azeitonas pretas', '33.73'),
(default, 'Napolitalho', 'Molho de tomate fresco, mussarela especial, rodelas de tomate, queijo parmes?o, alho crocante, or?ga', '33.57'),
(default, 'Napolitana', 'Molho de tomate fresco, mussarela especial, rodelas de tomate, queijo parmes?o, or?gano e azeitonas ', '33.41'),
(default, 'Oba Oba', 'Molho de tomate fresco, peito de frango desfiado levemente temperado, mussarela especial, bacon fati', '33.25'),
(default, 'Palmito', 'Molho de tomate fresco, palmito macio em rodelas, coberto com catupiry, or?gano e azeitonas pretas', '33.09'),
(default, 'Portuguesa', 'Molho de tomate fresco, presunto cozido, ovos picados, rodelas de cebola, cobertura de mussarela esp', '30.69'),
(default, 'Provolone', 'Molho de tomate fresco, coberto com queijo provolone, champignon fatiado, rodelas de tomate, or?gano', '30.53'),
(default, 'Quatro Queijos', 'Molho de tomate fresco, mussarela especial, camada de catupiry, provolone, salpicado com gorgonzola,', '30.37'),
(default, 'Romana', 'Molho de tomate fresco, mussarela especial, rodelas de tomate, fil?s de aliche importado, or?gano e ', '30.21'),
(default, 'R?stica', 'Molho de tomate fresco, calabresa especial fatiada, alho crocante, rodelas de cebola, or?gano e azei', '30.05'),
(default, 'Se Liga', 'molho de tomate fresco, fatias de lombo canadense, cobertura de provolone, or?gano e azeitonas preta', '29.89'),
(default, 'Siciliana', 'Molho de tomate fresco, mussarela especial, fatias de bacon, champignon fatiado, or?gano e azeitonas', '29.73'),
(default, 'Torino', 'Molho de tomate fresco, calabresa especial fatiada, palmito macio em rodelas, or?gano e azeitonas pr', '29.57'),
(default, 'Toscana', 'Molho de tomate fresco, calabresa mo?da especial, cobertura de mussarela, or?gano e azeitonas pretas', '29.41'),
(default, 'Veneza', 'Molho de tomate fresco, presunto cozido picado, azeitona verde fatiada, cobertura de mussarela espec', '29.25'),
(default, 'Vienense', 'Molho de tomate fresco, mussarela especial, calabresa especial fatiada, rodelas de cebola, or?gano e', '29.09');