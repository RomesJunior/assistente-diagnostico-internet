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
