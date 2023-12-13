let divPorcoes = document.querySelector(".listaPorcoes");

fetch("porcoes.json").then((response) => {
  response.json().then((dados) => {
    dados.listaPorcoes.map((porcoes) => {
      divPorcoes.innerHTML += `
        <div class="coluna">
            <div class="descricao">
              <h3>${porcoes.nome}</h3>
              <h4>${porcoes.descricao}</h4>
            </div>
            <div>
              <p>R$${porcoes.preco}</p>
            </div>
        </div>
        `;
    });
  });
});
