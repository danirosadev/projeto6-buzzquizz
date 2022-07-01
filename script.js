//Comunicação com o servidor
/*
const SERVIDOR = "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes";
const UNICO = "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/ID_DO_QUIZZ";
const CRIAR = "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes"

axios.get(SERVIDOR  ,   [
	{
		id: 1,
		title: "Título do quizz",
		image: "https://http.cat/411.jpg",
		questions: [
			{
				title: "Título da pergunta 1",
				color: "#123456",
				answers: [
					{
						text: "Texto da resposta 1",
						image: "https://http.cat/411.jpg",
						isCorrectAnswer: true
					},
					{
						text: "Texto da resposta 2",
						image: "https://http.cat/412.jpg",
						isCorrectAnswer: false
					}
				]
			},
			{
				title: "Título da pergunta 2",
				color: "#123456",
				answers: [
					{
						text: "Texto da resposta 1",
						image: "https://http.cat/411.jpg",
						isCorrectAnswer: true
					},
					{
						text: "Texto da resposta 2",
						image: "https://http.cat/412.jpg",
						isCorrectAnswer: false
					}
				]
			},
			{
				title: "Título da pergunta 3",
				color: "#123456",
				answers: [
					{
						text: "Texto da resposta 1",
						image: "https://http.cat/411.jpg",
						isCorrectAnswer: true
					},
					{
						text: "Texto da resposta 2",
						image: "https://http.cat/412.jpg",
						isCorrectAnswer: false
					}
				]
			}
		],
		levels: [
			{
				title: "Título do nível 1",
				image: "https://http.cat/411.jpg",
				text: "Descrição do nível 1",
				minValue: 0
			},
			{
				title: "Título do nível 2",
				image: "https://http.cat/412.jpg",
				text: "Descrição do nível 2",
				minValue: 50
			}
		]
	}
])



//Para buscar um único quizz, substituindo `ID_DO_QUIZZ` pelo id do quizz desejado.
axios.get(UNICO, {
	id: 1,
	title: "Título do quizz",
	image: "https://http.cat/411.jpg",
	questions: [
		{
			title: "Título da pergunta 1",
			color: "#123456",
			answers: [
				{
					text: "Texto da resposta 1",
					image: "https://http.cat/411.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Texto da resposta 2",
					image: "https://http.cat/412.jpg",
					isCorrectAnswer: false
				}
			]
		},
		{
			title: "Título da pergunta 2",
			color: "#123456",
			answers: [
				{
					text: "Texto da resposta 1",
					image: "https://http.cat/411.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Texto da resposta 2",
					image: "https://http.cat/412.jpg",
					isCorrectAnswer: false
				}
			]
		},
		{
			title: "Título da pergunta 3",
			color: "#123456",
			answers: [
				{
					text: "Texto da resposta 1",
					image: "https://http.cat/411.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Texto da resposta 2",
					image: "https://http.cat/412.jpg",
					isCorrectAnswer: false
				}
			]
		}
	],
	levels: [
		{
			title: "Título do nível 1",
			image: "https://http.cat/411.jpg",
			text: "Descrição do nível 1",
			minValue: 0
		},
		{
			title: "Título do nível 2",
			image: "https://http.cat/412.jpg",
			text: "Descrição do nível 2",
			minValue: 50
		}
	]
})

//Para criar quizz
axios.post(CRIAR , {
	title: "Título do quizz",
	image: "https://http.cat/411.jpg",
	questions: [
		{
			title: "Título da pergunta 1",
			color: "#123456",
			answers: [
				{
					text: "Texto da resposta 1",
					image: "https://http.cat/411.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Texto da resposta 2",
					image: "https://http.cat/412.jpg",
					isCorrectAnswer: false
				}
			]
		},
		{
			title: "Título da pergunta 2",
			color: "#123456",
			answers: [
				{
					text: "Texto da resposta 1",
					image: "https://http.cat/411.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Texto da resposta 2",
					image: "https://http.cat/412.jpg",
					isCorrectAnswer: false
				}
			]
		},
		{
			title: "Título da pergunta 3",
			color: "#123456",
			answers: [
				{
					text: "Texto da resposta 1",
					image: "https://http.cat/411.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Texto da resposta 2",
					image: "https://http.cat/412.jpg",
					isCorrectAnswer: false
				}
			]
		}
	],
	levels: [
		{
			title: "Título do nível 1",
			image: "https://http.cat/411.jpg",
			text: "Descrição do nível 1",
			minValue: 0
		},
		{
			title: "Título do nível 2",
			image: "https://http.cat/412.jpg",
			text: "Descrição do nível 2",
			minValue: 50
		}
	]
})

//Deve haver pelo menos 3 perguntas por quizz. Cada pergunta deve ter entre 2 e 4 respostas. Deve haver pelo menos 2 níveis por quizz.


//JOGO

let pontos = 0; //pontos para o placar
let placar = 0; // placar



//Criando telas com createElement()

//Pergunta
let numQuestao = document.querySelector('#numQuestao')
let pergunta = document.querySelector('#pergunta')

//Alternativas (são 4)
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')
*/

