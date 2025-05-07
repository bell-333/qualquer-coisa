// Inicializando o AOS (animações)
AOS.init();

// Mostrar o modal de boas-vindas ao carregar a página
// Função para rolar até o botão de contato
function scrollToContato() {
    const contatoBtn = document.querySelector('.btn-success');
    if (contatoBtn) {
      contatoBtn.scrollIntoView({ behavior: 'smooth' });
      const modal = bootstrap.Modal.getInstance(document.getElementById('boasVindasModal'));
      modal.hide();
    }
  }

  // Abrir modal automaticamente quando a página carregar
  window.onload = function() {
    const modal = new bootstrap.Modal(document.getElementById('boasVindasModal'));
    modal.show();
  };

// Lidar com o envio do formulário de contato
const form = document.getElementById("formContato");
const msgSucesso = document.getElementById("msgSucesso");
const loading = document.getElementById("loading");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  loading.classList.remove("d-none");

  setTimeout(() => {
    loading.classList.add("d-none");
    msgSucesso.classList.remove("d-none");
    form.reset();
  }, 1500); // Simula envio
});

  
  