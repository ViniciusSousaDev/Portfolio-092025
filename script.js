// Revela elementos ao rolar a página
function revelarAoRolar() {
  const elementos = document.querySelectorAll('.animar');
  const alturaJanela = window.innerHeight * 0.85;

  elementos.forEach(el => {
    const topo = el.getBoundingClientRect().top;
    if (topo < alturaJanela) {
      el.classList.add('visivel');
    }
  });
}

window.addEventListener('scroll', revelarAoRolar);
window.addEventListener('load', revelarAoRolar);

// Função para enviar WhatsApp
function enviarWhats(event) {
  event.preventDefault();
  const nome = document.getElementById('nome').value;
  const mensagem = document.getElementById('mensagem').value;
  const telefone = '5511952153308';
  const texto = `Olá, meu nome é ${nome}. ${mensagem}`;
  const msgFormatada = encodeURIComponent(texto);
  window.open(`https://wa.me/${telefone}?text=${msgFormatada}`, '_blank');
}
