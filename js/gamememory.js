const baralho = [
    {
        nome: "flor",
        img: "../cards/flor.png"
    },
    {
        nome: "musgo",
        img: "../cards/musgo.png"
    },
    {
        nome: "pinheiro",
        img: "../cards/pinheiro.png"
    },
    {
        nome: "planta-cobra",
        img: "../cards/planta-cobra.png"
    },
    {
        nome: "samambaia",
        img: "../cards/samambaia.png"
    },
    {
        nome: "cacto",
        img: "../cards/cacto.png"
    },
    {
        nome: "flor",
        img: "../cards/flor.png"
    },
    {
        nome: "musgo",
        img: "../cards/musgo.png"
    },
    {
        nome: "pinheiro",
        img: "../cards/pinheiro.png"
    },
    {
        nome: "planta-cobra",
        img: "../cards/planta-cobra.png"
    },
    {
        nome: "samambaia",
        img: "../cards/samambaia.png"
    },
    {
        nome: "cacto",
        img: "../cards/cacto.png"
    }
];

baralho.sort(()=>{
return 0.5 - Math.random();
});
const grade = document.querySelector("#grade");
const pontuacao = document.querySelector("#pontos");
let ponto;
let escolhidas = [];

function criarGrade() {
ponto = 0;
pontuacao.innerText = ponto;
for(let i = 0; i < baralho.length; i++){
    let carta = document.createElement("img");
    carta.classList.add("red");
    carta.id = i;
    carta.name = baralho[i].nome;
    carta.src = "../cards/verso.jpg"
    carta.addEventListener("click", escolherCarta);
    grade.appendChild(carta);
}
}

function escolherCarta() {
let carta = this;
carta.src = baralho[carta.id].img;
escolhidas.push(carta);

if(escolhidas.length == 2) {
    setTimeout(() => {
        let carta1 = escolhidas[0];
        let carta2 = escolhidas[1];

        if(carta1.name == carta2.name) {
            carta1.src = "../cards/branco.png";
            carta2.src = "../cards/branco.png";
            carta1.removeEventListener("click",escolherCarta);
            carta2.removeEventListener("click",escolherCarta);
            ponto++;
            pontuacao.innerText = ponto;
        }else{
            carta1.src = "../cards/verso.jpg";
            carta2.src = "../cards/verso.jpg";
        }

        if(ponto == baralho.length / 2) {
            alert("Muito bem! Você achou todos os pares!");
            grade.innerHTML = "";
            baralho.sort(()=>{
                return 0.5 - Math.random();
            });
            criarGrade();
        }

        escolhidas = [];
    },850);
}
}