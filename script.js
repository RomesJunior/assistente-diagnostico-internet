const fluxo = {
  inicio: {
    pergunta: "A luz PON da ONT está acesa?",
    sim: "wifi",
    nao: "fibra"
  },
  fibra: {
    resposta: "Possível rompimento de fibra. Abra um chamado técnico."
  },
  wifi: {
    pergunta: "Outros aparelhos conectam no Wi-Fi?",
    sim: "dispositivo",
    nao: "reiniciar"
  },
  reiniciar: {
    resposta: "Reinicie a ONT/roteador e teste de novo."
  },
  dispositivo: {
    resposta: "O problema está no aparelho. Esqueça a rede e reconecte."
  }
};
let passoAtual = "inicio";

const perguntaEl = document.getElementById("pergunta");
const btnSim = document.getElementById("sim");
const btnNao = document.getElementById("nao");

function mostrarPasso() {
  const passo = fluxo[passoAtual];

  if (passo.resposta) {
    perguntaEl.textContent = passo.resposta;
    btnSim.style.display = "none";
    btnNao.style.display = "none";
  } else {
    perguntaEl.textContent = passo.pergunta;
  }
}

btnSim.addEventListener("click", function () {
  passoAtual = fluxo[passoAtual].sim;
  mostrarPasso();
});

btnNao.addEventListener("click", function () {
  passoAtual = fluxo[passoAtual].nao;
  mostrarPasso();
});

mostrarPasso();
