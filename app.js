'use strict';

/**
 * CodeSprint — Quiz de desenvolvimento web
 * Projeto demonstrativo em JavaScript puro, sem bibliotecas externas.
 * Cada questão possui: tópico, dificuldade, enunciado, alternativas,
 * índice da resposta correta e explicação.
 */
const QUESTIONS = [
  // HTML — INICIANTE
  {topic:'html', level:'beginner', q:'Qual tag HTML representa o título principal de uma página?', a:['<head>','<h1>','<title>','<header>'], correct:1, why:'A tag <h1> marca o título de maior nível no conteúdo. A tag <title> define o título exibido na aba do navegador.'},
  {topic:'html', level:'beginner', q:'Qual atributo é usado para descrever uma imagem para leitores de tela?', a:['src','alt','href','target'], correct:1, why:'O atributo alt fornece um texto alternativo para a imagem, importante para acessibilidade e casos em que ela não carrega.'},
  {topic:'html', level:'beginner', q:'Qual elemento HTML é utilizado para criar um link?', a:['<link>','<nav>','<a>','<url>'], correct:2, why:'A tag <a>, geralmente com o atributo href, cria hyperlinks para páginas, seções ou outros recursos.'},
  {topic:'html', level:'beginner', q:'Qual tag representa um parágrafo de texto?', a:['<p>','<span>','<br>','<text>'], correct:0, why:'A tag <p> representa um parágrafo. <br> apenas insere uma quebra de linha.'},
  {topic:'html', level:'beginner', q:'Qual atributo aponta o endereço de destino de um link?', a:['src','id','href','class'], correct:2, why:'O atributo href informa o destino de um elemento <a>.'},
  {topic:'html', level:'beginner', q:'Qual tag é mais apropriada para uma lista não ordenada?', a:['<ol>','<ul>','<dl>','<li>'], correct:1, why:'<ul> cria uma lista não ordenada; <li> representa cada item dela.'},
  {topic:'html', level:'beginner', q:'Qual elemento é apropriado para um botão clicável?', a:['<button>','<b>','<click>','<label>'], correct:0, why:'<button> é um controle interativo nativo, que oferece suporte a teclado e atributos de acessibilidade.'},
  {topic:'html', level:'beginner', q:'Qual tag normalmente contém o conteúdo visível da página?', a:['<meta>','<head>','<body>','<style>'], correct:2, why:'O <body> agrupa o conteúdo principal renderizado no documento HTML.'},
  // HTML — INTERMEDIÁRIO
  {topic:'html', level:'intermediate', q:'Qual atributo conecta uma <label> a um <input> pelo seu id?', a:['name','for','type','value'], correct:1, why:'O atributo for da label deve corresponder ao id do campo associado.'},
  {topic:'html', level:'intermediate', q:'Qual atributo torna um campo obrigatório em um formulário HTML?', a:['required','validate','mandatory','checked'], correct:0, why:'required ativa a validação nativa para exigir o preenchimento antes do envio.'},
  {topic:'html', level:'intermediate', q:'Qual elemento semântico representa a navegação principal de uma seção?', a:['<aside>','<section>','<nav>','<article>'], correct:2, why:'<nav> identifica uma seção de links de navegação.'},
  {topic:'html', level:'intermediate', q:'O que faz o atributo defer em um script externo clássico?', a:['Bloqueia a renderização até carregar imagens','Executa o script antes de analisar o HTML','Adia a execução até o HTML ser analisado','Desativa o JavaScript'], correct:2, why:'defer baixa o script sem bloquear a análise do HTML e o executa após o documento ter sido analisado.'},
  {topic:'html', level:'intermediate', q:'Qual atributo é recomendado para indicar o idioma do documento?', a:['locale no body','lang no elemento html','charset no body','type no title'], correct:1, why:'<html lang="pt-BR"> informa o idioma principal do conteúdo a leitores de tela e outros agentes.'},
  {topic:'html', level:'intermediate', q:'Qual elemento mostra uma legenda associada a uma <figure>?', a:['<caption>','<legend>','<figcaption>','<summary>'], correct:2, why:'<figcaption> fornece uma legenda ou descrição da <figure>.'},
  {topic:'html', level:'intermediate', q:'Para criar um campo próprio para e-mail, qual tipo de input usar?', a:['type="email"','type="text-email"','type="mailbox"','type="contact"'], correct:0, why:'type="email" oferece validação básica de formato e teclados apropriados em dispositivos móveis.'},
  {topic:'html', level:'intermediate', q:'Para melhorar a acessibilidade de um botão só com ícone, o que usar?', a:['Somente title','aria-label com nome compreensível','Uma imagem de fundo','Um id aleatório'], correct:1, why:'Um aria-label descritivo fornece nome acessível quando o botão não tem texto visível.'},
  // CSS — INICIANTE
  {topic:'css', level:'beginner', q:'Qual propriedade altera a cor do texto em CSS?', a:['font-color','text-color','color','foreground'], correct:2, why:'A propriedade color define a cor do texto e de outras decorações dependentes da cor atual.'},
  {topic:'css', level:'beginner', q:'Qual declaração ativa o Flexbox em um contêiner?', a:['display: flex','position: flex','flex: on','layout: flex'], correct:0, why:'display: flex ativa o modelo de layout Flexbox para os filhos diretos do contêiner.'},
  {topic:'css', level:'beginner', q:'Qual propriedade controla o espaçamento interno de um elemento?', a:['margin','padding','gap','outline'], correct:1, why:'padding é o espaçamento interno; margin é o espaçamento externo.'},
  {topic:'css', level:'beginner', q:'Como selecionar uma classe chamada card em CSS?', a:['#card','card','.card','*card'], correct:2, why:'Seletores de classe começam com um ponto: .card.'},
  {topic:'css', level:'beginner', q:'Qual propriedade arredonda os cantos de um elemento?', a:['border-radius','corner-round','radius','outline-radius'], correct:0, why:'border-radius define o arredondamento dos cantos da borda.'},
  {topic:'css', level:'beginner', q:'Qual propriedade altera o tamanho do texto?', a:['font-weight','font-size','text-height','letter-size'], correct:1, why:'font-size controla o tamanho da fonte. font-weight controla a espessura.'},
  {topic:'css', level:'beginner', q:'Qual propriedade define a cor de fundo?', a:['background-color','color','fill-color','surface'], correct:0, why:'background-color controla a cor de preenchimento do plano de fundo de um elemento.'},
  {topic:'css', level:'beginner', q:'Qual unidade costuma ser relativa ao tamanho da fonte do elemento raiz?', a:['px','vw','rem','vh'], correct:2, why:'1rem corresponde ao tamanho computado da fonte do elemento raiz (normalmente html).'},
  // CSS — INTERMEDIÁRIO
  {topic:'css', level:'intermediate', q:'Qual regra permite adaptar estilos a larguras diferentes de tela?', a:['@viewport','@media','@screen','@responsive'], correct:1, why:'Media queries com @media permitem ajustar o CSS de acordo com características do dispositivo ou da janela.'},
  {topic:'css', level:'intermediate', q:'Em CSS Grid, o que significa repeat(3, 1fr)?', a:['Uma coluna com 3 linhas','Três colunas com frações iguais','Três pixels de largura','Três contêineres independentes'], correct:1, why:'repeat(3, 1fr) cria três trilhas iguais, cada uma ocupando uma fração do espaço disponível.'},
  {topic:'css', level:'intermediate', q:'Qual pseudo-classe ajuda a mostrar foco para navegação por teclado?', a:[':hover',':visited',':focus-visible',':checked'], correct:2, why:':focus-visible aplica estilos quando o navegador entende que o foco precisa de indicador visível, como ao usar teclado.'},
  {topic:'css', level:'intermediate', q:'Com box-sizing: border-box, a largura definida inclui o quê?', a:['Conteúdo, padding e borda','Somente o conteúdo','Conteúdo e margin','Somente a borda'], correct:0, why:'Em border-box, width inclui conteúdo, padding e borda; margin permanece fora dessa medida.'},
  {topic:'css', level:'intermediate', q:'Qual propriedade permite usar espaçamento entre itens em Flexbox e Grid?', a:['space-between','gap','margin-collapse','item-gap'], correct:1, why:'gap define espaçamentos entre trilhas ou itens de contêineres flex e grid.'},
  {topic:'css', level:'intermediate', q:'Quando position: absolute é usado, o elemento é posicionado em relação a quê?', a:['Sempre à janela','Sempre ao body','Ao ancestral posicionado mais próximo, quando houver','Sempre ao irmão anterior'], correct:2, why:'Geralmente, um elemento absoluto usa o bloco de referência criado pelo ancestral posicionado mais próximo.'},
  {topic:'css', level:'intermediate', q:'Qual opção é uma custom property válida em CSS?', a:['$main: blue','--main: blue','@main: blue','#main: blue'], correct:1, why:'Propriedades personalizadas começam com -- e podem ser lidas com var(--main).'},
  {topic:'css', level:'intermediate', q:'O que significa minmax(200px, 1fr) em uma trilha de Grid?', a:['Largura fixa de 200px','Mínimo de 200px e máximo flexível de 1fr','Máximo de 200px','Largura sempre de 1px'], correct:1, why:'minmax estabelece limites mínimo e máximo para uma trilha de grid.'},
  // JAVASCRIPT — INICIANTE
  {topic:'js', level:'beginner', q:'Qual palavra-chave declara uma variável que pode receber outro valor?', a:['const','varname','let','fixed'], correct:2, why:'let declara variáveis cujo valor pode ser reatribuído. const impede a reatribuição da ligação.'},
  {topic:'js', level:'beginner', q:'Qual método mostra mensagens no console do navegador?', a:['console.log()','print.console()','debug.show()','window.writeLog()'], correct:0, why:'console.log() escreve uma mensagem no console, o que ajuda na depuração do código.'},
  {topic:'js', level:'beginner', q:'O que o operador === verifica?', a:['Somente se os valores são semelhantes','Igualdade sem conversão de tipos','Atribuição de valor','Concatenação de texto'], correct:1, why:'=== compara igualdade estrita, sem coerção entre tipos diferentes.'},
  {topic:'js', level:'beginner', q:'Qual método adiciona um item ao final de um array?', a:['pop()','shift()','push()','slice()'], correct:2, why:'push() adiciona um ou mais elementos ao final de um array.'},
  {topic:'js', level:'beginner', q:'Qual evento normalmente indica que um botão foi clicado?', a:['hover','change','focus','click'], correct:3, why:'O evento click é disparado quando um elemento é ativado por clique ou outro método equivalente.'},
  {topic:'js', level:'beginner', q:'Como selecionar um elemento pelo id "app"?', a:['document.getElementById("app")','document.query("app")','window.findElement("app")','getClass("app")'], correct:0, why:'document.getElementById() retorna um elemento do documento pelo seu id.'},
  {topic:'js', level:'beginner', q:'Qual resultado de typeof "olá"?', a:['number','object','string','boolean'], correct:2, why:'Valores de texto entre aspas são strings, e typeof retorna "string".'},
  {topic:'js', level:'beginner', q:'Qual método transforma uma string JSON válida em valor JavaScript?', a:['JSON.stringify()','JSON.parse()','String.parse()','Array.fromJSON()'], correct:1, why:'JSON.parse() converte texto JSON válido para um valor JavaScript.'},
  // JAVASCRIPT — INTERMEDIÁRIO
  {topic:'js', level:'intermediate', q:'O que Array.prototype.map() retorna?', a:['Um novo array com valores transformados','O próprio array sempre modificado','Somente um booleano','A primeira posição encontrada'], correct:0, why:'map() percorre o array e cria outro array contendo o resultado da função aplicada a cada elemento.'},
  {topic:'js', level:'intermediate', q:'Qual método é apropriado para esperar o resultado de uma Promise dentro de uma função async?', a:['pause','sleep','await','yieldPromise'], correct:2, why:'await suspende a execução da função async até a Promise ser resolvida ou rejeitada.'},
  {topic:'js', level:'intermediate', q:'Qual API do navegador armazena pares chave/valor de texto entre sessões?', a:['sessionMemory','localStorage','requestCache','documentStore'], correct:1, why:'localStorage permite persistir strings por origem mesmo após fechar e reabrir o navegador.'},
  {topic:'js', level:'intermediate', q:'O que faz event.preventDefault()?', a:['Remove o event listener','Cancela a ação padrão do evento, quando cancelável','Remove o elemento da página','Impede todos os eventos futuros'], correct:1, why:'preventDefault() solicita o cancelamento da ação padrão associada ao evento, se ele for cancelável.'},
  {topic:'js', level:'intermediate', q:'Qual função converte uma resposta HTTP em objeto JavaScript a partir de JSON?', a:['response.json()','response.toObject()','fetch.parse()','JSON.fetch()'], correct:0, why:'response.json() lê o corpo da resposta e retorna uma Promise com o resultado da análise do JSON.'},
  {topic:'js', level:'intermediate', q:'Qual método cria uma nova lista apenas com os itens que passam no teste?', a:['find()','some()','filter()','reduceToBool()'], correct:2, why:'filter() cria um novo array contendo todos os elementos que satisfazem a condição fornecida.'},
  {topic:'js', level:'intermediate', q:'Qual resultado de [1, 2, 3].reduce((soma, n) => soma + n, 0)?', a:['0','3','6','[1,2,3]'], correct:2, why:'reduce() acumula os valores: 0 + 1 + 2 + 3 = 6.'},
  {topic:'js', level:'intermediate', q:'O que significa adicionar um listener ao pai e tratar cliques dos filhos?', a:['Herança de classes','Delegação de eventos','Encapsulamento de CSS','Memorização de callbacks'], correct:1, why:'Delegação de eventos usa a propagação (bubbling) para processar eventos dos filhos a partir de um ancestral.'}
];

