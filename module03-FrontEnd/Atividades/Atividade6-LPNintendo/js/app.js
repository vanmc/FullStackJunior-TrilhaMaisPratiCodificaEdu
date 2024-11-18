const btnLogin = document.getElementById('btnLogin')
const btnEnter = document.getElementById('btnEnter')
const inputLogin = document.getElementById('inputLogin')

btnLogin.addEventListener('click', () => {
    btnLogin.classList.add('notShown')
    btnEnter.classList.remove('notShown')
    inputLogin.classList.remove('notShown')
})

btnEnter.addEventListener('click', () => {
    btnLogin.classList.remove('notShown')
    btnEnter.classList.add('notShown')
    inputLogin.classList.add('notShown')
    Swal.fire({
        position: "center-center",
        icon: "success",
        title: "Login (hipotético) feito com sucesso!",
        showConfirmButton: false,
        timer: 1500
    });
})

document.addEventListener('DOMContentLoaded', () => {
    let swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination'
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    })

    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowLeft') {
            swiper.slidePrev()
        } else if (event.key === 'ArrowRight') {
            swiper.slideNext()
        }
    })

    const gameInput = document.getElementById('gameInput')

    gameInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            let searchGame = gameInput.value.trim().toUpperCase()

            switch (searchGame) {
                case 'MARIO':
                    swiper.slideTo(0)
                    break
                case 'POKEMON':
                    swiper.slideTo(1)
                    break
                case 'ZELDA':
                    swiper.slideTo(2)
                    break
                default:
                    alert('Jogo não encontrado!')
                    break
            }
        }
    })
})

const openModals = document.querySelectorAll('.open-modal')
const closeModalButton = document.querySelectorAll('#close-modal')
const modals = document.querySelectorAll('#modal')
const fades = document.querySelectorAll('#fade')

openModals.forEach((openModalButton, index) => {
    openModalButton.addEventListener('click', () => {
        modals[index].classList.toggle('hide')
        fades[index].classList.toggle('hide')
    })
})
closeModalButton.forEach((closeModalButton, index) => {
    closeModalButton.addEventListener('click', () => {
        modals[index].classList.add('hide')
        fades[index].classList.add('hide')
    })
})

fades.forEach((fade, index) => {
    fade.addEventListener('click', () => {
        modals[index].classList.add('hide')
        fade.classList.add('hide')
    })
})

const btnTrailer1 = document.getElementById('btnTrailer1')
const btnTrailer2 = document.getElementById('btnTrailer2')
const btnTrailer3 = document.getElementById('btnTrailer3')

btnTrailer1.addEventListener('click', () => {
    Swal.fire({
        html: `<iframe width="560" height="315" src="https://www.youtube.com/embed/5kcdRBHM7kM" title="Super Mario Odyssey Trailer" allowfullscreen></iframe>`,
        width: 700,
        showCloseButton: true,
        showConfirmButton: false,
        background: 'transparent',
    })
})

btnTrailer2.addEventListener('click', () => {
    Swal.fire({
        html: `<iframe width="560" height="315" src="https://www.youtube.com/embed/I4RynqpahT8?si=TTv_yXK6beQhz4fO" title="Pokemon Legends Arceus Trailer" allowfullscreen></iframe>`,
        width: 700,
        showCloseButton: true,
        showConfirmButton: false,
        background: 'transparent',
    })
})

btnTrailer3.addEventListener('click', () => {
    Swal.fire({
        html: `<iframe width="560" height="315" src="https://www.youtube.com/embed/1rPxiXXxftE?si=ZeFRCxty0mz87oK3" title="The Legend of Zelda: Breath of the Wild Trailer" allowfullscreen></iframe>`,
        width: 700,
        showCloseButton: true,
        showConfirmButton: false,
        background: 'transparent',
    })
})