//Variáveis globais
let title, image, questions, levels;
let novoQuizz = [];
let dadosCriacao = []; 
let dadosSerializados;
let regularExpression;

function finalizarQuizz(){
	alert('hora de finalizar')
	//localStorage.getItem("dados", dadosSerializados);
}

function criarNiveis(){
	document.querySelector('.criacao-quizz-2').classList.add('conteudo-escondido');
	const form3 = document.querySelector('.criacao-quizz-3');
	form3.innerHTML = `<div class="titulo">
	<h2>Agora, decida os níveis</h2>
</div>
<div class="form">
	<div>
		<h3>Nível 1</h3>
		<input type="text" placeholder="Título do nível"/>
		<input type="text" placeholder="% de acerto mínima"/>
		<input type="text" placeholder="URL da imagem do nível"/>
		<input type="text" placeholder="Descrição do nível"/>
	</div>
</div>
<div class="form-2">
	<div class="pergunta">
		<h3>Nível 2</h3>
		<ion-icon name="create-outline"></ion-icon>
	</div>
</div>
<div>
	<button class="botao-cria-quizz" type="button" onclick="finalizarQuizz();">Finalizar Quizz</button>
</div>`
}

function criarPerguntas(){
	document.querySelector('.criacao-quizz-1').classList.add('conteudo-escondido');
	const form2 = document.querySelector('.criacao-quizz-2');
	form2.innerHTML = `<div class="titulo">
	<h2>Crie suas perguntas</h2>
</div>
<div class="form">
	
	<div class="pergunta-criada">
			<h3>Pergunta 1</h3>
			<input class="input-pergunta1" type="text" placeholder="Texto da pergunta"/>
			<input type="text" placeholder="Cor de fundo da pergunta"/>
	</div>
	<div class="resposta-correta">
			<h3>Resposta correta</h3>
			<input class="input-correta" type="text" placeholder="Resposta correta"/>
			<input type="text" placeholder="URL da imagem"/>
	</div>
	<div class="respostas-incorretas">
		<h3>Respostas incorretas</h3>
		 <div>
			<input class="input-incorreta1" type="text" placeholder="Resposta incorreta 1"/>
			<input type="url" placeholder="URL da imagem 1"/>
		</div>
		<div>
			<input class="input-incorreta2" type="text" placeholder="Resposta incorreta 2"/>
			<input type="url" placeholder="URL da imagem 2"/>
		</div>
		<div>
			<input class="input-incorreta3" type="text" placeholder="Resposta incorreta 3"/>
			<input type="url" placeholder="URL da imagem 3"/>
		</div>      
	</div>  
</div>
<div class="form-2">
	<div class="pergunta">
		<h3>Pergunta 2</h3>
		<ion-icon name="create-outline"></ion-icon>
	</div>
</div>
<div class="form-2">
	<div class="pergunta">
		<h3>Pergunta 3</h3>
		<ion-icon name="create-outline"></ion-icon>
	</div>
</div>
<div>
	<button class="botao-cria-quizz" type="button" onclick="criarNiveis();">Prosseguir para criar níveis</button>
</div>`

}

function renderizaForm1(){
	const form1 = document.querySelector('.criacao-quizz-1');
	form1.innerHTML = `<div class="titulo">
	<h2>Comece pelo começo</h2>
	</div>
	<div class="form">
		<input class="input-titulo" type="text" minlength="20" maxlength="65" placeholder="Título do seu quizz"/>
		<input class="input-urlimg" type="url" placeholder="URL da imagem do seu quizz"/>
		<input class="input-perguntas" type="number" min="3" placeholder="Quantidade de perguntas do quizz"/>
		<input class="input-niveis" type="number" min="2" placeholder="Quantidade de níveis do quizz"/>
	</div>
	<div>
		<button class="botao-cria-quizz botao1" type="button" onclick="validaForm1();">Prosseguir para criar perguntas</button>
	</div>`
}

function isURL() {
	regularExpression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
  
	return regularExpression.test();
}

function validaForm1 (){
	title = document.querySelector('.input-titulo').value;
	image = document.querySelector('.input-urlimg').value;
	questions = document.querySelector('.input-perguntas').value;
	levels = document.querySelector('.input-niveis').value;

	novoQuizz = {
		title: title,
		image: image
	}

	let botao = document.querySelector('button');
	botao.disabled = true;

	if(title.length < 20 || title.length > 65 || isURL(image) || questions < 3 || levels < 2){
		botao.disabled = true;
		alert('Por favor preencha os campos corretamente.');
	} else {
		botao.disabled = false;
		criarPerguntas();	
	}
}

function criarQuizz(){
    // Se clicar no botão Criar Quizz : Aparece a conteúdo-escondido 
	document.querySelector('.tela-1').classList.add('conteudo-escondido')
	renderizaForm1();
}



function verificarSeAcertou(){

    
}