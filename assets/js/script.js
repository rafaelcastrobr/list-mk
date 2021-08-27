function opFest() {
  const festivais = document.querySelector('#festivais');
  let num = festivais.selectedIndex;
  switch (num) {
    case 0:
      none = `none`;
      return alert('Escolha um Festival');
    case 1:
      nomeFest = 'Ariel';
      linkFest = `http://makingoff.org/forum/index.php?showtopic=45183`
      imgFest = `https://i.imgur.com/QDFiQBN.jpg`;
      none = `flex`;
      break;
    case 2:
      nomeFest = 'Berlim';
      linkFest = `https://makingoff.org/forum/index.php?showtopic=37666`
      imgFest = `https://i.imgur.com/lW4bEXk.jpg`;
      none = `flex`;
      break;
    case 3:
      nomeFest = 'Brasília';
      linkFest = `https://makingoff.org/forum/index.php?showtopic=39283`;
      imgFest = `https://i.imgur.com/fvjhvYf.jpg`;
      none = `flex`;
      break;
    case 4:
      nomeFest = 'Cannes';
      linkFest = `https://makingoff.org/forum/index.php?showtopic=37665`;
      imgFest = `https://i.imgur.com/l8sGx2f.jpg`;
      none = `flex`;
      break;
    case 5:
      nomeFest = 'Cine PE';
      linkFest = `https://makingoff.org/forum/index.php?showtopic=45541`;
      imgFest = `https://i.imgur.com/KEINeuG.jpg`;
      none = `flex`;
      break;
    case 6:
      nomeFest = 'Gramado';
      linkFest = `https://makingoff.org/forum/index.php?showtopic=37668`
      imgFest = `https://i.imgur.com/cua7aPt.jpg`;
      none = `flex`;
      break;
    case 7:
      nomeFest = 'Istambul';
      linkFest = `https://makingoff.org/forum/index.php?showtopic=42729`
      imgFest = `https://i.imgur.com/UKDHCeb.jpg`;
      none = `flex`;
      break;
    case 8:
      nomeFest = 'Locarno';
      linkFest = `https://makingoff.org/forum/index.php?showtopic=39831`;
      imgFest = `https://i.imgur.com/92RbKcA.png`;
      none = `flex`;
      break;
    case 9:
      nomeFest = 'Moscou';
      linkFest = `https://makingoff.org/forum/index.php?showtopic=42283`;
      imgFest = `https://i.imgur.com/es1361q.jpg`;
      none = `flex`;
      break;
    case 10:
      nomeFest = 'Oscar Internacional';
      linkFest = `https://makingoff.org/forum/index.php?showtopic=37706`;
      imgFest = `https://i.imgur.com/FcOhbBE.png`;
      none = `flex`;
      break;
    case 11:
      nomeFest = 'San Sebastián';
      linkFest = `https://makingoff.org/forum/index.php?showtopic=38925`
      imgFest = `https://i.imgur.com/Xa28A4x.jpg`;
      none = `flex`;
      break;
    case 12:
      nomeFest = 'Rotterdam';
      linkFest = `https://makingoff.org/forum/index.php?showtopic=39184`
      imgFest = `https://i.imgur.com/u1jWMDp.jpg`;
      none = `flex`;
      break;
    case 13:
      nomeFest = 'Sundance';
      linkFest = `https://makingoff.org/forum/index.php?showtopic=43165`;
      imgFest = `https://i.imgur.com/9Ym26Lx.jpg`;
      none = `flex`;
      break;
    case 14:
      nomeFest = 'Toronto';
      linkFest = `https://makingoff.org/forum/index.php?showtopic=43078`;
      imgFest = `https://i.imgur.com/Lwf0e49.jpg`;
      none = `flex`;
      break;
    case 15:
      nomeFest = 'Veneza';
      linkFest = `https://makingoff.org/forum/index.php?showtopic=37667`;
      imgFest = `https://i.imgur.com/n4mXViH.png`;
      none = `flex`;
      break;
  }
}



// ==== botão que gera resultado
const btnGera = document.querySelector('.gera-resultado__btn');
btnGera.addEventListener('click', () => {
  let titulo = document.querySelectorAll('.lista-dados--titulo');
  let diretor = document.querySelectorAll('.lista-dados--diretor');
  let id = document.querySelectorAll('.lista-imdb--linkImdb');
  const anoFest = document.querySelector('.lista-festivais__ano').value;
  opFest();
  
  document.querySelector('#disabled').style.display = none;
  
  const textArea = document.querySelector('.resultado-area');
  textArea.innerHTML = ``;
  textArea.innerHTML = `[center][img=${imgFest}][/center]\n\n
  [center][size=6][b][color=#000080]SELEÇÃO OFICIAL DE ${nomeFest.toUpperCase()} ${anoFest}[/color][/b][/size][/center]\n\n\n`
  textArea.innerHTML += `No ano de ${anoFest}, ${titulo.length} filmes concorreram ao ${nomeFest}. São eles:\n\n\n`
  for (let i = 0; i < titulo.length; i++) {
    textArea.innerHTML += `[url=https://www.imdb.com/title/${id[i].value}/][img=https://imagizer.imageshack.us/a/img923/8099/6faAjm.jpg][/url] ${titulo[i].value}, de ${diretor[i].value}\n`;
  }
  textArea.innerHTML += `\n\n\nPara conferir os vencedores dos anos anteriores, visite a página do [b][url=${linkFest}][color=#008080]Festival de ${nomeFest}[/color][/url][/b] no Makingoff.`
    ;
})

// === copia textarea 
document.querySelector('.gera-resultado__copia').addEventListener('click', function () {
  const textArea = document.querySelector('.resultado-area');
  textArea.select();
  document.execCommand('copy');
  alert('copiado')

})

// ==== gera numero aleatório para a id
function getRandom(max = 1, min = 10000) {
  return Math.floor(Math.random() * (max - min) + min)
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
  inputIMDbButton.innerHTML = 'buscar título no imdb';
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
