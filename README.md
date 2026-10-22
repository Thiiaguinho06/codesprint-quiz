# ⚡ CodeSprint — Quiz Interativo de Desenvolvimento Web

Um quiz responsivo feito com **HTML, CSS e JavaScript puro**, com desafios de HTML, CSS e JavaScript, dois níveis de dificuldade, cronômetro opcional, explicações educativas e histórico de desempenho.

![Prévia do CodeSprint no computador](assets/preview-desktop.png)

## ✨ Funcionalidades

- **3 tecnologias:** HTML, CSS e JavaScript — com modo misto equilibrado.
- **2 dificuldades:** iniciante e intermediário.
- **2 modos:** livre e com **25 segundos por pergunta**.
- **6 perguntas por rodada**, selecionadas aleatoriamente, com explicação após cada resposta.
- **Pontuação e revisão** das respostas ao terminar.
- **Histórico local:** desafios concluídos, taxa de acertos e recorde salvos em `localStorage`.
- **Acessibilidade:** botões semânticos, indicadores de foco, feedback para leitores de tela, teclado (1–4) e suporte a movimento reduzido.
- **Layout responsivo**, inclusive em dispositivos móveis.

## 🧰 Tecnologias

- HTML5 semântico
- CSS3: Grid, Flexbox, gradientes, media queries
- JavaScript (ES6+): arrays, objetos, eventos, DOM, lógica de estado, `setInterval` e `localStorage`

Não exige npm, bundler, banco de dados, chave de API ou cadastro.

## ▶ Como rodar

1. Baixe ou clone o repositório.
2. Abra `index.html` no navegador.
3. Escolha tecnologia, dificuldade e modo.
4. Clique em **Iniciar desafio**.

> As fontes do Google são opcionais: sem internet, o projeto funciona com as fontes padrão do sistema.

## 🌐 Publicar no GitHub Pages

1. Crie um repositório público chamado `codesprint-quiz`.
2. Envie `index.html`, `styles.css`, `app.js`, `favicon.svg` e este `README.md` **na raiz** do repositório.
3. Vá em **Settings → Pages → Build and deployment**.
4. Selecione **Deploy from a branch → main → /(root)** e salve.
5. Depois de publicada, a aplicação fica normalmente em `https://SEU-USUARIO.github.io/codesprint-quiz/`.

## 🧪 Como testar

- Teste cada tópico, dificuldade e modo; responda com mouse e teclas 1–4.
- Use o cronômetro e deixe o tempo acabar.
- Finalize uma rodada, abra a revisão e inicie outra.
- Atualize a página para verificar os indicadores persistidos.
- Teste em uma tela estreita e com o teclado, sem mouse.

## 🗂 Estrutura

```text
codesprint-quiz/
├── index.html     # Estrutura e seções da aplicação
├── styles.css     # Design responsivo
├── app.js         # Questões, lógica e dados locais
├── favicon.svg    # Ícone do site
├── assets/        # Imagens de demonstração
└── README.md      # Documentação
```

## 💡 Sugestões de melhorias para praticar

- Adicionar uma categoria de **Git e GitHub**.
- Criar um filtro com assuntos específicos de JavaScript.
- Implementar um modo de treino apenas com as perguntas erradas.
- Adicionar testes automatizados para a lógica de pontuação.
- Criar um recurso opcional de limpar o histórico salvo.

## 📌 Sobre o projeto

Projeto educacional para praticar conceitos de front-end e interatividade com JavaScript. Antes de apresentá-lo em um processo seletivo, personalize o código, teste as funcionalidades e esteja preparado para explicar a implementação.
