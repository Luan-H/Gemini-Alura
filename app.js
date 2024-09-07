function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    campoPesquisa = campoPesquisa.toLowerCase()
    // Inicializa uma string vazia para armazenar o HTML dos resultados.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    // Itera sobre cada objeto (dado) no array 'dados'. Cada objeto representa um resultado da pesquisa.
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            resultados += `
            <div class="item-resultado"> 
                <h2> 
                    <a href="#" target="_blank">
                        ${dado.titulo}
                    </a> 
                </h2>
                <p class="descricao-meta">
                    ${dado.descricao}
                </p> 
                <a href=${dado.link} target="_blank">
                    Mais informações
                </a> 
            </div>
        `;
        }
    }
    // Atribui o HTML gerado para o elemento HTML selecionado anteriormente.
    // Isso substitui o conteúdo atual da seção pelos resultados da pesquisa.
    section.innerHTML = resultados;
}