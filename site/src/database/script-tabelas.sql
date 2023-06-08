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
    fk_personagem int,
    fk_usuario int,
	curtiu boolean,
    ultima_att datetime,
    constraint fkPersonagem foreign key (fk_personagem) references tb_personagem(id_personagem),
    constraint fkUsuario foreign key (fk_usuario) references usuario(id_usuario),
    constraint pk_curtida primary key (fk_personagem, fk_usuario)
);

drop table tb_curtida;
drop table tb_personagem;

select * from tb_curtida; 
select * from tb_personagem;	
select * from usuario;


insert into usuario values 
	(null, 'Mariana Aguiar de Sousa', 'mari@email.com', '151017', 60, 40),
	(null, 'Kevin dos Santos Wesselka', 'kevin@email.com', '151017', 30, 70);

update usuario set sith_por_cen = 40, jedi_por_cen = 60 where id_usuario = 3;

insert into tb_personagem values 
	(1, 'Minch Yoda', 'https://static.itapemafm.com.br/s3fs-public/2020-09/MY768.jpg?I6HQJYR0U82dpMo6xQsWzd6KB4cVKpdh', '
	Mestre Yoda, um dos personagens mais icônicos e amados da saga Star Wars, é um lendário Mestre Jedi conhecido por sua sabedoria, habilidades extraordinárias e sua maneira única de falar. Pequeno em estatura, mas imponente em sua presença, Yoda é um símbolo de sabedoria e orientação para gerações de fãs.
	Nascido no planeta desconhecido de origem, Yoda é um membro da espécie ancestral conhecida como "Yodas species". Ele é reconhecido como um dos Jedi mais poderosos que já existiu, tendo vivido por mais de 900 anos. Seu longo tempo de vida proporcionou a ele uma vasta experiência e conhecimento, tornando-o um verdadeiro mestre em todas as facetas da Força.
	O que mais se destaca em Mestre Yoda é seu estilo de ensino único. Ele é conhecido por sua fala invertida e de estrutura gramatical diferente, o que lhe confere um ar de mistério e singularidade. Suas palavras sábias e enigmáticas ecoam em muitos corações, deixando ensinamentos profundos e reflexões duradouras.'
, 10, 90);

insert into tb_personagem values 
	(2, 'Obi Wan Kenobi', 'https://w0.peakpx.com/wallpaper/113/727/HD-wallpaper-obi-wan-kenobi-star-wars-character-obi-wan-kenobi-star-wars-tv-shows-artstation.jpg', 'Obi-Wan Kenobi é um dos personagens mais icônicos do universo de Star Wars. Ele é um Mestre Jedi habilidoso, conhecido por sua sabedoria, coragem e devoção à Ordem Jedi. Interpretado por Sir Alec Guinness na trilogia original e por Ewan McGregor na trilogia prequel, Obi-Wan desempenha um papel fundamental na saga.
	Nascido no planeta Stewjon, Obi-Wan foi treinado desde jovem como um Jedi. Ele se tornou um aprendiz do Mestre Qui-Gon Jinn e, juntos, embarcaram em várias missões perigosas. Durante esse tempo, Obi-Wan aprendeu os ensinamentos Jedi, incluindo o controle da Força e o uso do sabre de luz.
	No entanto, foi em Star Wars: Episódio I - A Ameaça Fantasma que Obi-Wan ganhou destaque. Ele se tornou o mentor do jovem Anakin Skywalker, que mais tarde se tornaria o icônico vilão Darth Vader. A relação entre Obi-Wan e Anakin é um dos aspectos mais emocionantes da história de Star Wars, mostrando os desafios de treinar um jovem com tanto poder e as consequências trágicas dessa jornada.
	Obi-Wan enfrentou muitos desafios ao longo de sua vida como Jedi. Ele lutou em batalhas épicas, incluindo a famosa Batalha de Geonosis em Star Wars: Episódio II - Ataque dos Clones e a batalha final contra Darth Maul'
, 20, 80);

