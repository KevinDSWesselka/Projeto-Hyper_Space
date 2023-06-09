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
	nome_personagem varchar(45),
	url_personagem varchar(255),
	desc_texto text,
	sith_por_cen int,
	jedi_por_cen int,
	saga varchar(45),
	fk_mestre int,
	constraint fkMestre foreign key (fk_mestre) references tb_personagem(id_personagem)
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

create table tb_sabreDeLuz (
  id int primary key auto_increment,
  cristal_kyber varchar(100),
  empunhadura varchar(100),
  lente varchar(100),
  cabo varchar(100),
  cor varchar(50),
  fk_personagem int,
  constraint fkPersonagemSabre foreign key (fk_personagem) references tb_personagem(id_personagem)
);

select * from tb_curtida; 
select * from tb_personagem;	
select * from usuario;
select * from tb_sabreDeLuz;

insert into usuario values 
	(null, 'Mariana Aguiar de Sousa', 'mari@email.com', '151017', 60, 40),
	(null, 'Kevin dos Santos Wesselka', 'kevin@email.com', '151017', 30, 70);

insert into tb_personagem values 
	(1, 'Minch Yoda', 'https://static.itapemafm.com.br/s3fs-public/2020-09/MY768.jpg?I6HQJYR0U82dpMo6xQsWzd6KB4cVKpdh', '
	<p>
	Yoda é um dos personagens mais icônicos e amados de Star Wars. Ele é um mestre Jedi da espécie conhecida como Tridactyls, que é caracterizada por sua aparência verde, pequena estatura e orelhas pontudas.
	</p>
	<p>
	Yoda é apresentado pela primeira vez na trilogia original de Star Wars como um sábio e poderoso mestre Jedi. Ele é conhecido por sua sabedoria, habilidades excepcionais na Força e pela forma única de falar, invertendo a estrutura das frases.
	</p>
	<p>
	Ao longo da saga, Yoda desempenha um papel fundamental na formação de vários Jedi, incluindo Luke Skywalker, o protagonista da trilogia original. Ele é o Grão-Mestre do Conselho Jedi e serve como guia espiritual para os Jedi, orientando-os na busca pela paz e equilíbrio na Força.
	</p>
	<p>
	Yoda é famoso por suas habilidades de combate com um sabre de luz e por seu profundo conhecimento da Força. Ele é um defensor da luz e está sempre lutando contra as forças do lado sombrio. Sua filosofia e ensinamentos são frequentemente citados, especialmente sua famosa frase <b>"Do or do not, there is no try"</b> ("Faça ou não faça, tentativa não há", em português).
	</p>
	<p>
	A sabedoria e a presença de Yoda são elementos fundamentais na mitologia de Star Wars. Ele representa valores como sabedoria, paciência, perseverança e a importância de buscar o equilíbrio. Yoda deixou um legado duradouro e continua sendo um dos personagens mais queridos e reconhecidos da franquia Star Wars.
	</p>
	'
, 1, 99, 'Desde do Episodio I',null);


insert into tb_personagem values 
	(10, 'Palpatine - Darth Sidious', 'https://images.squarespace-cdn.com/content/v1/5fbc4a62c2150e62cfcb09aa/127bc9d6-adc3-4a5b-82a9-c2065eeb5e33/Heathyr1.png','
	<p>
	Darth Sidious, também conhecido como Imperador Palpatine, é um dos vilões mais icônicos da saga Star Wars. Ele é o mestre por trás dos planos para derrubar a República e estabelecer o Império Galáctico.
	</p>
	<p>
	Sidious é um poderoso Lorde Sith que se esconde por trás de uma fachada de político astuto e influente. Ele manipula os eventos nos bastidores, aproveitando a instabilidade política e a corrupção para alcançar seus objetivos.
	</p>
	<p>
	Sidious é um mestre na manipulação da Força, capaz de controlar mentes e criar tempestades de energia com facilidade. Ele é um estrategista brilhante, planejando cada passo com antecedência para alcançar o poder absoluto.
	</p>
	<p>
	Ele é responsável por seduzir Anakin Skywalker para o lado negro da Força, transformando-o em Darth Vader, seu aprendiz e instrumento de dominação.
	</p>
	<p>
	Como Imperador Palpatine, Sidious governa com mão de ferro, instaurando um regime ditatorial e eliminando qualquer ameaça à sua autoridade. Ele é um tirano implacável, disposto a fazer qualquer coisa para manter seu poder e perpetuar a supremacia dos Sith.
	</p>
	<p>
	Ao longo da saga, Sidious demonstra uma crueldade inabalável e uma sede insaciável por poder. Ele é um exemplo de como a ambição desenfreada e a busca pelo poder absoluto podem corromper um indivíduo até os níveis mais sombrios.
	</p>
	<p>
	O personagem de Darth Sidious é uma representação vívida do mal em sua forma mais pura. Sua presença sinistra e sua manipulação maquiavélica o tornam uma figura inesquecível na mitologia de Star Wars.
	</p>
	'
		, 99, 1, 'Episodio I ao VII', null);


