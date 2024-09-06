// Espera o DOM (Document Object Model) ser totalmente carregado antes de executar o código
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os containers para login, registro e recuperação usando seus IDs
    let loginContainer = document.getElementById('login-container');
    let registerContainer = document.getElementById('register-container');
    let recoverContainer = document.getElementById('recover-container');

    // Adiciona um ouvinte de evento ao link para mostrar o formulário de registro
    document.getElementById('show-register').addEventListener('click', (x) => {
        x.preventDefault(); // Impede o comportamento padrão do link (navegação)
        loginContainer.style.display = 'none'; // Oculta o container de login
        registerContainer.style.display = 'block'; // Mostra o container de registro
    });

    // Adiciona um ouvinte de evento ao link para mostrar o formulário de login a partir do registro
    document.getElementById('show-login').addEventListener('click', (e) => {
        e.preventDefault(); // Mantém o usuário na mesma página.
        loginContainer.style.display = 'block'; // Mostra o container de login
        registerContainer.style.display = 'none'; // Oculta o container de registro
    });

    // Adiciona um ouvinte de evento ao link para mostrar o formulário de recuperação de senha
    document.getElementById('show-recover').addEventListener('click', (e) => {
        e.preventDefault(); // Impede o comportamento padrão do link (navegação)
        loginContainer.style.display = 'none'; // Oculta o container de login
        recoverContainer.style.display = 'block'; // Mostra o container de recuperação de senha
    });

    // Adiciona um ouvinte de evento ao link para mostrar o formulário de login a partir da recuperação de senha
    document.getElementById('show-login-from-recover').addEventListener('click', (e) => {
        e.preventDefault(); // Impede o comportamento padrão do link (navegação)
        loginContainer.style.display = 'block'; // Mostra o container de login
        recoverContainer.style.display = 'none'; // Oculta o container de recuperação de senha
    });

    // Função para salvar um novo usuário no armazenamento local
    function saveUser(username, email, password) {
        // Recupera a lista de usuários do armazenamento local ou cria uma lista vazia se não existir
        const users = JSON.parse(localStorage.getItem('users')) || [];
        // Adiciona o novo usuário à lista
        users.push({ username, email, password });
        // Salva a lista atualizada no armazenamento local
        localStorage.setItem('users', JSON.stringify(users));
    }

    // Função para verificar se o login é válido
    function verifyLogin(username, password) {
        // Recupera a lista de usuários do armazenamento local ou cria uma lista vazia se não existir
        const users = JSON.parse(localStorage.getItem('users')) || [];
        // Verifica se há um usuário com o nome e a senha fornecidos
        return users.some(user => user.username === username && user.password === password);
    }

    // Função para recuperar a senha baseada no email
    function recoverPassword(email) {
        // Recupera a lista de usuários do armazenamento local ou cria uma lista vazia se não existir
        const users = JSON.parse(localStorage.getItem('users')) || [];
        // Encontra o usuário com o email fornecido
        const user = users.find(user => user.email === email);
        // Retorna a senha se o usuário for encontrado; caso contrário, retorna null
        return user ? user.password : null;
    }

    // Adiciona um ouvinte de evento para o formulário de registro
    document.getElementById('register-form').addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o envio padrão do formulário
        // Obtém os valores dos campos do formulário de registro
        const username = document.getElementById('register-username').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        // Chama a função para salvar o novo usuário
        saveUser(username, email, password);
        // Exibe uma mensagem de sucesso e retorna à tela de login
        alert('Cadastro realizado com sucesso!');
        loginContainer.style.display = 'block';
        registerContainer.style.display = 'none';
    });

    // Adiciona um ouvinte de evento para o formulário de login
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o envio padrão do formulário
        // Obtém os valores dos campos do formulário de login
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        // Verifica se o login é válido
        if (verifyLogin(username, password)) {
            // Exibe uma mensagem de sucesso se o login for válido
            alert('Login bem-sucedido!');
        } else {
            // Exibe uma mensagem de erro se o login for inválido
            alert('Nome de usuário ou senha incorretos!');
        }
    });

    // Adiciona um ouvinte de evento para o formulário de recuperação de senha
    document.getElementById('recover-form').addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o envio padrão do formulário
        // Obtém o valor do campo de email do formulário de recuperação
        const email = document.getElementById('recover-email').value;
        // Chama a função para recuperar a senha
        const password = recoverPassword(email);
        // Exibe a senha recuperada se o email for encontrado; caso contrário, exibe uma mensagem de erro
        if (password) {
            alert(`Sua senha é: ${password}`);
        } else {
            alert('Email não encontrado!');
        }
    });
});
