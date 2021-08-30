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
  const numAleaId = getRandom();

  // ===== titulo
  const proxLinha = document.querySelector('.proxLinha');
  const div = document.createElement('div');
  div.className = 'lista-dados';


  const divT = document.createElement('div');
  div.append(divT); 

  const labelT = document.createElement('label');
  labelT.innerHTML = 'TÍTULO: ';
  divT.append(labelT);
  const inputT = document.createElement('input');
  inputT.className = `lista-dados--titulo -input`;
  inputT.type = 'text';
  inputT.id = `${numAlea}`;
  divT.append(inputT);
  const inputIMDbButton = document.createElement('button');
  inputIMDbButton.className = `lista-imdb__btn`;
  inputIMDbButton.id = `${numAlea}`;
  inputIMDbButton.innerHTML = 'buscar título no imdb';
  inputIMDbButton.onclick = btn_imdb;
  divT.append(inputIMDbButton);


  // ===== diretor
  const divD = document.createElement('div');
  div.append(divD);
  const labelD = document.createElement('label');
  labelD.innerHTML = 'DIRETOR: ';
  divD.append(labelD);
  const inputD = document.createElement('input');
  inputD.className = 'lista-dados--diretor -input';
  inputD.type = 'text';
  divD.append(inputD);


  // ===== IMDb
  const divIMDb = document.createElement('div');
  div.append(divIMDb);
  divIMDb.className = 'lista-imdb';
  const labelIMDb = document.createElement('label');
  labelIMDb.innerHTML = 'ID IMDb:';
  divIMDb.append(labelIMDb);
  const inputIMDb = document.createElement('input');
  inputIMDb.className = 'lista-imdb--linkImdb -input';
  inputIMDb.type = 'text';
  inputIMDb.id = `${numAleaId}`
  divIMDb.append(inputIMDb);
  const inputId = document.createElement('button');
  inputId.className = `lista-imdb__btn`;
  inputId.id = `${numAleaId}`;
  inputId.innerHTML = 'buscar ID no MKO';
  inputId.onclick = btn_mko;
  divIMDb.append(inputId);
  

  proxLinha.append(div);
})

// ==== botão que busca no imdb
function btn_imdb() {

  let numId = event.target.id;

  const nomeFilm = document.getElementById(`${numId}`).value;

  window.open(`http://www.imdb.com/find?q=${nomeFilm}`, '_blank')

}

function btn_mko() {

  let numId = event.target.id;

  const idmko = document.getElementById(`${numId}`).value;

  window.open(`https://indice.makingoff.org/index.php?origem=busca&search_term=${idmko}`, '_blank')

}

// 
//  ==== Premiados
//