insert into tb_personagem values 
	(8, 'Count Dooku - Darth Tyranus', 'https://i.redd.it/eaitwswnqnk41.jpg','
	<p>
	Count Dooku, também conhecido como Darth Tyranus, é um personagem central na saga Star Wars. Ele foi um ex-Jedi que se voltou para o lado negro da Força e se tornou um poderoso Lorde Sith.
	</p>
	<p>
	Dooku era um mestre de manipulação e estratégia, possuindo habilidades de combate excepcionais e um intelecto afiado. Ele desempenhou um papel fundamental nas Guerras Clônicas, liderando o exército separatista contra a República Galáctica.
	</p>
	<p>
	Como aprendiz de Darth Sidious, Dooku era um dos principais antagonistas da trilogia prequel de Star Wars. Ele tinha um papel ativo na trama para enfraquecer a República e trazer o domínio dos Sith sobre a galáxia.
	</p>
	<p>
	Dooku era conhecido por seu estilo de luta elegante com um sabre de luz característico de cabo curvo, o que o tornava um adversário formidável no campo de batalha.
	</p>
	<p>
	No entanto, apesar de sua lealdade a Sidious e sua participação em eventos sombrios, Dooku não era completamente destituído de conflitos internos. Em seu confronto final com Anakin Skywalker, ele mostrou dúvidas e até mesmo uma ponta de arrependimento antes de ser morto por seu antigo aprendiz.
	</p>
	<p>
	O personagem de Count Dooku é uma representação intrigante de como alguém pode ser seduzido pelo lado negro da Força, abandonando suas antigas convicções e abraçando a escuridão. Sua história serve como um lembrete das complexidades morais e das consequências de se render à tentação do poder absoluto.
	</p>
	'
		, 70, 30, 'Episodio II ao III', 10);

insert into tb_personagem values 
	(3, 'Qui-Gon Jinn', 'https://comicvine.gamespot.com/a/uploads/original/12/124590/4101095-qui_gon_jinn_painting_x_poststarwar_734240461.jpg','
	<p>
	Qui-Gon Jinn é um personagem importante na saga Star Wars. Ele é um Mestre Jedi conhecido por sua sabedoria, intuição e busca por um maior entendimento da Força. Qui-Gon Jinn é apresentado pela primeira vez no filme "Star Wars: Episódio I - A Ameaça Fantasma".
	</p>
	<p>
	Qui-Gon Jinn é retratado como um Jedi corajoso e rebelde, que muitas vezes desafia as tradições e regras da Ordem Jedi. Ele acredita que a Força é um guia poderoso em suas ações e busca sempre seguir seus instintos e intuições, mesmo que isso o coloque em conflito com os outros Jedi.
	</p>
	<p>
	Qui-Gon Jinn é notável por sua crença no equilíbrio da Força. Ele é um dos primeiros Jedi a mencionar a profecia do "Escolhido", aquele que trará equilíbrio à Força. Essa crença o leva a ver um potencial extraordinário em Anakin Skywalker, o jovem escravo que ele encontra em Tatooine.
	</p>
	<p>
	Como mentor de Obi-Wan Kenobi, Qui-Gon Jinn é responsável por treiná-lo e guiá-lo nos caminhos da Força. Ele ensina a Obi-Wan a importância de ouvir a Força e seguir seu próprio caminho, mesmo quando isso vai contra a opinião dos outros Jedi.
	</p>
	<p>
	Qui-Gon Jinn é conhecido por seu domínio no combate com sabre de luz, bem como suas habilidades de percepção e premonição. Ele também é adepto de técnicas de comunicação com a Força, como a habilidade de se tornar um espírito da Força após sua morte.
	</p>
	<p>
	A morte de Qui-Gon Jinn durante um confronto com Darth Maul é um momento significativo na trama de Star Wars. Sua morte afeta profundamente Obi-Wan Kenobi, que prometeu continuar o legado de seu mestre.
	</p>
	<p>
	Qui-Gon Jinn é lembrado como um Jedi carismático e dedicado, cujas crenças e métodos podem ser considerados um tanto fora do comum para os padrões da Ordem Jedi. Sua busca por conhecimento e compreensão da Força o tornam uma figura importante na mitologia de Star Wars, e sua influência continua a ser sentida ao longo da história da galáxia muito, muito distante.
	</p>
	'
	, 50, 50, 'Episodio I', 8);

