var jedi_por_cen = 0;
var sith_por_cen = 0;
var contador_quiz = 0;

if (sessionStorage.length == 0) {
  alert("Você ainda não obteve acesso a força!")
  window.location = "./cadastro.html"
}

function montar_estrutura(titulo, imagem, pergunta1, pergunta2, pergunta3, pergunta4) {
  return `
  <div id="container">
        <h1>Paths of the Force</h1>
        <div class="filtro_quiz">
          <div class="titulo_quiz">
            ${titulo}
          </div>
        </div>
          <img class="img_quiz" src="${imagem}" alt="">
    </div>
    <div id="opicao_1" class="opicao_quiz" onclick="opicao_sith(); proxima_opicao()">
      ${pergunta1}
    </div>
    <div id="opicao_2" class="opicao_quiz" onclick="opicao_jedi(); proxima_opicao()">
      ${pergunta2}
    </div>
    <div id="opicao_3" class="opicao_quiz" onclick="opicao_sith(); proxima_opicao()">
      ${pergunta3}
    </div>
    <div id="opicao_4" class="opicao_quiz" onclick="opicao_jedi(); proxima_opicao()">
      ${pergunta4}
    </div>
  `;
}

var altera_quiz = [
  montar_estrutura('Qual é a sua abordagem preferida para lidar com adversários?', 'https://img.elo7.com.br/product/original/2169463/banner-painel-star-wars-3x2m-festa-aniversario.jpg', 'Usar a força bruta para subjugar e eliminar qualquer oponente.', 'Tentar encontrar um terreno comum e resolver conflitos pacificamente.', 'Aproveitar as fraquezas dos adversários para alcançar a vitória.', 'Procurar uma solução diplomática e negociar uma paz duradoura.'),
  montar_estrutura('Como você enxerga o equilíbrio entre o lado claro e o lado sombrio da Força?', 'https://i.redd.it/l3fya3oustw41.jpg', 'O lado sombrio é o caminho mais poderoso e deve ser explorado plenamente.', 'Acredito que é importante buscar o equilíbrio e a harmonia entre ambos.', 'O lado sombrio é uma tentação perigosa que deve ser evitada a todo custo.', 'O lado claro da Força deve prevalecer para manter a paz e a ordem.'),
  montar_estrutura('Qual é a sua visão sobre o uso da Força?', 'https://milnersblog.files.wordpress.com/2020/02/star-wars-the-high-republic-light-of-the-jedi-textless-banner.jpg', 'A Força é uma ferramenta para ganhar poder pessoal e influência.', 'Acredito que a Força deve ser usada para proteger e ajudar os outros.', 'A Força é uma ferramenta neutra que pode ser usada de acordo com a vontade do usuário.', 'A utilização da Força deve ser guiada pelos princípios da justiça e do equilíbrio.'),
  montar_estrutura('Como você encara o trabalho em equipe?', 'https://meups.com.br/wp-content/uploads/2021/05/Star-Wars-Jedi-Fallen-Order.jpg', ' Prefiro trabalhar sozinho, confiando apenas em minhas próprias habilidades.', 'Valorizo a colaboração e a união de esforços para alcançar objetivos comuns.', 'É melhor confiar em si mesmo do que depender dos outros para alcançar o sucesso.', 'Acredito que o trabalho em equipe é essencial para superar desafios e adversidades.'),
  montar_estrutura('Como você se sente em relação às emoções?', 'https://dropsdejogos.uai.com.br/wp-content/uploads/sites/10/2020/07/star-wars-1-scaled.jpg', 'As emoções são poderosas e devem ser usadas para fortalecer nosso poder e determinação.', 'Acredito que devemos reconhecer e compreender nossas emoções sem deixá-las nos controlar.', 'As emoções são uma fraqueza que pode nos levar a cometer erros e agir impulsivamente.', 'É importante controlar e canalizar nossas emoções para tomar decisões sábias.'),
  montar_estrutura('Qual é a sua postura em relação ao uso da violência?', 'https://wallpapercave.com/wp/1Nyv4Mp.jpg', 'A violência é uma ferramenta válida para alcançar meus objetivos.', 'Prefiro evitar a violência sempre que possível, buscando soluções pacíficas.', 'A violência é uma manifestação do poder que pode ser justificada em certas circunstâncias.', 'Acredito que a violência deve ser usada apenas em casos de extrema necessidade e defesa.'),
  montar_estrutura('Como você lida com as tentações e a sedução do lado sombrio da Força?', 'https://cdn.wallpapersafari.com/74/20/u3XqmH.jpg', 'Considero a sedução do lado sombrio como um teste de força de vontade pessoal.', ' Procuro ajuda e orientação de mentores e figuras sábias para resistir à sedução.', 'Aproveito as oportunidades para explorar o lado sombrio e seus benefícios.', 'Fico atento e resisto às tentações, mantendo-me fiel aos princípios do lado claro.'),
  montar_estrutura('Qual é a sua visão sobre a liberdade individual?', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQttAiXd5iyozi0WeGe2oHyzd-8MQVq_jxBcuwZ2RAslq2Yqv0D3BfAQadDQoLHeFDmhEQ&usqp=CAU', 'Acredito que cada indivíduo deve ter liberdade para fazer suas próprias escolhas.', 'A liberdade individual é menos importante do que a estabilidade e o controle social.', 'Acredito que a liberdade individual deve ser equilibrada com a responsabilidade coletiva.', 'A liberdade individual pode levar ao caos e deve ser limitada para manter a ordem.'),
  montar_estrutura('Como você encara o poder político?', 'https://wallpaperaccess.com/full/2828950.jpg', ' O poder político deve ser usado para subjugar e controlar os outros.', 'O poder político deve ser exercido de forma justa e em benefício de todos.', ' O poder político é um meio para atingir meus objetivos pessoais, independentemente das consequências.', 'Acredito em um sistema político equilibrado, com separação de poderes e participação democrática.')
]

function opicao_jedi() {
  jedi_por_cen++
}

function opicao_sith() {
  sith_por_cen++
}

function proxima_opicao() {

  conteudo.innerHTML = altera_quiz[contador_quiz];
  contador_quiz++

  if (contador_quiz == 10 && sith_por_cen == jedi_por_cen) {
    conteudo.innerHTML = `
    <div id="container">
        <h1>Resultados</h1>
        <div class="filtro_quiz">
          <div class="titulo_quiz">
          Usuários do equilíbrio da Força transcendem os extremos.
          </div>
        </div>
          <img class="img_quiz" src="https://wallpaperaccess.com/full/353673.jpg" alt="">
          <div class="resposta_final">
        <h1>Balance of the force</h1>
        <p>
        Os usuários que têm o equilíbrio da Força são indivíduos especiais e raros dentro do universo de Star Wars. Eles são aqueles que conseguem dominar tanto o lado luminoso quanto o lado sombrio da Força, encontrando um equilíbrio entre os dois.
        </p>
        <p>
        Esses usuários são frequentemente referidos como "equilibrados" ou "Grey Jedi" (Jedi Cinza). Eles não se alinham rigidamente com a Ordem Jedi ou com os Sith, mas buscam uma compreensão mais ampla da Força, além das divisões tradicionais entre o bem e o mal.
        </p>
        <p>
        Os usuários do equilíbrio da Força possuem uma visão única e uma perspectiva mais abrangente. Eles reconhecem que tanto o lado luminoso quanto o lado sombrio têm suas vantagens e desvantagens, e procuram usar seus poderes e habilidades de maneira responsável, evitando os extremos.
        </p>
        <p>
        Embora os usuários do equilíbrio da Força sejam raros e possam ser vistos como dissidentes pelos Jedi e Sith, eles têm um papel importante na saga Star Wars. Eles desafiam as convenções estabelecidas e exploram a natureza complexa da Força, questionando as limitações e restrições impostas pelos dogmas Jedi e Sith.
        </p>
        <p>
        Alguns exemplos de personagens que são considerados usuários do equilíbrio da Força incluem Qui-Gon Jinn e Ahsoka Tano. Esses indivíduos procuram seguir seu próprio caminho, tomando decisões com base na intuição e no entendimento pessoal da Força, em vez de aderir estritamente a uma ideologia predefinida.
        </p>
        <p>
        Os usuários do equilíbrio da Força representam a ideia de que o verdadeiro poder vem do equilíbrio interior e do autocontrole. Eles são capazes de resistir às tentações do lado sombrio e usar sua compreensão da Força para promover a paz, a justiça e a harmonia.
        </p>
        <p>
        Em resumo, os usuários do equilíbrio da Força são indivíduos excepcionais que transcendem as limitações das ordens Jedi e Sith, buscando um caminho intermediário e uma compreensão mais ampla da Força. Eles desempenham um papel único na mitologia de Star Wars, desafiando as noções convencionais de bem e mal e explorando a complexidade dessa energia mística.
        </p>
        <a href="./paths.html">Tente novamente</a>

        <div id="grafico">
        <h3>Resultados Graficos</h3>
        ${jedi_por_cen * 10}% Jedi<div style="width: ${jedi_por_cen * 10}%; height: 30px; margin: 5px; background-color: rgb(0, 0, 184); transition: 2.5s;"></div>
        ${sith_por_cen * 10}% Sith<div style="width: ${sith_por_cen * 10}%; height: 30px; margin: 5px; background-color: rgb(220, 0, 0);; transition: 2.5s;"></div>
      </div>
      </div>
    `
    paths_js()
  } else if (contador_quiz == 10 && sith_por_cen > jedi_por_cen) {
    conteudo.innerHTML = `
    <div id="container">
        <h1>Resultados</h1>
        <div class="filtro_quiz">
          <div class="titulo_quiz">
            No abismo do lado negro, a escuridão revela seu poder sedutor.
          </div>
        </div>
          <img class="img_quiz" src="https://media.moddb.com/images/groups/1/7/6367/swtor-empire-set-by-morie-torwars-343693.jpg" alt="">
          <div class="resposta_final">
        <h1>SITH ORDER</h1>
        <p>
        Os usuários do lado negro da Força são indivíduos que se entregam à corrupção e à escuridão, buscando poder, dominação e autoafirmação a qualquer custo.
        </p>
        <p>
        Esses usuários são conhecidos como Sith, uma ordem de adeptos do lado sombrio que se opõem aos Jedi e abraçam a natureza emocional e passional da Força.
        </p>
        <p>
        Os Sith acreditam que o conflito e o ódio são ferramentas poderosas para moldar a galáxia de acordo com sua vontade. Eles desprezam a ideia de equilíbrio e buscam uma supremacia total, utilizando o medo e a opressão para subjugar os outros.
        </p>
        <p>
        Ao contrário dos Jedi, que procuram viver de acordo com um código de ética e servir ao bem comum, os usuários do lado negro da Força são impulsionados pela ambição pessoal e pelo desejo de controle absoluto. Eles não têm escrúpulos morais e estão dispostos a usar qualquer meio necessário para alcançar seus objetivos, mesmo que isso signifique causar dor e destruição.
        </p>
        <p>
        Os Sith são conhecidos por seus sabres de luz vermelhos, que são criados por corromper cristais de sabre de luz com sua própria energia negra. Esses sabres simbolizam a natureza maligna e distorcida dos Sith.
        </p>
        <p>
        Os usuários do lado negro da Força são retratados como vilões e antagonistas na saga Star Wars, representando a tentação e a perdição que a força sombria pode causar. Eles são um lembrete constante do perigo de ceder às emoções negativas e da importância de manter um equilíbrio entre a luz e a escuridão dentro de si mesmo.
        </p>
        <a href="./paths.html">Tente novamente</a>

        <div id="grafico">
        <h3>Resultados Graficos</h3>
        ${jedi_por_cen * 10}% Jedi<div style="width: ${jedi_por_cen * 10}%; height: 30px; margin: 5px; background-color: rgb(0, 0, 184); transition: 2.5s;"></div>
        ${sith_por_cen * 10}% Sith<div style="width: ${sith_por_cen * 10}%; height: 30px; margin: 5px; background-color: rgb(220, 0, 0);; transition: 2.5s;"></div>
      </div>
      </div>
    `
    paths_js()
  } else if (contador_quiz == 10 && jedi_por_cen > sith_por_cen) {
    conteudo.innerHTML = `
    <div id="container">
        <h1>Resultados</h1>
        <div class="filtro_quiz">
          <div class="titulo_quiz">
            Portadores da luz, os Jedi são guardiões da paz e da sabedoria.
          </div>
        </div>
          <img class="img_quiz" src="https://i.pinimg.com/originals/86/fe/89/86fe8981b049d62502fed2db5f092ed7.jpg" alt="">
          <div class="resposta_final">
        <h1>JEDI ORDER</h1>
        <p>
        Os usuários do lado Jedi da Força são indivíduos que dedicam suas vidas ao estudo e à prática dos ensinamentos Jedi, em busca de harmonia, sabedoria e paz.
        </p>
        <p>
        Esses usuários são membros da Ordem Jedi, uma organização antiga que promove valores como altruísmo, serenidade e justiça. Os Jedi se esforçam para usar seus poderes e habilidades em prol do bem e da proteção da galáxia.
        </p>
        <p>
        Os Jedi seguem um código de conduta rigoroso, que enfatiza o controle emocional, o autoaperfeiçoamento e o serviço aos outros. Eles buscam equilibrar suas ações e emoções, evitando o uso excessivo ou o abuso da Força.
        </p>
        <p>
        Os Jedi veem a Força como uma energia mística que permeia tudo e todos, e acreditam em seu poder para guiar e iluminar o caminho. Eles dominam a habilidade de usar os sabres de luz, armas elegantes e letais que refletem sua dedicação à causa Jedi.
        </p>
        <p>
        Os usuários do lado Jedi são retratados como heróis na saga Star Wars, defendendo a justiça e a liberdade contra as forças do mal. Eles enfrentam desafios e sacrifícios em nome do bem maior, inspirando esperança e resistência.
        </p>
        <p>
        Os Jedi representam a importância do autocontrole, do discernimento ético e do compromisso com o bem-estar coletivo. Eles são um símbolo de coragem, compaixão e nobreza de espírito, lutando pela paz e pela harmonia na galáxia.
        </p>
        <a href="./paths.html">Tente novamente</a>

        <div id="grafico">
        <h3>Resultados Graficos</h3>
        ${jedi_por_cen * 10}% Jedi<div style="width: ${jedi_por_cen * 10}%; height: 30px; margin: 5px; background-color: rgb(0, 0, 184); transition: 2.5s;"></div>
        ${sith_por_cen * 10}% Sith<div style="width: ${sith_por_cen * 10}%; height: 30px; margin: 5px; background-color: rgb(220, 0, 0);; transition: 2.5s;"></div>
      </div>
      </div>
    `
    paths_js()
  }
  console.log((sith_por_cen * 10) + "% sith", (jedi_por_cen * 10) + "% jedi");
  console.log((contador_quiz * 10) + "% do quiz completo");
}

function paths_js() {
  console.log("Id do usuario", sessionStorage.ID_USUARIO,);
  fetch('/usuarios/paths_route', {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: sessionStorage.ID_USUARIO,
      jedi: jedi_por_cen * 10,
      sith: sith_por_cen * 10,
    })
  })

  sessionStorage.SITH = sith_por_cen * 10;
  sessionStorage.JEDI = jedi_por_cen * 10;
}