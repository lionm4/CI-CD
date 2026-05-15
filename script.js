function executarPipeline() {
    const resultado = document.getElementById("resultado");
  
    resultado.innerHTML = "🔄 Executando testes...";
  
    setTimeout(() => {
      resultado.innerHTML = "✅ Testes passaram!";
  
      setTimeout(() => {
        resultado.innerHTML += "<br>🚀 Deploy realizado com sucesso!";
      }, 1500);
  
    }, 1500);
  }