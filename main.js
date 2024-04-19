
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Quais as melhores marcas de roupa?");

    
    if (respostaTime.toLowerCase() === " adidas e nike") {
      alert("Isso mesmo! Adidas e Nike sao as melhores marca!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  
