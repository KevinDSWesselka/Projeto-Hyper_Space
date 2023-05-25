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
  montar_estrutura('TITULO QUIZ', 'https://img.elo7.com.br/product/original/2169463/banner-painel-star-wars-3x2m-festa-aniversario.jpg', 'Sith', 'Jedi', 'Sith', 'Jedi'),
  montar_estrutura('TITULO QUIZ', 'https://i.redd.it/l3fya3oustw41.jpg', 'Sith', 'Jedi', 'Sith', 'Jedi'),
  montar_estrutura('TITULO QUIZ', 'https://milnersblog.files.wordpress.com/2020/02/star-wars-the-high-republic-light-of-the-jedi-textless-banner.jpg', 'Sith', 'Jedi', 'Sith', 'Jedi'),
  montar_estrutura('TITULO QUIZ', 'https://meups.com.br/wp-content/uploads/2021/05/Star-Wars-Jedi-Fallen-Order.jpg', 'Sith', 'Jedi', 'Sith', 'Jedi'),
  montar_estrutura('TITULO QUIZ', 'https://dropsdejogos.uai.com.br/wp-content/uploads/sites/10/2020/07/star-wars-1-scaled.jpg', 'Sith', 'Jedi', 'Sith', 'Jedi'),
  montar_estrutura('TITULO QUIZ', 'https://wallpapercave.com/wp/1Nyv4Mp.jpg', 'Sith', 'Jedi', 'Sith', 'Jedi'),
  montar_estrutura('TITULO QUIZ', 'https://cdn.wallpapersafari.com/74/20/u3XqmH.jpg', 'Sith', 'Jedi', 'Sith', 'Jedi'),
  montar_estrutura('TITULO QUIZ', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQttAiXd5iyozi0WeGe2oHyzd-8MQVq_jxBcuwZ2RAslq2Yqv0D3BfAQadDQoLHeFDmhEQ&usqp=CAU', 'Sith', 'Jedi', 'Sith', 'Jedi'),
  montar_estrutura('TITULO QUIZ', 'https://wallpaperaccess.com/full/2828950.jpg', 'Sith', 'Jedi', 'Sith', 'Jedi')
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

        <div class="grafico">
        <h3>Resultados Graficos</h3>
        ${jedi_por_cen * 10}% Jedi<div style="width: ${jedi_por_cen * 10}%; height: 30px; margin: 5px; background-color: blue; transition: 2.5s;"></div>
        ${sith_por_cen * 10}% Sith<div style="width: ${sith_por_cen * 10}%; height: 30px; margin: 5px; background-color: red; transition: 2.5s;"></div>
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

        <div class="grafico">
        <h3>Resultados Graficos</h3>
        ${jedi_por_cen * 10}% Jedi<div style="width: ${jedi_por_cen * 10}%; height: 30px; margin: 5px; background-color: blue; transition: 2.5s;"></div>
        ${sith_por_cen * 10}% Sith<div style="width: ${sith_por_cen * 10}%; height: 30px; margin: 5px; background-color: red; transition: 2.5s;"></div>
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
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, laboriosam. Corporis ratione placeat impedit delectus consequatur, adipisci aliquam tempore corrupti quibusdam explicabo dolorem officia ut veniam omnis quisquam laborum? Quasi.
        Eveniet officiis accusantium, dolore tempora explicabo magni, ullam adipisci facilis ducimus eius necessitatibus laudantium. Animi sed sequi officiis voluptatibus aliquid odit consectetur sapiente dolor voluptate repudiandae atque laborum, dignissimos corporis!
        Nemo porro delectus facere magnam nobis ullam, ea perspiciatis. Ab obcaecati voluptatem dicta. Voluptas sapiente dolor doloremque deleniti commodi earum velit expedita. Officiis, enim illum vel molestias quod a? Odio.
        Eos eius ipsam tempore enim deserunt maxime nostrum fugit sequi, reprehenderit aliquid nobis! Minus odio, eligendi ad voluptates aperiam deserunt a nemo rem, perferendis repellat beatae cumque architecto laborum atque.
        Cupiditate ullam est minima. Quod quos ducimus consequuntur repellat aperiam suscipit maiores rerum repudiandae inventore, et voluptatum laudantium molestiae hic accusamus incidunt unde fugiat veniam atque nostrum. Vitae, voluptates nihil.
        Dignissimos accusantium consequatur, placeat hic dolor eveniet perferendis beatae at aliquam explicabo atque optio molestiae amet temporibus! Neque facere consequatur earum possimus odio quos! Dolor obcaecati placeat explicabo hic expedita.
        Qui, ea. In atque nemo placeat facilis suscipit distinctio sed blanditiis eum vel exercitationem quisquam, amet at veniam, ad vitae tempora debitis culpa asperiores excepturi aperiam? Voluptas adipisci cum velit?
        Aperiam quibusdam fuga quia libero earum, nisi ipsam exercitationem consequuntur laboriosam cupiditate doloremque autem assumenda consectetur esse quis, tenetur rem ipsa ad minus quo! Nulla aspernatur corporis voluptatum amet dolore!
        Nihil ipsa repudiandae illum maiores distinctio, culpa dolore doloremque quam, quae ut autem sed architecto consequatur? Atque impedit delectus enim excepturi mollitia id nihil corporis ex, sapiente doloribus ipsam officia!
        Nobis ipsam accusantium, delectus aut totam sint eos aperiam numquam in possimus iste accusamus facilis porro. Corporis consequatur esse distinctio minus 2rem aspernatur reiciendis impedit possimus? Porro, aut. Nihil, minus!
        <a href="./paths.html">Tente novamente</a>

        <div class="grafico">
        <h3>Resultados Graficos</h3>
        ${jedi_por_cen * 10}% Jedi<div style="width: ${jedi_por_cen * 10}%; height: 30px; margin: 5px; background-color: blue; transition: 2.5s;"></div>
        ${sith_por_cen * 10}% Sith<div style="width: ${sith_por_cen * 10}%; height: 30px; margin: 5px; background-color: red; transition: 2.5s;"></div>
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