insert into tb_personagem values 
	(2, 'Obi-Wan Kenobi', 'https://w0.peakpx.com/wallpaper/113/727/HD-wallpaper-obi-wan-kenobi-star-wars-character-obi-wan-kenobi-star-wars-tv-shows-artstation.jpg', '
	<p>
	Obi-Wan Kenobi é um dos personagens mais icônicos e queridos da saga Star Wars. Ele é um Jedi habilidoso e sábio que desempenha um papel crucial na história da galáxia muito, muito distante.
	</p>
	<p>
	Obi-Wan é introduzido pela primeira vez na trilogia original de Star Wars como o mentor e mestre Jedi de Luke Skywalker. Ele é um defensor da paz e da justiça, lutando contra as forças do lado sombrio da Força, como Darth Vader e o Imperador Palpatine.
	</p>
	<p>
	Como aprendiz de Qui-Gon Jinn, e posteriormente como mestre de Anakin Skywalker, Obi-Wan desempenha um papel significativo na trilogia prequel de Star Wars. Ele testemunha a ascensão de Anakin ao lado sombrio como Darth Vader e enfrenta as consequências dessa transformação.
	</p>
	<p>
	Obi-Wan é conhecido por sua habilidade excepcional no combate com sabre de luz e seu domínio da Força. Ele é um mestre na arte do combate Jedi e usa sua inteligência e sabedoria para superar os desafios que enfrenta.
	</p>
	<p>
	Além de suas habilidades de combate, Obi-Wan é admirado por sua integridade moral e senso de dever. Ele é um exemplo de um Jedi comprometido com os valores da Ordem Jedi e está disposto a sacrificar-se pela causa da justiça.
	</p>
	<p>
	A interpretação de Obi-Wan por Alec Guinness na trilogia original e por Ewan McGregor na trilogia prequel conquistou o coração dos fãs. Ewan McGregor reprisou o papel em um projeto futuro da Disney+, uma série centrada em Obi-Wan Kenobi, o que gerou muita empolgação entre os fãs.
	</p>
	<p>
	Obi-Wan Kenobi é um personagem amado por sua coragem, sabedoria e sacrifício. Sua história como Jedi e seu papel na luta contra as forças do lado sombrio tornam-no uma figura central e inesquecível na mitologia de Star Wars.
	</p>
	'
, 20, 80, 'Antes do Episodio I ao VII',3);


