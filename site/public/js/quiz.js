var jedi_por_cen = 0;
var sith_por_cen = 0;
var contador_quiz = 0;

function montar_estrutura(titulo, imagem, pergunta1, pergunta2, pergunta3, pergunta4) {
  return `
  <div id="container">
        <h1>HYPER-SPACE</h1>
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
        <h1>HYPER-SPACE</h1>
        <div class="filtro_quiz">
          <div class="titulo_quiz">
            TITULO QUIZ
          </div>
        </div>
          <img class="img_quiz" src="https://wallpaperaccess.com/full/353673.jpg" alt="">
          <div class="resposta_final">
        <h1>balance of the force</h1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, laboriosam. Corporis ratione placeat impedit delectus consequatur, adipisci aliquam tempore corrupti quibusdam explicabo dolorem officia ut veniam omnis quisquam laborum? Quasi.
        Eveniet officiis accusantium, dolore tempora explicabo magni, ullam adipisci facilis ducimus eius necessitatibus laudantium. Animi sed sequi officiis voluptatibus aliquid odit consectetur sapiente dolor voluptate repudiandae atque laborum, dignissimos corporis!
        Nemo porro delectus facere magnam nobis ullam, ea perspiciatis. Ab obcaecati voluptatem dicta. Voluptas sapiente dolor doloremque deleniti commodi earum velit expedita. Officiis, enim illum vel molestias quod a? Odio.
        Eos eius ipsam tempore enim deserunt maxime nostrum fugit sequi, reprehenderit aliquid nobis! Minus odio, eligendi ad voluptates aperiam deserunt a nemo rem, perferendis repellat beatae cumque architecto laborum atque.
        Cupiditate ullam est minima. Quod quos ducimus consequuntur repellat aperiam suscipit maiores rerum repudiandae inventore, et voluptatum laudantium molestiae hic accusamus incidunt unde fugiat veniam atque nostrum. Vitae, voluptates nihil.
        Dignissimos accusantium consequatur, placeat hic dolor eveniet perferendis beatae at aliquam explicabo atque optio molestiae amet temporibus! Neque facere consequatur earum possimus odio quos! Dolor obcaecati placeat explicabo hic expedita.
        Qui, ea. In atque nemo placeat facilis suscipit distinctio sed blanditiis eum vel exercitationem quisquam, amet at veniam, ad vitae tempora debitis culpa asperiores excepturi aperiam? Voluptas adipisci cum velit?
        Aperiam quibusdam fuga quia libero earum, nisi ipsam exercitationem consequuntur laboriosam cupiditate doloremque autem assumenda consectetur esse quis, tenetur rem ipsa ad minus quo! Nulla aspernatur corporis voluptatum amet dolore!
        Nihil ipsa repudiandae illum maiores distinctio, culpa dolore doloremque quam, quae ut autem sed architecto consequatur? Atque impedit delectus enim excepturi mollitia id nihil corporis ex, sapiente doloribus ipsam officia!
        Nobis ipsam accusantium, delectus aut totam sint eos aperiam numquam in possimus iste accusamus facilis porro. Corporis consequatur esse distinctio minus rem aspernatur reiciendis impedit possimus? Porro, aut. Nihil, minus!
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
        <h1>HYPER-SPACE</h1>
        <div class="filtro_quiz">
          <div class="titulo_quiz">
            TITULO QUIZ
          </div>
        </div>
          <img class="img_quiz" src="https://media.moddb.com/images/groups/1/7/6367/swtor-empire-set-by-morie-torwars-343693.jpg" alt="">
          <div class="resposta_final">
        <h1>SITH ORDER</h1>
        A Ordem Sith é uma antiga e poderosa organização que busca o domínio absoluto e a realização de seus desejos através do poder da Força. Os Sith são conhecidos por seu apego ao lado sombrio da Força e por sua busca incessante pelo poder pessoal.
        <br>
        Diferente dos Jedi, os Sith não se limitam pelos conceitos de equilíbrio e harmonia. Eles abraçam suas emoções mais intensas, como raiva, ódio e ambição, utilizando-as como fonte de poder e motivação. Os Sith acreditam que o lado sombrio é a chave para alcançar o verdadeiro potencial na Força.
        <br>
        A busca pelo poder é o princípio central dos Sith. Eles estão dispostos a fazer o que for necessário para obter mais poder, mesmo que isso signifique enganar, trair e subjugar aqueles ao seu redor. Para os Sith, a força bruta e a dominação são meios legítimos para alcançar seus objetivos, independentemente das consequências.
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
        <h1>HYPER-SPACE</h1>
        <div class="filtro_quiz">
          <div class="titulo_quiz">
            TITULO QUIZ
          </div>
        </div>
          <img class="img_quiz" src="https://i.pinimg.com/originals/86/fe/89/86fe8981b049d62502fed2db5f092ed7.jpg" alt="">
          <div class="resposta_final">
        <h1>JEDI ORDER</h1>
        A Ordem Jedi é uma antiga e venerada organização de guardiões da paz e da justiça na galáxia. Com uma história rica que remonta a milhares de anos, os Jedi são conhecidos por seus poderes na Força e seu compromisso com a proteção dos indefesos.
        <br>
        Os Jedi seguem uma série de princípios que orientam suas ações e sua maneira de viver. O cerne desses princípios é a busca pelo equilíbrio entre o lado claro e o lado sombrio da Força, bem como a promoção da harmonia e do bem-estar na galáxia.
        <br>
        Um dos princípios fundamentais dos Jedi é a defesa e proteção dos outros. Eles veem a si mesmos como guardiões da paz, dedicados a preservar a estabilidade e a segurança. Os Jedi são treinados para usar seus poderes na Força para ajudar os necessitados e lutar contra a injustiça, muitas vezes colocando suas próprias vidas em risco para cumprir sua missão.
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

function paths_js(){
  console.log("Id do usuario", sessionStorage.ID_USUARIO,);
  fetch('/usuarios/paths_route',{
    method: 'PUT',
    headers: {
      "Content-Type":"application/json"
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