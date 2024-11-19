import { useState } from "react"
import './RegistrationForm.css'

function RegistrationForm() {
    // Declarando os estados para os campos do formulário e controle de envio
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const [error, setError] = useState('')

    // Função para validar o formulário
    const submitUser = (event) => {
        event.preventDefault() // Previne o envio padrão do formulário

        // Função para validar o nome do usuário
        function validateUser(name) {
            const regex = /^[a-zA-Z\-_\.]+$/ // Permite letras e caracteres especiais
            return regex.test(name)
        }

        // Função para validar o email
        function validateEmail(email) {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/ // Valida o formato de e-mail
            return regex.test(email)
        }

        // Função para validar a senha
        function validatePassword(password) {
            const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/ // Valida a senha com mínimo de 6 caracteres e critérios específicos
            return regex.test(password)
        }

        // Verificação de campos vazios
        if (!name || !email || !password) {
            setError('Por favor, preencha todos os campos antes de fazer login!')
            return
        }

        // Validação do nome de usuário
        if (!validateUser(name)) {
            setError("O campo Usuário deve conter somente letras e determinados caracteres especiais. Verifique se seu nome está correto.")
            return
        }

        // Validação do e-mail
        if (!validateEmail(email)) {
            setError("O campo Email deve conter um e-mail válido. Por favor, verifique os dados!")
            return
        }

        // Validação da senha
        if (!validatePassword(password)) {
            setError("A senha deve conter pelo menos 6 caracteres, incluindo uma letra maiúscula, um número e um caractere especial.")
            return
        }

        // Se tudo estiver correto, limpa o erro e define o formulário como enviado
        setError('')
        setIsFormSubmitted(true)
    }

    // Componente para exibir a mensagem de boas-vindas
    function WelcomeMessage({ name }) {
        return (
            <div className="welcome-message">
                <h2>Bem-vindo (a), {name}!</h2>
            </div>
        )
    }

    return (
        <div id="RegistrationForm">
            <h1>Login</h1>
            {!isFormSubmitted ? (
                // Exibe o formulário se não foi submetido
                <form className="formUser" onSubmit={submitUser}>
                    <div className="loginFields">
                        <label>@</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Fulano.daSilva"
                        />
                    </div>
                    <div className="loginFields">
                        <label>e-mail</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="fulanodasilva@email.com"
                        />
                    </div>
                    <div className="loginFields">
                        <label>senha</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Eiei, é segredo!"
                        />
                    </div>
                    {error && <p className="error">{error}</p>} {/* Exibe o erro se houver */}
                    <button className="btnLogin" type="submit">Cadastrar</button>
                </form>
            ) : (
                // Exibe a mensagem de boas-vindas após o envio do formulário
                <WelcomeMessage name={name} />
            )}
        </div>
    )
}

export default RegistrationForm
