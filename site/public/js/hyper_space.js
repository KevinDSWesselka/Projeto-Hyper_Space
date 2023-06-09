
if (sessionStorage.length == 0) {
    alert("Você ainda não obteve acesso a força!")
    window.location = "./cadastro.html"
}

var descricoes = document.getElementById("descricoes")
var likes = 0;

function lado_da_forca() {
    if (sessionStorage.JEDI > sessionStorage.SITH) {
        span_lado.innerHTML = `Vejo que você tem <span style="color: blue;"> ${sessionStorage.JEDI}% de tendencia ao lado JEDI</span>, busque mais conhecimento sobre os Jedis com grandes mestre como <a class="linkCharacters" href="#Minch Yoda"> Minch Yoda </a>, <a class="linkCharacters" href="#Obi-Wan Kenobi"> Obi-Wan Kenobi </a>, <a class="linkCharacters" href="#Qui-Gon Jinn"> Qui-Gon Jinn </a>, <a class="linkCharacters" href="#Mace Windu"> Mace Windu </a> e <a class="linkCharacters" href="#Anakin Skywalker"> Anakin Skywalker </a>.`
    } else if (sessionStorage.JEDI < sessionStorage.SITH) {
        span_lado.innerHTML = `Vejo que você tem <span style="color: red;"> ${sessionStorage.SITH}% de tendencia ao lado SITH</span>, procure por poder com lords SITH como <a class="linkCharacters" href="#Darth Vader"> Darth Vader </a>, <a class="linkCharacters" href="#Count Dooku - Darth Tyranus"> Count Dooku - Darth Tyranus </a>, <a class="linkCharacters" href="#Darth Maul"> Darth Maul</a> e <a class="linkCharacters" href="#Palpatine - Darth Sidious"> Palpatine - Darth Sidious</a>`
    } else if (sessionStorage.JEDI == 'null' || sessionStorage.SITH == 'null') {
        span_lado.innerHTML = `Você ainda não pasou pelos teste da força! 
      <a style="color: gold;" href="./paths.html">Click aqui e passe pelo teste.</a>`;
    } else {
        span_lado.innerHTML = `Vejo que você tem <span style="color: gold;"> ${sessionStorage.SITH}% SITH e ${sessionStorage.JEDI}% JEDI, você tem o equilibrio da força</span>, busque mais conhecimento sobre o equilibrio com grandes mestre como <a class="linkCharacters" href="#Ahsoka Tano"> Ahsoka Tano</a> e <a class="linkCharacters" href="#Qui-Gon Jinn"> Qui-Gon Jinn</a>.`
    }
}

window.onload = () => {
    fetch("/personagens/pegar_personagens", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then(async function (response) {
        lado_da_forca()
        const characters = await response.json();
        for (i = 0; i < characters.length; i++) {
            const character = characters[i];

            var btnContainerId = `btn_container_${character.id_personagem}`; // identificador exclusivo para o contêiner do botão

            container_characters.innerHTML += `
        <p/><br><p/>
        <span id="${character.nome_personagem}">
          <div>
            <h1>${character.nome_personagem}</h1>
            <br>
          </div>
          <div>
            <img title="${character.nome_personagem}" style=" width: 100%; height: 450px; border-radius: 10px" src="${character.url_personagem}" alt="">
          </div>
          
          <div>
            <br>
            <h2>Os paços de ${character.nome_personagem}</h2>
            <p>
            <br>
            ${character.desc_texto}
            </p>
            <br>
          </div>
        </span>
          <div width: 470px;">
            <div class="grafico">
              <h3>Tendencia da Força de ${character.nome_personagem}</h3>
              <span>${character.jedi_por_cen}% Jedi</span>
              <div style="width: ${character.jedi_por_cen}%; height: 30px; margin: 5px; background-color:  rgb(0, 0, 184);"></div>
              <span>${character.sith_por_cen}% Sith</span>
              <div style="width: ${character.sith_por_cen}%; height: 30px; margin: 5px; background-color: rgb(220, 0, 0);"></div>
            </div>
            <div class="grafico">
              <h3>Tendencia da Força de ${sessionStorage.NOME_USUARIO}</h3>
              <span>${sessionStorage.JEDI}% Jedi</span>
              <div style="width: ${sessionStorage.JEDI}%; height: 30px; margin: 5px; background-color:  rgb(0, 0, 184);"></div>
              <span>${sessionStorage.SITH}% Sith</span>
              <div style="width: ${sessionStorage.SITH}%; height: 30px; margin: 5px; background-color: rgb(220, 0, 0);"></div>
            </div>
          </div>
          <br>

          <div>
            <button title="Sera contabilizado apenas uma vez!" class="like" onclick="likeCharacter(${character.id_personagem})">Prestar respeito</button>
            <span id="${btnContainerId}">  </span> Prestaram seu respeito
          </div>

          <p/><br><p/>
      `;

            getCurtida(character.id_personagem, btnContainerId);
        }
    });
};

function likeCharacter(characterId) {
    alert(`Sua admiração foi feita e não pode ser desfeita...`);
    window.location.reload();
    fetch("/curtidas/post-curtida", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            idUsuario: sessionStorage.ID_USUARIO,
            idPersonagem: characterId,
        }),
    }).then(async function (response) { });
}

function getCurtida(characterId, containerId) {
    fetch(`/curtidas/get-curtida/${characterId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    }).then(async function (response) {
        const curtidas = await response.json()
        const span = document.getElementById(containerId);
        span.insertAdjacentHTML('beforeend', `<span class="contador-curtidas">${curtidas[0].curtidas}</span>`);
    });
}
