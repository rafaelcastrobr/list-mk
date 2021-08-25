
// ==== botão que gera resultado
const btnGera = document.querySelector('.gera-resultado__btn');
btnGera.addEventListener('click', () => {
  const textArea = document.querySelector('.resultado-area')
  let titulo = document.querySelectorAll('.lista-dados--titulo');
  let diretor = document.querySelectorAll('.lista-dados--diretor');
  let id = document.querySelectorAll('.lista-imdb--linkImdb');
  let fest = document.querySelector('.lista-festival--titulo').value;
  
  textArea.innerHTML = ``;
  for(let i=0; i<titulo.length; i++){
      textArea.innerHTML = `[center][size=6][b][color=#000080]SELEÇÃO OFICIAL DE ${fest.toUpperCase()} [/color][/b][/size][/center]\n`
      textArea.innerHTML += (`[url=https://www.imdb.com/title/${id[i].value}/][img=https://imagizer.imageshack.us/a/img923/8099/6faAjm.jpg][/url] ${titulo[i].value}, de ${diretor[i].value}\n`);
  }
})

// ==== gera numero aleatório para a id
function getRandom(max=1, min=10000) {
  return Math.floor(Math.random() * (max - min)+min)
}

// ==== botão que adiciona novas áreas
const btnMais = document.querySelector('.lista-mais__btn');
btnMais.addEventListener('click', () => {
  const numAlea = getRandom();

  // ===== titulo
  const proxLinha = document.querySelector('.proxLinha');
  const div = document.createElement('div');
  div.className = 'lista-dados';
  const label = document.createElement('label');
  label.innerHTML = 'Título:';
  div.append(label);
  const input = document.createElement('input');
  input.className = `lista-dados--titulo`;
  input.type = 'text';
  input.id = `${numAlea}`;
  div.append(input);
  // ===== diretor
  const labelD = document.createElement('label');
  labelD.innerHTML = 'Diretor:';
  div.append(labelD);
  const inputD = document.createElement('input');
  inputD.className = 'lista-dados--diretor';
  inputD.type = 'text';
  div.append(inputD)
  // ===== IMDb
  const divIMDb = document.createElement('div');
  divIMDb.className = 'lista-imdb';
  const labelIMDb = document.createElement('label');
  labelIMDb.innerHTML = 'ID IMDb:';
  divIMDb.append(labelIMDb);
  const inputIMDb = document.createElement('input');
  inputIMDb.className = 'lista-imdb--linkImdb';
  inputIMDb.type = 'text';
  divIMDb.append(inputIMDb)
  const inputIMDbButton = document.createElement('button');
  inputIMDbButton.className = `lista-imdb__btn`;
  inputIMDbButton.id = `${numAlea}`;
  inputIMDbButton.innerHTML = 'buscar filme no imdb';
  inputIMDbButton.onclick = btn_imdb;
  divIMDb.append(inputIMDbButton);

  proxLinha.append(div);
  proxLinha.appendChild(divIMDb);
})

// ==== botão que busca no imdb
function btn_imdb() {

  let numId = event.target.id;

  const nomeFilm = document.getElementById(`${numId}`).value;

  window.open(`http://www.imdb.com/find?q=${nomeFilm}`, '_blank')

}

