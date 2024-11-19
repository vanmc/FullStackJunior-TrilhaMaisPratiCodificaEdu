let btnOne = document.getElementById('btnOne')
let btnTwo = document.getElementById('btnTwo')
let btnThree = document.getElementById('btnThree')

let contentOne = document.getElementById('contentOne')
let contentTwo = document.getElementById('contentTwo')
let contentThree = document.getElementById('contentThree')

btnOne.addEventListener('click', () => {
    contentOne.classList.remove('hidden')
    contentTwo.classList.add('hidden')
    contentThree.classList.add('hidden')

    btnOne.classList.add('active')
    btnTwo.classList.remove('active')
    btnThree.classList.remove('active')
})

btnTwo.addEventListener('click', () => {
    contentOne.classList.add('hidden')
    contentTwo.classList.remove('hidden')
    contentThree.classList.add('hidden')

    btnOne.classList.remove('active')
    btnTwo.classList.add('active')
    btnThree.classList.remove('active')
})

btnThree.addEventListener('click', () => {
    contentOne.classList.add('hidden')
    contentTwo.classList.add('hidden')
    contentThree.classList.remove('hidden')

    btnOne.classList.remove('active')
    btnTwo.classList.remove('active')
    btnThree.classList.add('active')
})