insert into tb_personagem values 
	(4, 'Mace Windu', 'https://thathashtagshow.com/wp-content/uploads/2022/12/mace-windu-thumb.jpg','
	<p>
	Mace Windu é um personagem proeminente da saga Star Wars. Ele é um poderoso Mestre Jedi, conhecido por sua habilidade no combate com sabre de luz e sua profunda conexão com a Força. Mace Windu é introduzido pela primeira vez na trilogia prequel de Star Wars.
	</p>
	<p>
	Mace Windu é retratado como um Jedi sério e determinado, dedicado a proteger a galáxia da ameaça do lado sombrio da Força. Ele é respeitado por sua força e sabedoria, e é um dos membros mais influentes do Conselho Jedi.
	</p>
	<p>
	O sabre de luz roxo de Mace Windu é uma marca registrada de seu personagem e simboliza sua singularidade. A cor do seu sabre de luz foi explicada como resultado de sua profunda conexão tanto com o lado luminoso quanto com o lado sombrio da Força.
	</p>
	<p>
	Uma das principais contribuições de Mace Windu para a história de Star Wars é sua liderança durante a Guerra dos Clones. Ele é uma figura central na luta contra os Separatistas, liderados por Conde Dooku e pelo temível General Grievous.
	</p>
	<p>
	Mace Windu é conhecido por sua técnica de combate única, chamada de Vaapad, que permite que ele use a agressividade do lado sombrio da Força para derrotar seus oponentes. Sua destreza e habilidades com o sabre de luz são amplamente reconhecidas e respeitadas na galáxia.
	</p>
	<p>
	Um dos momentos mais memoráveis ​​de Mace Windu ocorre em "Star Wars: Episódio III - A Vingança dos Sith", quando ele lidera um grupo de Jedi em uma tentativa de capturar ou derrotar o Chanceler Palpatine, que é revelado como o Sith Lorde Darth Sidious. Nesse confronto, Mace Windu demonstra seu poder ao lutar de igual para igual contra Palpatine, exibindo sua destreza e maestria na batalha.
	</p>
	<p>
	Infelizmente, Mace Windu encontra seu fim durante esse confronto, sendo traído por Anakin Skywalker, que se torna o aprendiz de Darth Sidious. A morte de Mace Windu é um momento impactante na saga e marca um ponto de virada na ascensão do Império Galáctico.
	</p>
	<p>
	Mace Windu é lembrado como um Jedi corajoso, sábio e implacável na luta contra as forças do lado sombrio. Sua influência e legado permanecem na memória dos fãs de Star Wars como um dos grandes Mestres Jedi que se destacaram na batalha pela paz e justiça na galáxia.
	</p>
	'
	, 30, 70, 'Antes do Episodio I até o III', 1);


insert into tb_personagem values 
	(6, 'Anakin Skywalker', 'https://protocolosstarwars.files.wordpress.com/2016/12/image001.jpg?w=880','
	<p>
	Anakin Skywalker é um dos personagens mais emblemáticos e complexos da saga Star Wars. Sua jornada abrange tanto a trilogia prequel quanto a trilogia original, revelando a ascensão e a queda de um dos personagens mais poderosos da galáxia.
	</p>
	<p>
	Anakin Skywalker é apresentado pela primeira vez em "Star Wars: Episódio I - A Ameaça Fantasma" como um jovem escravo em Tatooine, com um potencial extraordinário na Força. Ele é descoberto por Qui-Gon Jinn, que acredita que Anakin possa ser o "Escolhido" que trará equilíbrio à Força.
	</p>
	<p>
	Ao longo da trilogia prequel, Anakin é treinado como Jedi por Obi-Wan Kenobi, mas sua jornada é marcada por conflitos internos. Ele luta com suas emoções, medos e desejos pessoais, o que o torna vulnerável à influência do lado sombrio da Força.
	</p>
	<p>
	Anakin é retratado como um piloto habilidoso, corajoso e determinado. No entanto, sua busca por poder e controle o leva a se envolver com o Chanceler Palpatine, que se revela o Sith Lorde Darth Sidious. Anakin é seduzido pelas promessas de poder e conhecimento oferecidas por Palpatine, levando-o a se tornar Darth Vader, um dos vilões mais icônicos de todos os tempos.
	</p>
	<p>
	Como Darth Vader, Anakin é consumido pela escuridão e se torna um agente implacável do Império Galáctico. Ele participa de atrocidades, ajuda a caçar e eliminar os Jedi e se torna um símbolo do poder opressor do Império.
	</p>
	<p>
	No entanto, a redenção de Anakin é o ponto crucial de sua história. Em "Star Wars: Episódio VI - O Retorno de Jedi", ele é confrontado pelo amor e a persistência de seu filho, Luke Skywalker, que acredita que ainda há bondade dentro dele. Anakin renuncia ao lado sombrio e sacrifica-se para salvar seu filho, destruindo o Imperador Palpatine e trazendo equilíbrio à Força.
	</p>
	<p>
	Anakin Skywalker é um personagem complexo e cativante, cuja trajetória exemplifica a luta entre a luz e a escuridão, o bem e o mal. Sua história é uma representação poderosa da capacidade de redenção e da importância do amor e da compaixão. Ele deixou um legado duradouro e continua a ser um dos personagens mais icônicos da franquia Star Wars.
	</p>
	'
		, 40, 60, 'Episodio I ao III',2);

