//Comunicação com o servidor

const SERVIDOR = "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes";
const UNICO = "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/ID_DO_QUIZZ";
const CRIAR = "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes";
const QUIZZES = "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes";

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
let numQuestao = document.querySelector('#numQuestao');
let pergunta = document.querySelector('#pergunta');

//Alternativas (são 4)
let a = document.querySelector('#a');
let b = document.querySelector('#b');
let c = document.querySelector('#c');
let d = document.querySelector('#d');


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

function verificarSeAcertou(){}

// Navegação Site
// Sistema de navegação por classe SHOW CSS;
function reloadQuizzes(){
    document.querySelector('#quizList').innerHTML = "";
    axios.get(QUIZZES)
        .then( a => {
            a.data.forEach(b =>{
                let quiz = document.createElement('div');
                let quizIMG = document.createElement('img');
                let quizDIV = document.createElement('div');
                quiz.className = "quiz"
                quizIMG.src = b.image;
                quizDIV.textContent = b.title;
                quiz.onclick = ()=>{
                    axios.get( QUIZZES + "/" + b.id).then( c =>{
                        console.log(c);
                    })
                }
                quiz.appendChild(quizIMG);
                quiz.appendChild(quizDIV);
                document.querySelector('#quizList').appendChild(quiz)
            })
        })
        .catch( a => console.log(a) )
    
}

function sendQuizz(){
    axios.post(QUIZZES, {
        title: createQuizz.title,
        image: createQuizz.image,
        questions: createQuizz.questions,
        levels: createQuizz.levels
    })
        .then( a => {
            reloadQuizzes();
        })
        .catch( a => console.log(a) )
}

function toggleShow(tela){
    reloadQuizzes();
    switch (tela) {
        case 1:
            document.getElementById('tela1').className = "show";
            document.getElementById('tela2').className = "";
            document.getElementById('tela3').className = "";
            document.getElementById('tela4').className = "";
            break;
        case 2:
            document.getElementById('tela1').className = "";
            document.getElementById('tela2').className = "show";
            document.getElementById('tela3').className = "";
            document.getElementById('tela4').className = "";
            break;
        case 3:
            createQuizz = new Quizz();
            document.getElementById('tela1').className = "";
            document.getElementById('tela2').className = "";
            document.getElementById('tela3').className = "show";
            document.getElementById('tela4').className = "";
            document.querySelector(`[data-stepid="${createQuizz.step}"]`).querySelector('.box').className = "box expand";
            break;
        case 4:
            document.getElementById('tela1').className = "";
            document.getElementById('tela2').className = "";
            document.getElementById('tela3').className = "";
            document.getElementById('tela4').className = "show";
        default:
            break;
    }
}

