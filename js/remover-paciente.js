var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function (event) {
  event.target.parentNode.classList.add("fadeOut");

  setTimeout(function () {
    event.target.parentNode.remove();
  }, 500);
});

//Em resumo, este código permite que os pacientes sejam removidos da tabela quando ocorre um clique duplo neles, proporcionando uma animação de desaparecimento suave antes da remoção efetiva.
