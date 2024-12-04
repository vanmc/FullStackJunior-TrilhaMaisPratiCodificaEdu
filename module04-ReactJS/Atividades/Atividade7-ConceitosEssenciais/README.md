# Atividade 7 - Praticando conceitos essenciais do ReactJS

**Sobre a atividade:** Desenvolvimento de uma aplicação modular utilizando React e Vite para implementar funcionalidades interativas com React Hooks. O projeto visa demonstrar o uso de useState, useEffect e outras ferramentas para criar componentes dinâmicos e interativos.

## Como acessar o projeto localmente:

1. Clone o repositório:
    ```bash
    git clone https://github.com/vanmc/FullStackJunior-TrilhaMaisPratiCodificaEdu/tree/8472a88fa7d727006a178159efb1a50019403e83/module04-ReactJS/Atividades/Atividade7-ConceitosEssenciais
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd pasta-onde-o-repositório-foi-salvo
    ```

3. Instale as dependências necessárias (certifique-se de ter o Node.js instalado em sua máquina):
    ```bash
    npm install
    npm install react-router-dom
    ```

4. Inicie o  servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
5. Acesse o projeto no navegador usando o localhost gerado.

## Bibliotecas externas/APIs utilizadas:

- **[React Router DOM:](https://reactrouter.com/)** Usada para navegação entre os componentes de cada funcionalidade.
- **[Random User Generator:](https://randomuser.me/)** Consumida para gerar nomes aleatórios na funcionalidade "Filtro de Lista".
- **[JSONPlaceholder:](https://jsonplaceholder.typicode.com/)** Utilizada para obter dados simulados, como posts e comentários, na funcionalidade "Aplicação de Requisição de Dados Simples".

## Funcionalidades implementadas:
1. Contador Simples:
- Exibe um contador com os botões "Incrementar" e "Decrementar".
- O valor do contador nunca será menor que zero.
- Utiliza o hook **useState** para gerenciar o estado do contador.

2. Alteração de Cor de Fundo:
- Permite alterar a cor do fundo da página ao clicar em um botão.
- As cores são geradas de forma aleatória.
- Utiliza os hooks **useState** e **useEffect**.

3. Lista de Tarefas:
- Permite adicionar, remover e marcar tarefas como concluídas.
- Oferece filtros para exibir todas as tarefas ou apenas as pendentes.
- Gerencia a lista de tarefas com o hook **useState**.

4. Temporizador:
- Exibe um temporizador que conta o tempo em segundos.
- Inclui botões para pausar e reiniciar o temporizador.
- Utiliza os hooks **useState** e **useEffect**.

5. Filtro de Lista:
- Renderiza uma lista de nomes com um campo de entrada para filtrar nomes.
- O filtro é insensível a maiúsculas e minúsculas.
- Obtém os nomes de uma API pública (**randomuser.me**) usando **fetch**.

6. Formulário de Registro Simples:
- Formulário com campos de nome, e-mail e senha.
- Exibe uma mensagem de boas-vindas ao submeter o formulário.
- Inclui validações para garantir que todos os campos estejam preenchidos antes do envio.

7. Aplicação de Requisição de Dados Simples:
- Exibe uma lista de posts obtidos da API pública **JSONPlaceholder**.
- Inclui um botão para recarregar os dados e um indicador de carregamento.
- Utiliza **useEffect** para realizar a requisição de dados.

8. Galeria de Imagens:
- Galeria com imagens clicáveis para exibição ampliada em um modal.
- Inclui botões para fechar o modal e navegar entre as imagens.
- Utiliza **useState** para gerenciar a imagem selecionada.

9. Timer com Intervalo e Alerta:
- Timer que permite ao usuário definir o tempo para contagem regressiva.
- Inclui botões para pausar e reiniciar o timer.
- Exibe um alerta ao finalizar a contagem.

10. Tabs navegáveis:
- Interface com abas ("tabs") que exibem diferentes conteúdos ao serem clicadas.
- Destaca visualmente a aba ativa.
- Utiliza **useState** para controlar a aba ativa.

## Estrutura dos arquivos: 
src  
├── components  
│   ├── Counter  
│   │   ├── Counter.jsx  
│   │   └── Counter.css  
│   ├── BGColorChanger  
│   │   ├── BGColorChanger.jsx  
│   │   └── BGColorChanger.css  
│   ├── Timer  
│   │   ├── Timer.jsx  
│   │   └── Timer.css  
│   └── ... outros componentes  
├── pages  
│   ├── CounterPage.jsx  
│   ├── BGColorChangerPage.jsx  
│   ├── TimerPage.jsx  
│   └── ... outras páginas  
└── App.jsx ...