insert into tb_personagem values 
	(5, 'Ahsoka Tano', 'https://www.omelete.com.br/webstories/star-wars-melhores-personagens-spin-off/assets/2.jpeg','
	<p>
	Ahsoka Tano é uma personagem muito amada e importante no universo de Star Wars. Ela foi introduzida pela primeira vez na série de animação "Star Wars: The Clone Wars" como a aprendiz Jedi de Anakin Skywalker. Ahsoka se tornou um dos personagens mais populares e icônicos da franquia.
	</p>
	<p>
	Ahsoka é uma Togruta, uma espécie alienígena com características distintivas, como cabeças montral e lekku. Ela é retratada como uma Jedi talentosa, corajosa e leal. Durante a Guerra dos Clones, Ahsoka luta ao lado de Anakin Skywalker e do Capitão Rex, liderando missões e enfrentando ameaças da Confederação dos Sistemas Independentes.
	</p>
	<p>
	O desenvolvimento de Ahsoka como personagem é notável. Ela passa por uma série de desafios e provações, enfrentando dilemas morais e lidando com a complexidade do papel de um Jedi durante a guerra. Eventualmente, Ahsoka se vê injustamente acusada de um crime e decide deixar a Ordem Jedi.
	</p>
	<p>
	Após sua saída da Ordem Jedi, Ahsoka retorna em "Star Wars Rebels", outra série de animação, onde se torna uma peça-chave na formação da Aliança Rebelde contra o Império Galáctico. Ela se torna uma figura de liderança e mentor para o grupo de rebeldes, ajudando a guiar e inspirar seus aliados.
	</p>
	<p>
	Ahsoka também apareceu em "The Mandalorian", outra série de TV aclamada do universo Star Wars. Sua participação nessa série gerou grande empolgação entre os fãs, especialmente devido ao encontro com o adorado personagem Baby Yoda (Grogu). Essa aparição solidificou ainda mais o status de Ahsoka como uma personagem icônica e querida pelos fãs.
	</p>
	<p>
	Através de sua história e evolução como personagem, Ahsoka Tano se destaca por sua força, sabedoria e coragem. Ela representa os ideais Jedi, mesmo após ter deixado a Ordem, e se tornou um símbolo de resiliência e esperança para muitos fãs. Ahsoka Tano é uma personagem cativante e inspiradora que continua a ter um impacto significativo no universo de Star Wars.
	</p>
	'
		, 50, 50, 'Episodio II ao III',6);

insert into tb_personagem values 
	(7, 'Darth Vader', 'https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg?region=0%2C107%2C1280%2C640','
	<p>
	Darth Vader é um dos personagens mais icônicos e temidos do universo Star Wars. Anteriormente conhecido como Anakin Skywalker, ele foi um habilidoso Jedi que sucumbiu ao lado sombrio da Força.
	</p>
	<p>
	Após uma série de eventos trágicos e manipulações do Lorde Sith Darth Sidious, Anakin foi seduzido pelo poder do lado negro e se tornou o temível Darth Vader.
	</p>
	<p>
	Vader é reconhecido por sua armadura negra imponente, que lhe concede força e proteção, e sua respiração característica, causada pelas sequelas de um confronto com o lado sombrio.
	</p>
	<p>
	Como aprendiz de Sidious, Vader foi um dos pilares do regime opressor do Império Galáctico, espalhando medo e impondo a vontade do Imperador por toda a galáxia.
	</p>
	<p>
	Apesar de sua aparência ameaçadora e comportamento impiedoso, há uma tragédia por trás de Darth Vader. Anakin Skywalker foi consumido pela dor, pela perda e pelo desejo de salvar aqueles que amava, mas suas escolhas o levaram a se tornar um agente do mal.
	</p>
	<p>
	No entanto, ao longo da saga, há uma jornada de redenção para Vader. Em seus momentos finais, ele encontra a força para rejeitar o lado negro e salvar seu filho, Luke Skywalker, do Imperador, sacrificando-se no processo.
	</p>
	<p>
	O legado de Darth Vader é complexo, representando a dualidade entre o bem e o mal, o poder e a redenção. Ele personifica a luta interna entre a luz e a escuridão que existe em todos nós, e sua história serve como um lembrete de que, mesmo nas circunstâncias mais sombrias, a redenção e a esperança podem prevalecer.
	</p>
	'
		, 70, 30, 'Episodio III ao VI',10);

	
