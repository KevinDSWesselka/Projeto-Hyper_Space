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
    dt_curtida datetime,
    constraint fkPersonagem foreign key (fk_personagem) references tb_personagem(id_personagem),
    constraint fkUsuario foreign key (fk_usuario) references usuario(id_usuario),
    constraint pk_curtida primary key (id_curtida, fk_personagem, fk_usuario)
);
drop table tb_curtida;

select * from usuario;
select * from tb_personagem;
select * from tb_curtida;

insert into usuario values 
	(null, 'Mariana Aguiar de Sousa', 'mari@email.com', '151017', 60, 40),
	(null, 'Kevin dos Santos Wesselka', 'kevin@email.com', '151017', 30, 70);

update usuario set sith_por_cen = 40, jedi_por_cen = 60 where id_usuario = 3;

insert into tb_personagem values 
	(1, 'YODA', 'https://amenteemaravilhosa.com.br/wp-content/uploads/2022/01/yoda-1024x598-1.jpg', '
	Mestre Yoda, um dos personagens mais icônicos e amados da saga Star Wars, é um lendário Mestre Jedi conhecido por sua sabedoria, habilidades extraordinárias e sua maneira única de falar. Pequeno em estatura, mas imponente em sua presença, Yoda é um símbolo de sabedoria e orientação para gerações de fãs.
	Nascido no planeta desconhecido de origem, Yoda é um membro da espécie ancestral conhecida como "Yodas species". Ele é reconhecido como um dos Jedi mais poderosos que já existiu, tendo vivido por mais de 900 anos. Seu longo tempo de vida proporcionou a ele uma vasta experiência e conhecimento, tornando-o um verdadeiro mestre em todas as facetas da Força.
	O que mais se destaca em Mestre Yoda é seu estilo de ensino único. Ele é conhecido por sua fala invertida e de estrutura gramatical diferente, o que lhe confere um ar de mistério e singularidade. Suas palavras sábias e enigmáticas ecoam em muitos corações, deixando ensinamentos profundos e reflexões duradouras.'
, 10, 90);

insert into tb_personagem values 
	(2, 'YODA', 'https://ewscripps.brightspotcdn.com/dims4/default/61f1f9e/2147483647/strip/true/crop/550x309+0+29/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2Fcb%2F4c%2F42d2375447178f0e9f729dce96b0%2Fpicture-of-obi-wan.JPG', 'Obi-Wan Kenobi é um dos personagens mais icônicos do universo de Star Wars. Ele é um Mestre Jedi habilidoso, conhecido por sua sabedoria, coragem e devoção à Ordem Jedi. Interpretado por Sir Alec Guinness na trilogia original e por Ewan McGregor na trilogia prequel, Obi-Wan desempenha um papel fundamental na saga.
	Nascido no planeta Stewjon, Obi-Wan foi treinado desde jovem como um Jedi. Ele se tornou um aprendiz do Mestre Qui-Gon Jinn e, juntos, embarcaram em várias missões perigosas. Durante esse tempo, Obi-Wan aprendeu os ensinamentos Jedi, incluindo o controle da Força e o uso do sabre de luz.
	No entanto, foi em Star Wars: Episódio I - A Ameaça Fantasma que Obi-Wan ganhou destaque. Ele se tornou o mentor do jovem Anakin Skywalker, que mais tarde se tornaria o icônico vilão Darth Vader. A relação entre Obi-Wan e Anakin é um dos aspectos mais emocionantes da história de Star Wars, mostrando os desafios de treinar um jovem com tanto poder e as consequências trágicas dessa jornada.
	Obi-Wan enfrentou muitos desafios ao longo de sua vida como Jedi. Ele lutou em batalhas épicas, incluindo a famosa Batalha de Geonosis em Star Wars: Episódio II - Ataque dos Clones e a batalha final contra Darth Maul'
, 20, 80);

insert into tb_personagem values 
	(3, 'Obi Wan', 'https://ewscripps.brightspotcdn.com/dims4/default/61f1f9e/2147483647/strip/true/crop/550x309+0+29/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2Fcb%2F4c%2F42d2375447178f0e9f729dce96b0%2Fpicture-of-obi-wan.JPG',
	'Obi-Wan Kenobi é um dos personagens mais icônicos do universo de Star Wars. Ele é um Mestre Jedi habilidoso, conhecido por sua sabedoria, coragem e devoção à Ordem Jedi. Interpretado por Sir Alec Guinness na trilogia original e por Ewan McGregor na trilogia prequel, Obi-Wan desempenha um papel fundamental na saga.
	Nascido no planeta Stewjon, Obi-Wan foi treinado desde jovem como um Jedi. Ele se tornou um aprendiz do Mestre Qui-Gon Jinn e, juntos, embarcaram em várias missões perigosas. Durante esse tempo, Obi-Wan aprendeu os ensinamentos Jedi, incluindo o controle da Força e o uso do sabre de luz.
	No entanto, foi em Star Wars: Episódio I - A Ameaça Fantasma que Obi-Wan ganhou destaque. Ele se tornou o mentor do jovem Anakin Skywalker, que mais tarde se tornaria o icônico vilão Darth Vader. A relação entre Obi-Wan e Anakin é um dos aspectos mais emocionantes da história de Star Wars, mostrando os desafios de treinar um jovem com tanto poder e as consequências trágicas dessa jornada.
	Obi-Wan enfrentou muitos desafios ao longo de sua vida como Jedi. Ele lutou em batalhas épicas, incluindo a famosa Batalha de Geonosis em Star Wars: Episódio II - Ataque dos Clones e a batalha final contra Darth Maul'
	, 20, 80);

insert into tb_curtida values 
	(1, 1, 1, now());

select * from tb_curtida;