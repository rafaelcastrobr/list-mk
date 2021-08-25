

const btnGera = document.querySelector('.gera-resultado__btn');
btnGera.addEventListener('click', () => {
  const textArea = document.querySelector('.resultado-area')
  let titulo = document.querySelectorAll('.lista-dados--titulo');
  let diretor = document.querySelectorAll('.lista-dados--diretor');
  
  textArea.innerHTML = ``;
  for(let i=0; i<titulo.length; i++){
      textArea.innerHTML += (`${titulo[i].value}, de ${diretor[i].value}\n`);
  }
})
  let titulos = [];
  function imdb__btn(){
    let titulo = document.querySelectorAll('.lista-dados--titulo');
    for(let i=0; i<titulo.length; i++) {
      titulos.push(titulo[i].value);
    }

    for(let j in titulos) {
      if(titulos[j] === titulos[j]){
          window.open(`http://www.imdb.com/find?q=${titulos[j]}`, '_blank')
    
      }

    }
      
  }
/*
  const btnBusca = document.querySelectorAll('.lista-imdb__btn');
  btnBusca.addEventListener('click', () => {
    let titulo = document.querySelectorAll('.lista-dados--titulo');
    console.log('oi')
    window.open(`http://www.imdb.com/find?q=${titulos}`, '_blank')
    //console.log(titulos)
  });
*/

const btnMais = document.querySelector('.lista-mais__btn');
btnMais.addEventListener('click', () => {
  // ===== titulo
  const proxLinha = document.querySelector('.proxLinha');
  const div = document.createElement('div');
  div.className = 'lista-dados';
  const label = document.createElement('label');
  label.innerHTML = 'Título:';
  div.append(label);
  const input = document.createElement('input');
  input.className = 'lista-dados--titulo';
  input.type = 'text';
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
  labelIMDb.innerHTML = 'IMDb:';
  divIMDb.append(labelIMDb);
  const inputIMDb = document.createElement('input');
  inputIMDb.className = 'lista-imdb--linkImdb';
  inputIMDb.type = 'text';
  divIMDb.append(inputIMDb)
  const inputIMDbButton = document.createElement('button');
  inputIMDbButton.className = 'lista-imdb__btn';
  inputIMDbButton.onclick = imdb__btn;
  inputIMDbButton.innerHTML = 'buscar filme no imdb';
  divIMDb.append(inputIMDbButton);

  proxLinha.append(div);
  proxLinha.appendChild(divIMDb);
})