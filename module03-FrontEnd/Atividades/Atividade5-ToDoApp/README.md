# Atividade 5 - To Do App

**Sobre a atividade:**Desenvolva uma aplicação simples de lista de tarefas (todoApp) utilizando HTML, CSS (Bootstrap/Tailwind) e JavaScript, com armazenamento de dados no localStorage. O projeto deve permitir a criação, leitura, edição e exclusão de tarefas, além de persistir as informações no localStorage, para que elas não sejam perdidas ao recarregar a página.

## Como acessar o projeto localmente:

🍀 **Acesse a [página!](https://todoapp-phi-pink.vercel.app/).**

Ou, se preferir: 

1. **Clone o repositório** ou baixe os arquivos do projeto:
    ```bash
    git clone <URL-do-repositório>
    ```

2. **Instale o Tailwind CSS no terminal** via npm:
    ```bash
    npm install -D tailwindcss
    ```

3. **Inicialize o Tailwind CSS**:
    ```bash
    npx tailwindcss init
    ```

5. Certifique-se de que os arquivos input.css, output.css e tailwind.config.js estão na pasta onde o repositório foi clonado.

4. **Compile o Tailwind CSS**:
    ```bash
    npx tailwindcss -i ./input.css -o ./output.css --watch
    ```

5. Abra o arquivo `index.html` em seu navegador para visualizar o aplicativo.

## Funcionalidades

- **Adicionar Tarefas:** O usuário pode adicionar uma nova tarefa através de um campo de entrada e botão, com validação para evitar tarefas vazias.
- **Marcar como Concluído:** É possível alternar o status de uma tarefa entre concluída e não concluída.
- **Editar Tarefas:** O usuário pode editar o texto da tarefa.
- **Excluir Tarefas:** A exclusão é confirmada por um alerta interativo, prevenindo exclusões acidentais.
- **Armazenamento Local:** As tarefas são armazenadas no `localStorage`, mantendo-as mesmo após o recarregamento da página.
- **Alerta Interativo:** Implementado com SweetAlert2 para feedback visual ao usuário em interações como exclusão e tentativa de adicionar tarefa sem texto.

## Bibliotecas Externas

- **[SweetAlert2:](https://sweetalert2.github.io/)** Utilizada para exibir alertas personalizados ao usuário, substituindo `alert()` com um visual mais amigável e responsivo.
  
- **[Ionicons:](https://ionicons.com/)** Usada para ícones de redes sociais no footer.

## Frameworks e Tecnologias Usadas

- **[TailwindCSS:](https://tailwindcss.com/)** Utilizado para estilização com classes utilitárias, facilitando a criação de um layout responsivo.

## Estrutura de Arquivos

- **index.html**: Contém a estrutura HTML do projeto e o footer com links para redes sociais.
- **app.js**: JavaScript que controla as funcionalidades principais, como adicionar, editar, excluir e gerenciar o status das tarefas.
- **input.css**: Estilizações com TailwindCSS e estilos personalizados para o layout e elementos específicos.

__Obrigada por visitar!__