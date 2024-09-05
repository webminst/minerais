function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        // Cria um novo elemento HTML para cada resultado
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.nome}</a>
                </h2>
                <p class="descricao-meta">${dado.titulo}</p>
                <p class="descricao-meta"><b>Grupo:</b> ${dado.grupo} - <b>Subgrupo:</b> ${dado.subgrupo}</p>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank"><b>Mais informações</b></a>
            </div>
        `;
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}
