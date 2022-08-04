const elementJoke = document.querySelector('#joke');
const elementButtonJokeGenerator = document.querySelector('#buttonJokeGenerator');

const joke = [
    "O que o pato disse para a pata? R.: Vem Quá!",
    "Porque o menino estava falando ao telefone deitado? R.: Para não cair a ligação.",
    "Qual é a fórmula da água benta? R.: H Deus O!",
    "Era uma vez um pintinho que se chama Relam. Toda vez que chovia, Relam piava!(trocadilho com a palavra relampeava)",
    "O diretor da empresa pergunta ao novo funcionário: - O contador já disse qual é a sua tarefa? - Sim. Acordá-lo quando eu perceber que o senhor está vindo",
    "Qual é a cidade brasileira que não tem táxi? R.: Uberlândia.",
    "O que o tijolo falou para o outro? R.: Há um ciumento entre nós.",
    "Porque o jacaré tirou o filho da escola?R.: Porque ele réptil de ano.",
    "Porque o Batman colocou o Bat-móvel no seguro?R.: Porque ele tem medo que Robin!",
    "Por que o policial não usa sabão? R.: Porque ele prefere deter gente.",
    "O que é um astrólogo andando a cavalo? R.: Um Cavaleiro do Zodíaco.",
    "O que um cromossomo falou para o outro? R.: Cromossomos bonitos!",
    "Como o Batman faz para entrar na Bat-caverna? R.: Ele bat-palma.",
    "Por que a mulher do Hulk se divorciou dele? R.: Porque ela queria um homem mais maduro",
    "O que um álcool disse para outro álcool? R.: Etanois!",
    "Por que o pão não entende a batata? R.: Porque o pão é francês e a batata é inglesa"
]

const jokeGenerator = () => {

    elementButtonJokeGenerator.setAttribute("disabled", true);

    const totalJoke = joke.length;
    const randomNumber = Math.floor(Math.random() * totalJoke);

    elementJoke.innerHTML = joke[randomNumber];

    elementJoke.style.opacity = 1;

    setTimeout(function(){
        elementJoke.style.opacity = 0;
        elementButtonJokeGenerator.removeAttribute("disabled");
    }, 6000);
}