// Cria a interação do botão da página inicial
function movePageDown() {
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
    });

}

const predefinedTestimonials = [
    "Sou fã de videogames antigos e a RetroRentals superou minhas expectativas. Os jogos chegam sempre pontualmente e a coleção é maravilhosa!",
    "A sensação de jogar em um console original é incrível! A RetroRentals me ajudou a encontrar aqueles jogos raros que eu sonhava em jogar novamente.",
    "O serviço é excepcional! Recebi jogos em perfeito estado e com uma variedade incrível. É uma ótima maneira de reviver a nostalgia dos anos 90.",
    "A RetroRentals me fez reviver as melhores memórias da minha infância. Alugar jogos clássicos é fácil e a entrega é super rápida!",
    "A experiência de alugar jogos aqui é única! É ótimo poder jogar títulos que eu nunca tive a chance de experimentar. Altamente recomendado!",
    "Estou adorando a flexibilidade das assinaturas! Posso escolher os jogos que quero e sempre descubro novos clássicos. Recomendo para todos os amantes de jogos!"
];

// Função para buscar os depoimentos usando a api Random User Generator
const fetchTestimonials = async (testimonyContainer) => {
    try {
        const response = await fetch('https://randomuser.me/api/?results=6');
        if (!response.ok) {
            throw new Error('Erro ao carregar os depoimentos');
        }
        const data = await response.json();
        const users = data.results;

        const testimonials = users.map((user, index) => ({
            name: `${user.name.first} ${user.name.last}`,
            picture: user.picture.large,
            text: predefinedTestimonials[index]
        }));

        testimonials.forEach(testimonial => {
            const testimonyDiv = document.createElement('div');
            testimonyDiv.className = 'testimony';
            testimonyDiv.setAttribute('data-aos', 'fade-up'); //acrescenta os atributos da biblioteca AOS.js
            testimonyDiv.setAttribute('data-aos-duration', '1000');

            testimonyDiv.innerHTML = `
              <img src="${testimonial.picture}" alt="Imagem de ${testimonial.name}">
              <div class="testimonyData">
                  <h1 class="nameTestimony">${testimonial.name}</h1>
                  <div class="rating">
                      ${'<i class="fa fa-star"></i>'.repeat(5)}
                  </div>
                  <p class="textTestimony">"${testimonial.text}"</p>
              </div>
          `;

            testimonyContainer.appendChild(testimonyDiv);
        });
    } catch (error) {
        console.error(error);
        testimonyContainer.innerHTML = '<p>Erro ao carregar os depoimentos.</p>';
    }
}

// Garante que a página seja carregada antes de carregar os demais elementos interativos
document.addEventListener("DOMContentLoaded", function () {
    const testimonyContainer = document.getElementById('testimony-container')

    // Inicializa o Typed.js
    var typed = new Typed('#element', {
        strings: ["Quer jogar aquele companheiro de antigamente?", "RetroRentals.com"],
        typeSpeed: 80,
        loop: true,
        loopCount: Infinity,
    });

    // Inicializa o Swiper.js
    const swiper = new Swiper('.swiper', {
        autoplay: {
            delay: 3000,
        },
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        allowTouchMove: true,
    })

    // Inicializa a API AOS para animação dos testemunhos
    AOS.init();

    // Inicializa a função da API de testemunhos
    fetchTestimonials(testimonyContainer);

    // Inicializa a API EmailJS
    function sendMail() {
        var params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            option: document.getElementById("option").value,
            message: document.getElementById("message").value,
        }

        const serviceID = "service_1q0tedn"
        const templateID = "service_1q0tedn"

        emailjs.send(serviceID, templateID, params)
            .then(res => {
                document.getElementById("name").value = ""
                document.getElementById("email").value = ""
                document.getElementById("option").value = ""
                document.getElementById("message").value = ""
                console.log(res)
                alert("Mensagem enviada com sucesso!")

            })
            .catch(err => console.log(err))
    }
}