insert into tb_personagem values 
	(3, 'Qui Gon Jinn', 'https://comicvine.gamespot.com/a/uploads/original/12/124590/4101095-qui_gon_jinn_painting_x_poststarwar_734240461.jpg',
	'
Qui-Gon Jinn é um personagem icônico da saga Star Wars, um Mestre Jedi cuja sabedoria e compreensão da Força o distinguem dos demais. Ele aparece pela primeira vez no filme "Star Wars: Episódio I - A Ameaça Fantasma", lançado em 1999, mas seu impacto na história da franquia vai além desse único filme.

Qui-Gon Jinn é conhecido por sua abordagem filosófica e sua conexão profunda com a Força. Ele é um Jedi compassivo e contemplativo, sempre em busca de um entendimento mais profundo do universo e da vontade da Força. Sua visão sobre a natureza da Força difere um pouco da dos outros Jedi, pois ele acredita que ela é mais do que apenas um instrumento para o bem ou o mal, mas sim uma entidade misteriosa com sua própria vontade.

Como personagem, Qui-Gon Jinn é retratado como alguém que segue seu próprio caminho, mesmo que isso signifique ir contra as convenções da Ordem Jedi. Ele é um Jedi que confia em seus instintos e intuição, e muitas vezes é visto desafiando as regras e regulamentos da Ordem para seguir o que ele acredita ser o caminho correto. Essa qualidade de independência e desapego das hierarquias estabelecidas faz com que Qui-Gon Jinn seja frequentemente lembrado como um dos personagens mais distintos e interessantes de Star Wars.'
	, 20, 80);


insert into tb_personagem values 
	(4, 'Mace Windu', 'https://thathashtagshow.com/wp-content/uploads/2022/12/mace-windu-thumb.jpg',
	'Mace Windu é um personagem cativante do universo Star Wars, conhecido por sua presença imponente e habilidades excepcionais como um Mestre Jedi. Ele é introduzido pela primeira vez no filme "Star Wars: Episódio I - A Ameaça Fantasma", mas é em sua atuação ao longo dos outros filmes da saga que seu impacto se torna ainda mais evidente.

Mace Windu é retratado como um dos Jedi mais poderosos de sua época. Sua proficiência no combate com sabre de luz é lendária, e ele domina uma forma de luta exclusiva, conhecida como Vaapad, que incorpora tanto o lado luminoso quanto o lado sombrio da Força. Sua maestria nessa forma de combate demonstra não apenas sua habilidade física, mas também sua compreensão única da complexidade e dualidade da Força.

Além de suas habilidades como guerreiro, Mace Windu é conhecido por sua postura rígida e pela busca constante pela justiça. Ele é um defensor ardente dos princípios Jedi e está disposto a tomar medidas firmes para proteger a galáxia da ameaça do lado sombrio. Sua determinação em enfrentar o mal e sua feroz lealdade aos ensinamentos Jedi muitas vezes o colocam em conflito com outros personagens, especialmente quando se trata de equilibrar a compaixão com a necessidade de agir com severidade.'
	, 30, 70);

insert into tb_personagem values 
	(5, 'Anakin Skywalker', 'https://protocolosstarwars.files.wordpress.com/2016/12/image001.jpg?w=880',
	'Anakin Skywalker é um personagem central na saga Star Wars. Inicialmente apresentado como um talentoso jovem escravo no planeta Tatooine, ele é descoberto pelo Mestre Jedi Qui-Gon Jinn, que percebe o potencial dele na Força. Anakin se torna o aprendiz de Qui-Gon e, eventualmente, é treinado pelo Mestre Jedi Obi-Wan Kenobi.

	Ao longo da Trilogia Prequel, Anakin Skywalker passa por uma jornada complexa e trágica. Ele é retratado como um Jedi poderoso e habilidoso, mas também atormentado por conflitos internos e emoções intensas. Anakin tem um vínculo estreito com a senadora Padmé Amidala, e seu amor por ela se torna um dos principais catalisadores para sua transformação.

	À medida que a guerra galáctica se desenrola, Anakin é seduzido pelo lado sombrio da Força. Ele é manipulado pelo Sith Darth Sidious, que o leva a acreditar que o lado sombrio pode oferecer poder para salvar aqueles que ele ama do sofrimento e da morte. Anakin se volta para o lado sombrio, tornando-se Darth Vader, o icônico vilão da trilogia original.'
		, 40, 60);


update tb_curtida set curtiu = false where fk_usuario = 2;

insert into tb_curtida values 
	(1, 1, 1, now());