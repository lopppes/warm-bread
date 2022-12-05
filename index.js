window.sr = ScrollReveal({reset: true});

sr.reveal('.indo-menu',{duration: 1000});

sr.reveal('.content',{duration: 1000});

sr.reveal('.pontos',{duration: 1000});

sr.reveal('.padaria-mesa',{duration: 1000});

sr.reveal('.criacao', {duration: 1000});

sr.reveal('.rosquinha', {duration: 1000});

sr.reveal('.bacon'),{duration: 1000};

sr.reveal('.hero'),{duration: 1000};

sr.reveal('.cardapio', {duration: 1000});

sr.reveal('.cardapio-kids', {duration: 1000});

var button = document.getElementById('check');

var backgroundColor = 'white';

var header = document.getElementsByTagName('header')[0];

button.addEventListener('click', function() {

  if (backgroundColor === 'white') {
    document.body.style.backgroundColor = '#1e120e';
    document.body.style.color = 'white';
    header.style.backgroundColor = '#1e120e';
    backgroundColor = 'black';

  } else {
    document.body.style.backgroundColor = '#f6f2e9';
    document.body.style.color = 'black';
    header.style.backgroundColor = '#f6f2e9';
    backgroundColor = 'white';

  }
});

