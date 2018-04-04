addEventListener('load', function (){


  var frukt1Knapp = document.getElementById('frukt1');
  var frukt2Knapp = document.getElementById('frukt2');
  var notterKnapp = document.getElementById('notter_etc');
  var proteinerKnapp = document.getElementById('proteiner');
  var vatskaKnapp = document.getElementById('vatska');
  var fetterKnapp = document.getElementById('fetter_oljor');
  var kryddorKnapp = document.getElementById('kryddor');
  var sotningsKnapp = document.getElementById('sotningsmedel');


  // var gronsaker = ['avokado', 'böngroddar', 'broccoli', 'celleri', 'gröna ärtor', 'grönkål', 'gurka', 'haricot verte', 'morot', 'mungbönsgroddar', 'rödbetor', 'rotselleri', 'ruccolasallad', 'savoykål', 'spenat'];

  var frukt1 = ['ananas', 'äpple', 'blåbär', 'citron', 'fikon', 'katrinplommon'];
  var frukt2 = ['papaya', 'päron', 'persikor (torkade)', 'pomelo', 'tranbär'];
  var notter_etc = ['cashewnötter', 'kokos (riven)', 'mandlar', 'paranötter', 'persikokärnor', 'sesamfrön (oskalade)', 'solroskärnor', 'valnötter'];
  var proteiner = ['fetaost', 'kikärtor', 'kokta konserverade bönor', 'proteinpulver'];
  var vatska = ['kokosmjölk', 'kornmjölk', 'mandelmjölk', 'rent vatten', 'rismjölk', 'sesammjölk'];
  var fetter_oljor = ['kokosfett', 'lecitin', 'linfröolja', 'olivolja', 'palmolja (kallpressad)', 'rapsolja'];
  var kryddor = ['basilika', 'cayennpeppar', 'citronmeliss', 'gurkmeja', 'havssalt', 'himalayasalt', 'ingefära', 'kanel', 'salvia', 'soyasås', 'svartpepper', 'timjan', 'vitpeppar'];
  var sotningsmedel = ['honung', 'kokossocker', 'lönnsirap', 'muskovado socker', 'svart melass'];

  function randomSort(a,b) {
      return( parseInt( Math.random()*10 ) );
  }

  function onClick1(){
    slumpaFrukt1(document.getElementById('frukt1'));
    var element = document.createElement('li');
    var text = document.createTextNode(slumpaFrukt1(document.getElementById('frukt1')));
    element.appendChild(text);
    document.getElementById('fruktrecept').appendChild(element);
  }

  function onClick2(){
    slumpaFrukt2(document.getElementById('frukt2'));
    var element = document.createElement('li');
    var text = document.createTextNode(slumpaFrukt2(document.getElementById('frukt2')));
    element.appendChild(text);
    document.getElementById('fruktrecept').appendChild(element);
  }

  function onClick3(){
    slumpaNotter(document.getElementById('notter_etc'));
    var element = document.createElement('li');
    var text = document.createTextNode(slumpaNotter(document.getElementById('notter_etc')));
    element.appendChild(text);
    document.getElementById('fruktrecept').appendChild(element);
  }

  function onClick4(){
    slumpaProteiner(document.getElementById('proteiner'));
    var element = document.createElement('li');
    var text = document.createTextNode(slumpaProteiner(document.getElementById('proteiner')));
    element.appendChild(text);
    document.getElementById('fruktrecept').appendChild(element);
  }

  function onClick5(){
    slumpaVatska(document.getElementById('vatska'));
    var element = document.createElement('li');
    var text = document.createTextNode(slumpaVatska(document.getElementById('vatska')));
    element.appendChild(text);
    document.getElementById('fruktrecept').appendChild(element);
  }

  function onClick6(){
    slumpaFetter(document.getElementById('fetter_oljor'));
    var element = document.createElement('li');
    var text = document.createTextNode(slumpaFetter(document.getElementById('fetter_oljor')));
    element.appendChild(text);
    document.getElementById('fruktrecept').appendChild(element);
  }

  function onClick7(){
    slumpaKryddor(document.getElementById('kryddor'));
    var element = document.createElement('li');
    var text = document.createTextNode(slumpaKryddor(document.getElementById('kryddor')));
    element.appendChild(text);
    document.getElementById('fruktrecept').appendChild(element);
  }

  function onClick8(){
    slumpaSotningsmedel(document.getElementById('sotningsmedel'));
    var element = document.createElement('li');
    var text = document.createTextNode(slumpaSotningsmedel(document.getElementById('sotningsmedel')));
    element.appendChild(text);
    document.getElementById('fruktrecept').appendChild(element);
  }

  function slumpaFrukt1(){
    var randomFrukt1 = frukt1.sort(randomSort);
    return randomFrukt1[0];
    }
  function slumpaFrukt2(){
    var randomFrukt2 = frukt2.sort(randomSort);
    return randomFrukt2[0];
    }

  function slumpaNotter(){
    var randomNotter_etc = notter_etc.sort(randomSort);
    return randomNotter_etc[0];
    }

  function slumpaProteiner(){
    var randomProteiner = proteiner.sort(randomSort);
    return randomProteiner[0];
    }

  function slumpaVatska(){
    var randomVatska = vatska.sort(randomSort);
    return randomVatska[0];
    }

  function slumpaFetter(){
    var randomFetter_oljor = fetter_oljor.sort(randomSort);
    return randomFetter_oljor[0];
    }

  function slumpaKryddor(){
    var randomKryddor = kryddor.sort(randomSort);
    return randomKryddor[0];
    }

  function slumpaSotningsmedel(){
    var randomSotningsmedel = sotningsmedel.sort(randomSort);
    return randomSotningsmedel[0];
    }

  frukt1Knapp.addEventListener('click', onClick1);
  frukt2Knapp.addEventListener('click', onClick2);
  notterKnapp.addEventListener('click', onClick3);
  proteinerKnapp.addEventListener('click', onClick4);
  vatskaKnapp.addEventListener('click', onClick5);
  fetterKnapp.addEventListener('click', onClick6);
  kryddorKnapp.addEventListener('click', onClick7);
  sotningsKnapp.addEventListener('click', onClick8);

  // function myResetFunction() {
  //   location.reload();
  // }

});
