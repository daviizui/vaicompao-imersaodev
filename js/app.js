function btnAside(playlist) {
  let aside = document.getElementById("resultados-pesquisa");
  
  let resultados = "";

    
  for (let dado of playlists[playlist]) {
      resultados += `
        <div class="item-resultado">
          <h2 class="item-titulo">${dado.titulo}</h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <iframe width="640" height="360" src="${dado.video}"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div> 
      `
    };
  aside.innerHTML = resultados;

};

function pesquisar() {
  
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value 
   
  if (campoPesquisa ==""){
    section.innerHTML = `<p class="menu__titulo">Nada foi encontrado.<p/>`
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  let resultados = "";
  let titulo = "";
  let descricao = "";
  let todosOsDados = [];

  for (let playlist in playlists) {
      todosOsDados = todosOsDados.concat(playlists[playlist]);
  }

  for (let dado of todosOsDados) {  
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()    
   
    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
      resultados += `
        <div class="item-resultado">
          <h2 class="item-titulo">${dado.titulo}</h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <iframe width="640" height="360" src="${dado.video}"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div> 
      `
    }   
  }

  if (!resultados) {
    resultados = `<p class="menu__titulo">Nada foi encontrado</p>`
  }

  section.innerHTML = resultados;
};