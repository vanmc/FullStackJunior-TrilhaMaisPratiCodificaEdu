let slides = document.querySelectorAll('section img')

let currentIndex = 0 //inicializa o índice da imagem atual como 0;

function showSlide (index) {
  slides.forEach((slide,i) => {
    slide.classList.toggle('active', i === index) //se o indice atual for igual o indice fornecido, a classe active é adicionada, se false, é removida.
  })
}

function moveSlide() {
  currentIndex = (currentIndex + 1) % slides.length //garante um loop infinito que incrementa o índice atual e reinicia se chegar ao final da lista de imagens;
  showSlide(currentIndex)
}

//chama a função moveSlide a cada 5s;
setInterval(moveSlide, 5000)

//inicializa o carrossel
showSlide(currentIndex)