document.querySelector('.gera-resultado__btn--premiados').addEventListener('click', () => {
  let preTitulosBrE = document.querySelector('.premiados-titulo--e').value;
  let preTitulosOriE = document.querySelector('.premiados-titulori--e').value;
  let preDiretorE = document.querySelector('.premiados-diretor--e').value;
  let prePaisE = document.querySelector('.premiados-pais--e').value;
  let preImgE = document.querySelector('.premiados-img--e').value;
  let preImdbE = document.querySelector('.premiados-imdb--e').value;

document.querySelector('#premiados-disabled').style.display = `flex`;

let premECLink = `[tr][posterMasc]**********[/posterMasc][infoMasc]**********[/infoMasc][/tr][tr][elenco][table][tdPeq][url=http://indice.makingoff.org/index.php?origem=busca&search_term=${preImdbE}&search_type=TP&search_sort_by=tid&search_sort_order=DESC&submit=Pesquisar][img=${preImgE}][/url][/tdPeq][tdGde][color=#000080][b][size=3][url=http://indice.makingoff.org/index.php?origem=busca&search_term=${preImdbE}&search_type=TP&search_sort_by=tid&search_sort_order=DESC&submit=Pesquisar]${preTitulosBrE}[/url][/size][/b][/color]
[color=#696969](${preTitulosOriE})[/color]
Direção: [b]${preDiretorE}[/b]
País: [b]${prePaisE}[/b]

[url=https://www.imdb.com/title/${preImdbE}][img=http://i240.photobucket.com/albums/ff175/mfccorrea/MakingOff/IMDb36.jpg][/url][/tdGde][/table][/elenco]`

let premESLink = `[tr][posterMasc]**********[/posterMasc][infoMasc]**********[/infoMasc][/tr][tr][elenco][table][tdPeq][img=${preImgE}][/tdPeq][tdGde][color=#000080][b][size=3]${preTitulosBrE}[/size][/b][/color]
[color=#696969](${preTitulosOriE})[/color]
Direção: [b]${preDiretorE}[/b]
País: [b]${prePaisE}[/b]
   
[url=https://www.imdb.com/title/${preImdbE}][img=http://i240.photobucket.com/albums/ff175/mfccorrea/MakingOff/IMDb36.jpg][/url]
  
[color=#ff0000][b]Indisponível[/b][/color][/tdGde][/table][/elenco]`;

  let preTitulosBrD = document.querySelector('.premiados-titulo--d').value;
  let preTitulosOriD = document.querySelector('.premiados-titulori--d').value;
  let preDiretorD = document.querySelector('.premiados-diretor--d').value;
  let prePaisD = document.querySelector('.premiados-pais--d').value;
  let preImgD = document.querySelector('.premiados-img--d').value;
  let preImdbD = document.querySelector('.premiados-imdb--d').value;


  let premDCLink = `[info][table][tdPeq][url=http://indice.makingoff.org/index.php?origem=busca&search_term=${preImdbD}&search_type=TP&search_sort_by=tid&search_sort_order=DESC&submit=Pesquisar][img=${preImgD}][/url][/tdPeq][tdGde][color=#000080][b][size=3][url=http://indice.makingoff.org/index.php?origem=busca&search_term=${preImdbD}&search_type=TP&search_sort_by=tid&search_sort_order=DESC&submit=Pesquisar]${preTitulosBrD}[/url][/size][/b][/color]
[color=#696969](${preTitulosOriD})[/color]
Direção: [b]${preDiretorD}[/b]
País: [b]${prePaisD}[/b]
   
[url=https://www.imdb.com/title/${preImdbD}][img=http://i240.photobucket.com/albums/ff175/mfccorrea/MakingOff/IMDb36.jpg][/url][/tdGde][/table][/info][/tr]`

  let premDSLink = `[info][table][tdPeq][img=${preImgD}][/tdPeq][tdGde][color=#000080][b][size=3]${preTitulosBrD}[/size][/b][/color]
[color=#696969](${preTitulosOriD})[/color]
Direção: [b]${preDiretorD}[/b]
País: [b]${prePaisD}[/b]
   
[url=https://www.imdb.com/title/${preImdbD}][img=http://i240.photobucket.com/albums/ff175/mfccorrea/MakingOff/IMDb36.jpg][/url]
  
[color=#ff0000][b]Indisponível[/b][/color][/tdGde][/table][/info][/tr]`



  const textArea = document.querySelector('.resultado-area--premiados');
  const checkE = document.querySelector('.checked-premiado--e');
  const checkD = document.querySelector('.checked-premiado--d');

  
  textArea.innerHTML = ``;
  if (preTitulosOriE.length === 0 && preTitulosOriD.length === 0){
    textArea.innerHTML = `Adicione infos`
  }else if  (preTitulosOriE.length === 0) {
    if(checkD.checked){
      textArea.innerHTML = premDCLink;
    } else if (!checkD.checked) {
      textArea.innerHTML = premDSLink;
    }
  } else if (preTitulosOriD.length === 0){
    if(checkE.checked){
      textArea.innerHTML = premECLink;
    } else if (!checkE.checked) {
      textArea.innerHTML = premESLink;
    }
  } else if (checkE.checked && checkD.checked){
    textArea.innerHTML = premECLink + premDCLink;
  } else if (!checkE.checked && !checkD.checked) {
    textArea.innerHTML = premESLink + premDSLink;
  } else if (checkE.checked && !checkD.checked) {
    textArea.innerHTML = premECLink + premDSLink;
  } else if (!checkE.checked && checkD.checked) {
    textArea.innerHTML = premESLink + premDCLink;
  } 
});


// === copia textarea 
document.querySelector('.gera-resultado__copia--premiados').addEventListener('click', function () {
  const textArea = document.querySelector('.resultado-area--premiados');
  textArea.select();
  document.execCommand('copy');
  console.log('po')
  alert('copiado')
})
