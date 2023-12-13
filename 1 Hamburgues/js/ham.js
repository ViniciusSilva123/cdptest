let divhambur = document.querySelector(".listahambur");

fetch("ham.json").then((response) => {
  response.json().then((dados) => {
    dados.listahambur.map((hambur) => {
      divhambur.innerHTML += `
        <div class="coluna">
            <div class="descricao">
              <h3>${hambur.nome}</h3>
              <h4>${hambur.descricao}</h4>
            </div>
            <div>
              <p>R$${hambur.preco}</p>
            </div>
        </div>
        `;
    });
  });
});
