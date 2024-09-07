function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Se pesquisa for uma string vazia, não faça nada
    if(!campoPesquisa){
        alert("Nada foi encontrado. Você precisa digitar o nome de um mineral.")
        return
    }

    
    campoPesquisa = campoPesquisa.toLocaleLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let nome = "";
    let descricao = "";
    let grupo = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        nome = dado.nome.toLocaleLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()
        grupo = dado.grupo.toLocaleLowerCase()
        // Se nome includes campoPesquisa
        if(nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || grupo.includes(campoPesquisa)) {
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
    }
    if(!resultados){
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}