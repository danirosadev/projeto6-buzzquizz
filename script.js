const QUIZZES = "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes";
var currentQuiz = {
    id: 0,
    image: "",
    levels: [],
    questions: [],
    title: "",
    quizStatus: { feitos: 0, acertos: 0 }
}
const meusQuizes = [];
if( window.localStorage['BuzzQuizz_id'] ){
    meusQuizes.push(...JSON.parse(window.localStorage['BuzzQuizz_id']))
}
// Navegação Site
// Sistema de navegação por classe SHOW CSS;
// Função para randomizar array
function shuffleArray(arr) {
    // Loop em todos os elementos
    for (let i = arr.length - 1; i > 0; i--) {
            // Escolhendo elemento aleatório
        const j = Math.floor(Math.random() * (i + 1));
        // Reposicionando elemento
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // Retornando array com aleatoriedade
    return arr;
}
function reloadQuizzes(){
    document.querySelector('#quizList').innerHTML = "";
    if(meusQuizes.length != 0){ document.querySelector('#lista-meusQuizes').innerHTML = "" }
    function x(b){
        let quiz = document.createElement('div');
        let quizIMG = document.createElement('img');
        let quizDIV = document.createElement('div');
        quiz.className = "quiz"
        quizIMG.src = b.image;
        quizDIV.textContent = b.title;
        quiz.onclick = ()=>{
            axios.get( QUIZZES + "/" + b.id).then( c =>{
                toggleShow(2);
                
                setQuizzGame(c.data);
            })
        }
        quiz.appendChild(quizIMG);
        quiz.appendChild(quizDIV);
        return quiz;
    }

    meusQuizes.forEach( ind =>{
        axios.get(QUIZZES + "/" + ind).then( b =>{
            document.querySelector('#lista-meusQuizes').appendChild(x(b.data));
        })
    })
    axios.get(QUIZZES)
        .then( a => {
            a.data.forEach(b =>{
                document.querySelector('#quizList').appendChild(x(b));
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
        var ids = [a.data.id];
        ids = [...ids, ...JSON.parse(window.localStorage['BuzzQuizz_id'])]
        window.localStorage['BuzzQuizz_id'] = JSON.stringify(ids);
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
            createQuizz.button = document.querySelector('.botao');

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
	            createQuizz.button.innerHTML = 'Prosseguir para cria níveis';
				//createQuizz.button.setAtribute('onclick', 'validaForm2()');
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
                    color: '#123456',
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
				createQuizz.button.innerHTML = 'Finalizar Quizz';
				//createQuizz.button.setAtribute('onclick', 'sendQuizz()');
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
        sendQuizz();
        break;
    }
}
function resetQuiz(){
    currentQuiz.id = 0;
    currentQuiz.image = "";
    currentQuiz.levels = [];
    currentQuiz.questions = [];
    currentQuiz.title = "";
}
function setQuizzGame(data){
    resetQuiz();
    currentQuiz.id = data.id;
    currentQuiz.image = data.image;
    currentQuiz.levels = [...data.levels];
    currentQuiz.questions = [...data.questions];
    currentQuiz.title = data.title;

    
    document.querySelector('#quizTemplate span').textContent = data.title;
    document.querySelector('#quizTemplate img').src = data.image;

    
    currentQuiz.questions.forEach( (q, y) =>{
        let divs = []; 
        divs[0] = document.createElement('div'); // class= pergunta
        divs[1] = document.createElement('div'); // class= pergunta-titulo recebe color
        divs[2] = document.createElement('div'); // class= options

        divs[0].classList.add("pergunta");
        divs[1].classList.add("pergunta-titulo");
        divs[1].textContent = q.title;
        divs[2].classList.add("options");
        
        divs[0].appendChild(divs[1]);
        divs[0].appendChild(divs[2]);
        let options = [];
        q.answers.forEach( (ans, i) =>{
            let ops = [];
            ops[0] = document.createElement('div'); // class= op

            ops[0].dataset['id'] = i;
            ops[0].dataset['pid'] = y;
            ops[0].classList.add('op');
            ops[0].onclick = function(clk){
                currentQuiz.quizStatus.feitos++;
                if(ops[0].dataset['id'] == 0){
                    currentQuiz.quizStatus.acertos++;
                }
                console.log(this)
                document.querySelectorAll(`[data-pid="${y}"]`).forEach( perg =>{
                    if ( perg.dataset.id != this.dataset.id ){ 
                        perg.style.opacity = '0.2';
                     }
                })
            }
            ops[1] = document.createElement('img'); // img
            ops[2] = document.createElement('span'); // span
            
            ops[1].src = ans.image;
            ops[2].textContent = ans.text;
            
            ops[0].appendChild(ops[1]);
            ops[0].appendChild(ops[2]);
            options.push(ops[0]);
        })
        shuffleArray(options);
        options.forEach(a =>{
            divs[2].appendChild(a);
        })
        document.querySelector('#areaQuiz').appendChild(divs[0]);
    })
    
}

var createQuizz;
// Criação de Quizz
class Quizz{
    constructor(){
        this.step = 0;
        this.title = "Quanto você sabe sobre JOGOS?";
        this.image = "https://thumbs2.imgbox.com/2d/46/Ba6012x0_t.jpg";
        this.qnt_perguntas = 0;
        this.qnt_nivel = 0;

        this.questions = [{
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
		}];
        this.levels = [{
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
		}];
    }
}

reloadQuizzes()