drop database hyper_space;
create database hyper_space;
use hyper_space;

create table usuario (
	id_usuario int primary key auto_increment,
	nome varchar(50),
	email varchar(50),
	senha varchar(50),
    sith_por_cen int,
    jedi_por_cen int,
    lado_da_forca char(4),
    constraint chk_lado_forca check (lado_da_forca in ('jedi', 'sith'))
);

insert into usuario values 
	(null, 'Mariana Aguiar de Sousa', 'mari@email.com', '151017', 60, 40, 'sith'),
	(null, 'Kevin dos Santos Wesselka', 'kevin@email.com', '151017', 70, 30, 'jedi');

select * from usuario;