function nextStep(){
    // coleta de dados.
    switch (createQuizz.step) {
        case 0:
            createQuizz.title = document.querySelector('#step-title').value;
            createQuizz.image = document.querySelector('#step-img').value;
            createQuizz.qnt_perguntas = Number(document.querySelector('#step-count').value);
            createQuizz.qnt_nivel = Number(document.querySelector('#step-level').value);
            
            ++createQuizz.step;
            document.querySelectorAll('.step').forEach( (a)=> {
                if ( parseInt(a.dataset['stepid']) != createQuizz.step ){
                    a.className = "step"
                    a.querySelectorAll('.box').className = 'box';
                } else if ( parseInt(a.dataset['stepid']) == createQuizz.step ) {
                    a.className = "step show"
                    a.querySelectorAll('.box').className = 'box expand';
                }
            });
            for( let i=0;  i<createQuizz.qnt_perguntas;  i++){

                let box = document.createElement('div')
                box.className = (i==0)? 'box expand': 'box';
                let title_span = document.createElement('span')
                title_span.textContent = "Pergunta " + (i+1);
                let ion = document.createElement('ion-icon');
                ion.onclick = ()=>{
                    if(box.className == "box expand"){ box.className = "box" }
                    else if( box.className == "box"){ box.className = "box expand" };
                }
                ion.name = "checkbox-outline";
                
                let label = document.createElement('label')
                label.textContent = "COR DA PERGUNTA";
                let span1 = document.createElement('label')
                span1.textContent = "Resposta Correta";
                let span2 = document.createElement('label')
                span2.textContent = "Resposta Incorreta";
                
                let input_color = document.createElement('input')
                input_color.type = "color";
                let input_text = [];
                let input_url = [];
                
                input_text[0] = document.createElement('input')
                input_text[1] = document.createElement('input')
                input_text[2] = document.createElement('input')
                input_text[3] = document.createElement('input')
                input_text[4] = document.createElement('input')

                input_url[0] = document.createElement('input')
                input_url[1] = document.createElement('input')
                input_url[2] = document.createElement('input')
                input_url[3] = document.createElement('input')

                input_text[0].type = "text";
                input_text[1].type = "text";
                input_text[2].type = "text";
                input_text[3].type = "text";
                input_text[4].type = "text";
                input_url[0].type = "text";
                input_url[1].type = "text";
                input_url[2].type = "text";
                input_url[3].type = "text";
                
                input_text[0].placeholder="Texto da pergunta";
                input_text[1].placeholder="Resposta correta";
                input_text[2].placeholder="Resposta incorreta 2";
                input_text[3].placeholder="Resposta incorreta 3";
                input_text[4].placeholder="Resposta incorreta 3";
                input_url[0].placeholder="URL da imagem";
                input_url[1].placeholder="URL da imagem";
                input_url[2].placeholder="URL da imagem";
                input_url[3].placeholder="URL da imagem";
            
                input_text[0].dataset['tituloResposta'] = i;
                input_text[1].dataset['resposta1'] = i;
                input_text[2].dataset['resposta2'] = i;
                input_text[3].dataset['resposta3'] = i;
                input_text[4].dataset['resposta4'] = i;
                input_url[0].dataset['respostaimg1'] = i;
                input_url[1].dataset['respostaimg2'] = i;
                input_url[2].dataset['respostaimg3'] = i;
                input_url[3].dataset['respostaimg4'] = i;
        
                box.appendChild(title_span)
                box.appendChild(ion) 
                box.appendChild(input_text[0])
                box.appendChild(label)
                box.appendChild(input_color)
                box.appendChild(span1)
                box.appendChild(input_text[1]); 
                box.appendChild(input_url[0])
                box.appendChild(span2) 
                box.appendChild(input_text[2]); 
                box.appendChild(input_url[1])
                box.appendChild(input_text[3]); 
                box.appendChild(input_url[2])
                box.appendChild(input_text[4]); 
                box.appendChild(input_url[3])
                document.querySelector(".step.show").appendChild(box);
            }
            break;
    
        case 1:
            document.querySelector('[data-stepid="1"]')
            .querySelectorAll('.box').forEach(a =>{
                let respTitle = a.querySelector('[data-titulo-resposta]').value;
                let resp1 = a.querySelector('[data-resposta1]').value;
                let resp2 = a.querySelector('[data-resposta2]').value;
                let resp3 = a.querySelector('[data-resposta3]').value;
                let resp4 = a.querySelector('[data-resposta4]').value;
                let respIMG1 = a.querySelector('[data-respostaimg1]').value;
                let respIMG2 = a.querySelector('[data-respostaimg2]').value;
                let respIMG3 = a.querySelector('[data-respostaimg3]').value;
                let respIMG4 = a.querySelector('[data-respostaimg4]').value;
                let obj = {
                    title: respTitle,
                    answers: [
                        {text: resp1, image: respIMG1, isCorrectAnswer: true},
                        {text: resp2, image: respIMG2, isCorrectAnswer: false},
                        {text: resp3, image: respIMG3, isCorrectAnswer: false},
                        {text: resp4, image: respIMG4, isCorrectAnswer: false}
                    ]
                }
                createQuizz.questions.push(obj);
            })

            ++createQuizz.step;
            console.log(createQuizz.step)
            document.querySelectorAll('.step').forEach( (a)=> {
                if ( parseInt(a.dataset['stepid']) != createQuizz.step ){
                    a.className = "step"
                    a.querySelectorAll('.box').className = 'box';
                } else if ( parseInt(a.dataset['stepid']) == createQuizz.step ) {
                    a.className = "step show"
                    a.querySelectorAll('.box').className = 'box expand';
                }
            });
            for( let y=0;  y<createQuizz.qnt_nivel;  y++){
                let box = document.createElement('div')
                box.className = (y==0)? 'box expand': 'box';

                let title_span = document.createElement('span')
                title_span.textContent = "Nível " + (y+1);

                let ion = document.createElement('ion-icon');
                ion.name = "checkbox-outline";
                ion.onclick = ()=>{
                    if(box.className == "box expand"){ box.className = "box" }
                    else if( box.className == "box"){ box.className = "box expand" };
                }

                let input_text = document.createElement('input');
                let input_per = document.createElement('input');
                let input_url = document.createElement('input');
                let input_textarea = document.createElement('input');
            
                input_text.dataset.niveltext = y;
                input_per.dataset.nivelper = y;
                input_url.dataset.nivelurl = y;
                input_textarea.dataset.niveltextarea = y;

                input_text.type = "text";
                input_per.type = "text";
                input_url.type = "text";
                input_textarea.type = "text";

                input_text.placeholder = "Texto da nível";
                input_per.placeholder = "% de acerto mínima";
                input_url.placeholder = "URL da imagem do nível";
                input_textarea.placeholder = "Descrição do nível";
        
                box.appendChild(title_span);
                box.appendChild(ion);
                box.appendChild(input_text);
                box.appendChild(input_per);
                box.appendChild(input_url);
                box.appendChild(input_textarea);
                document.querySelector(".step.show").appendChild(box);
            }
            break;
        
        case 2:
        document.querySelector('[data-stepid="2"]')
        .querySelectorAll('.box').forEach(a =>{
            let resp1 = a.querySelector('[data-niveltext]').value;
            let resp2 = Number(a.querySelector('[data-nivelper]').value);
            let resp3 = a.querySelector('[data-nivelurl]').value;
            let resp4 = a.querySelector('[data-niveltextarea]').value;
            let obj = {title: resp1, image: resp3, text: resp4, minValue: resp2};
            createQuizz.levels.push(obj);
        })

        ++createQuizz.step;
        document.querySelectorAll('.step').forEach( (a)=> {
            if ( parseInt(a.dataset['stepid']) != createQuizz.step ){
                a.className = "step"
                a.querySelectorAll('.box').className = 'box';
            } else if ( parseInt(a.dataset['stepid']) == createQuizz.step ) {
                a.className = "step show"
                a.querySelectorAll('.box').className = 'box expand';
            }
        });
        toggleShow(4);
        document.querySelector('[data-stepid="1"]').innerHTML = "";
        document.querySelector('[data-stepid="2"]').innerHTML = "";
        createQuizz.step = 0;
        break;
    }
}

var createQuizz;
// Criação de Quizz
class Quizz{
    constructor(){
        this.step = 0;
        this.title = "";
        this.image = "";
        this.qnt_perguntas = 0;
        this.qnt_nivel = 0;
        
        this.questions = [];
        this.levels = [];
    }
}
reloadQuizzes()