insert into tb_personagem values 
	(9, 'Darth Maul', 'https://cdna.artstation.com/p/assets/images/images/004/451/292/large/max-hugo-maul.jpg?1483890098','
	<p>
	Darth Maul é um dos vilões mais icônicos da saga Star Wars. Ele é um poderoso e temido Sith, reconhecido por sua aparência distinta e suas habilidades de combate excepcionais.
	</p>
	<p>
	Maul foi treinado como um aprendiz do Lorde Sith Darth Sidious, também conhecido como Imperador Palpatine. Sua destreza com um sabre de luz duplo e seu estilo de luta agressivo o tornam um adversário formidável.
	</p>
	<p>
	Ele é conhecido por sua pele vermelha, seus chifres proeminentes e seu rosto marcado por tatuagens. Esses traços físicos distintos refletem sua natureza feroz e implacável.
	</p>
	<p>
	Embora Maul tenha sido inicialmente derrotado por Obi-Wan Kenobi, ele retorna à saga em outros momentos, demonstrando sua tenacidade e desejo de vingança.
	</p>
	<p>
	Apesar de sua personalidade silenciosa e determinada, Maul é um exemplo de como o ódio e a raiva podem consumir um indivíduo, levando-o ao lado sombrio da Força.
	</p>
	<p>
	O personagem de Darth Maul é conhecido por sua presença ameaçadora e suas habilidades de combate acrobáticas. Ele personifica a periculosidade dos Sith e a importância de nunca subestimar o poder do lado negro.
	</p>
	'
		, 80, 20, 'Episodio I',10);

insert into tb_sabreDeLuz values 
  (null, 'Cristal Verde', 'Empunhadura reta', 'Lente de foco ajustável', 'Cabo de aço', 'Verde', 1),
  (null, 'Cristal Azul', 'Empunhadura curva', 'Lente de foco fixa', 'Cabo de aço', 'Azul', 2),
  (null, 'Cristal Verde', 'Empunhadura reta', 'Lente de foco ajustável', 'Cabo de aço', 'Verde', 3),
  (null, 'Cristal Roxo', 'Empunhadura reta', 'Lente de foco ajustável', 'Cabo de aço', 'Roxo', 4),
  (null, 'Cristal Branco', 'Empunhadura Curva', 'Lente de foco fixa', 'Cabo de aço', 'Branco', 5),
  (null, 'Cristal Branco', 'Empunhadura Curva', 'Lente de foco Ajustavel', 'Cabo de aço prateado', 'Branco', 5),
  (null, 'Cristal Azul', 'Empunhadura reta', 'Lente de foco Ajustavel', 'Cabo de aço prateado', 'Azul Escuro', 6),
  (null, 'Cristal Vermelho', 'Empunhadura reta Alongada', 'Lente de foco fixa', 'Cabo de aço negro', 'Vermelho', 7),
  (null, 'Cristal Vermelho', 'Empunhadura Curva Alongada', 'Lente de foco fixa', 'Cabo de aço prateado', 'Vermelho', 8),
  (null, 'Cristal Vermelho', 'Empunhadura reta com saida dupla', 'Lente de foco fixa', 'Cabo de aço prateado', 'Vermelho', 9),
  (null, 'Cristal Vermelho', 'Empunhadura reta', 'Lente de foco ajustável', 'Cabo de aço, com detalhes em ouro', 'Vermelho', 10),
  (null, 'Cristal Vermelho', 'Empunhadura reta', 'Lente de foco ajustável', 'Cabo de aço, com detalhes em ouro', 'Vermelho', 10);
  
select * from tb_curtida; 
select * from tb_personagem;	
select * from usuario;
select * from tb_sabreDeLuz;