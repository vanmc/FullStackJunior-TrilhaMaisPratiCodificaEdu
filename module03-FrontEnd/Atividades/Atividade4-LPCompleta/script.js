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
  })