const TOTAL_QUESTIONS = 6;
const SECONDS_PER_QUESTION = 25;
const STORAGE_KEY = 'codesprint-stats-v1';
const LABELS = {mix:'Misto', html:'HTML', css:'CSS', js:'JavaScript', beginner:'Iniciante', intermediate:'Intermediário'};
const $ = (id) => document.getElementById(id);

const settings = {topic:'mix', level:'beginner', mode:'classic'};
let session = null;
let timerId = null;
let remainingSeconds = SECONDS_PER_QUESTION;

function readStats() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    if (saved && ['rounds','correct','answered','best'].every(k => Number.isFinite(saved[k]) && saved[k] >= 0)) {
      return {rounds:saved.rounds, correct:saved.correct, answered:saved.answered, best:saved.best};
    }
  } catch (_) { /* Bloqueio de armazenamento não impede o quiz. */ }
  return {rounds:0, correct:0, answered:0, best:0};
}
let stats = readStats();
function persistStats() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(stats)); } catch (_) { /* Em modo privado o armazenamento pode falhar. */ }
}
function renderStats() {
  $('stat-rounds').textContent = String(stats.rounds);
  $('stat-accuracy').textContent = `${stats.answered ? Math.round(stats.correct / stats.answered * 100) : 0}%`;
  $('stat-best').textContent = String(stats.best);
}

