drop database hyper_space;
create database hyper_space;
use hyper_space;

create table usuario (
	id_usuario int primary key auto_increment,
	nome varchar(50),
	email varchar(50),
	senha varchar(50),
    sith_por_cen int,
	jedi_por_cen int
);

create table tb_personagem (
	id_personagem int primary key,
	nome_personagem varchar(25),
	url_personagem varchar(255),
	desc_texto text,
	sith_por_cen int,
	jedi_por_cen int
);

create table tb_curtida (
	id_curtida int,
    fk_personagem int,
    fk_usuario int,
    constraint fkPersonagem foreign key (fk_personagem) references tb_personagem(id_personagem),
    constraint fkUsuario foreign key (fk_usuario) references usuario(id_usuario),
    constraint pk_curtida primary key (id_curtida, fk_personagem, fk_usuario)
);

select * from usuario;

insert into usuario values 
	(null, 'Mariana Aguiar de Sousa', 'mari@email.com', '151017', 60, 40),
	(null, 'Kevin dos Santos Wesselka', 'kevin@email.com', '151017', 30, 70);

update usuario set sith_por_cen = 40, jedi_por_cen = 60 where id_usuario = 3;

insert into tb_personagem values 
	(1, 'YODA', 'https://amenteemaravilhosa.com.br/wp-content/uploads/2022/01/yoda-1024x598-1.jpg', '
	Mestre Yoda, um dos personagens mais icônicos e amados da saga Star Wars, é um lendário Mestre Jedi conhecido por sua sabedoria, habilidades extraordinárias e sua maneira única de falar. Pequeno em estatura, mas imponente em sua presença, Yoda é um símbolo de sabedoria e orientação para gerações de fãs.
	Nascido no planeta desconhecido de origem, Yoda é um membro da espécie ancestral conhecida como "Yodas species". Ele é reconhecido como um dos Jedi mais poderosos que já existiu, tendo vivido por mais de 900 anos. Seu longo tempo de vida proporcionou a ele uma vasta experiência e conhecimento, tornando-o um verdadeiro mestre em todas as facetas da Força.
	O que mais se destaca em Mestre Yoda é seu estilo de ensino único. Ele é conhecido por sua fala invertida e de estrutura gramatical diferente, o que lhe confere um ar de mistério e singularidade. Suas palavras sábias e enigmáticas ecoam em muitos corações, deixando ensinamentos profundos e reflexões duradouras.'
, 90, 10);
