function movePageDown() {
    window.scrollBy ({
        top: window.innerHeight,
        behavior: 'smooth'
    })

    document.body.style.overflow = 'auto'
}

//Typed.js <https://github.com/mattboldt/typed.js/>.
var typed = new Typed('#element', {
    strings: ["Quer jogar aquele companheiro de antigamente?", "RetroRentals.com"],
    typeSpeed: 80,
    loop: true,
    loopCount: Infinity,
  })

//Slides automáticos
let slides = document.querySelectorAll('.about-imgs img')

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