function updateSelections(groupId, dataKey, value) {
  $(groupId).querySelectorAll('button').forEach(button => {
    const active = button.dataset[dataKey] === value;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}
function updateSummary() {
  $('session-topic').textContent = LABELS[settings.topic];
  $('session-time').textContent = settings.mode === 'timed' ? '25s / questão' : 'Livre';
}
function setupOptions() {
  [['topic-options','topic','topic'],['level-options','level','level'],['mode-options','mode','mode']].forEach(([id, dataKey, key]) => {
    $(id).querySelectorAll('button').forEach(button => {
      button.addEventListener('click', () => {
        settings[key] = button.dataset[dataKey];
        updateSelections(id, dataKey, settings[key]);
        updateSummary();
      });
    });
  });
}
function shuffle(array) {
  const output = [...array];
  for (let i = output.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [output[i],output[j]]=[output[j],output[i]];
  }
  return output;
}
function createQuestionSet() {
  const pool = QUESTIONS.filter(q => q.level === settings.level && (settings.topic === 'mix' || q.topic === settings.topic));
  if (settings.topic !== 'mix') return shuffle(pool).slice(0,TOTAL_QUESTIONS);
  // Mistura equilibrada: duas perguntas de cada tecnologia.
  const selected = ['html','css','js'].flatMap(topic => shuffle(pool.filter(q => q.topic === topic)).slice(0,2));
  return shuffle(selected);
}
function showView(view) {
  for (const id of ['setup-view','quiz-view','result-view']) $(id).classList.toggle('hidden', id !== view);
}
function scrollToArena() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  $('arena').scrollIntoView({behavior:reduceMotion ? 'auto' : 'smooth', block:'start'});
}
function clearTimer() {
  if (timerId !== null) clearInterval(timerId);
  timerId = null;
}
function startTimer() {
  clearTimer();
  remainingSeconds = SECONDS_PER_QUESTION;
  updateTimerLabel();
  if (settings.mode !== 'timed') return;
  const endTime = Date.now() + SECONDS_PER_QUESTION * 1000;
  timerId = setInterval(() => {
    remainingSeconds = Math.max(0, Math.ceil((endTime - Date.now()) / 1000));
    updateTimerLabel();
    if (remainingSeconds <= 0) {
      clearTimer();
      submitAnswer(null);
    }
  }, 150);
}
function updateTimerLabel() {
  $('timer-label').textContent = settings.mode === 'timed' ? `◷ ${remainingSeconds}s restantes` : '◷ Sem limite de tempo';
  $('timer-label').style.color = settings.mode === 'timed' && remainingSeconds <= 7 ? '#ff9da3' : '';
}
function startSession() {
  clearTimer();
  session = {questions:createQuestionSet(), index:0, correct:0, score:0, answers:[], answered:false};
  if (session.questions.length !== TOTAL_QUESTIONS) throw new Error('Banco de perguntas insuficiente para a configuração.');
  showView('quiz-view');
  $('quiz-topic-label').textContent = `${LABELS[settings.topic]} · ${LABELS[settings.level]}`;
  displayQuestion();
  scrollToArena();
}
function displayQuestion() {
  if (!session) return;
  session.answered = false;
  const question = session.questions[session.index];
  $('question-count').textContent = `Pergunta ${session.index + 1} de ${TOTAL_QUESTIONS}`;
  $('question-tag').textContent = LABELS[question.topic];
  $('question-title').textContent = question.q;
  $('live-score').textContent = `✦ ${session.score} pontos`;
  $('quiz-progress').setAttribute('aria-valuenow',String(session.index));
  $('quiz-progress-fill').style.width = `${session.index / TOTAL_QUESTIONS * 100}%`;
  $('feedback').className = 'feedback hidden';
  $('feedback').replaceChildren();
  $('next-button').disabled = true;
  $('next-button').firstChild.textContent = session.index === TOTAL_QUESTIONS - 1 ? 'Ver resultado ' : 'Próxima pergunta ';
  const answers = $('answers-container');
  answers.replaceChildren();
  question.a.forEach((option, i) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'answer';
    const key = document.createElement('span');
    key.className = 'answer-key';
    key.textContent = String(i + 1);
    const answerText = document.createElement('span');
    answerText.textContent = option;
    button.append(key,answerText);
    button.addEventListener('click', () => submitAnswer(i));
    answers.append(button);
  });
  startTimer();
}
function submitAnswer(choice) {
  if (!session || session.answered) return;
  clearTimer();
  session.answered = true;
  const question = session.questions[session.index];
  const correct = choice === question.correct;
  if (correct) {
    session.correct++;
    session.score += 100;
  }
  session.answers.push({q:question, choice, correct});
  $('live-score').textContent = `✦ ${session.score} pontos`;
  $('quiz-progress').setAttribute('aria-valuenow',String(session.index + 1));
  $('quiz-progress-fill').style.width = `${(session.index + 1) / TOTAL_QUESTIONS * 100}%`;
  $('answers-container').querySelectorAll('button').forEach((button,i) => {
    button.disabled = true;
    if (i === question.correct) button.classList.add('is-correct');
    else if (i === choice) button.classList.add('is-wrong');
    else button.classList.add('is-dimmed');
  });
  const feedback = $('feedback');
  feedback.className = `feedback ${correct ? 'correct-feedback' : 'wrong-feedback'}`;
  const label = document.createElement('strong');
  label.textContent = correct ? '✓ Boa! Resposta correta (+100 pontos)' : (choice === null ? '⌛ O tempo acabou!' : '✕ Ainda não foi dessa vez!');
  const explanation = document.createElement('span');
  explanation.textContent = `${!correct ? `Resposta correta: ${question.a[question.correct]}. ` : ''}${question.why}`;
  feedback.append(label, explanation);
  $('next-button').disabled = false;
  $('next-button').focus({preventScroll:true});
}
function nextQuestion() {
  if (!session || !session.answered) return;
  if (session.index >= TOTAL_QUESTIONS - 1) return finishSession();
  session.index++;
  displayQuestion();
}
function finishSession() {
  clearTimer();
  if (!session) return;
  stats.rounds++;
  stats.correct += session.correct;
  stats.answered += TOTAL_QUESTIONS;
  const newRecord = session.score > stats.best;
  stats.best = Math.max(stats.best,session.score);
  persistStats();
  renderStats();
  const pct = Math.round(session.correct / TOTAL_QUESTIONS * 100);
  $('result-title').textContent = pct === 100 ? 'Você gabaritou! ✨' : pct >= 67 ? 'Mandou muito bem! 🎉' : pct >= 34 ? 'Continue evoluindo! 🚀' : 'Toda prática conta! 💜';
  $('result-subtitle').textContent = pct === 100 ? 'Você dominou este desafio. Que tal aumentar a dificuldade?' : 'Confira a revisão para aprender com cada resposta.';
  $('result-points').textContent = String(session.score);
  $('result-correct').textContent = `${session.correct}/${TOTAL_QUESTIONS}`;
  $('result-percent').textContent = `${pct}%`;
  $('result-record').textContent = newRecord ? 'Novo! ✦' : String(stats.best);
  const list = $('review-list');
  list.replaceChildren();
  session.answers.forEach((answer, index) => {
    const details = document.createElement('details');
    details.className = 'review-item';
    const summary = document.createElement('summary');
    const status = document.createElement('span');
    status.className = `review-state ${answer.correct ? '' : 'incorrect'}`;
    status.textContent = answer.correct ? '✓' : '✕';
    const text = document.createElement('span');
    text.textContent = `${index+1}. ${answer.q.q}`;
    summary.append(status,text);
    const info = document.createElement('div');
    info.className = 'review-detail';
    const strong = document.createElement('strong');
    strong.textContent = `Resposta correta: ${answer.q.a[answer.q.correct]}`;
    const para = document.createElement('p');
    para.textContent = answer.q.why;
    info.append(strong,para);
    details.append(summary,info);
    list.append(details);
  });
  showView('result-view');
  scrollToArena();
}
function exitQuiz() {
  if (!session) return;
  if (!window.confirm('Sair agora? O progresso desta rodada não será salvo.')) return;
  clearTimer();
  session = null;
  showView('setup-view');
  scrollToArena();
}
function backToSetup() {
  clearTimer();
  session = null;
  showView('setup-view');
  scrollToArena();
}

setupOptions();
updateSummary();
renderStats();
$('start-button').addEventListener('click',startSession);
$('next-button').addEventListener('click',nextQuestion);
$('exit-button').addEventListener('click',exitQuiz);
$('replay-button').addEventListener('click',startSession);
$('home-button').addEventListener('click',backToSetup);
document.addEventListener('keydown',event => {
  if (!session || $('quiz-view').classList.contains('hidden') || event.altKey || event.ctrlKey || event.metaKey) return;
  const focused = document.activeElement;
  if (['INPUT','TEXTAREA','SELECT'].includes(focused?.tagName)) return;
  if (!session.answered && /^[1-4]$/.test(event.key)) {
    event.preventDefault();
    submitAnswer(Number(event.key)-1);
  } else if (session.answered && event.key === 'Enter' && focused !== $('next-button')) {
    event.preventDefault();
    nextQuestion();
  }
});
