var botaoAdicionar = document.querySelector("#buscar-pacientes");

// Este trecho adiciona um evento de clique ao botão selecionado. Quando o botão é clicado, a função anônima definida dentro do addEventListener será executada.
botaoAdicionar.addEventListener("click", function () {
  var xhr = new XMLHttpRequest();
  // Estamos configurando a requisição HTTP para buscar os dados dos pacientes. O primeiro argumento 'GET' indica o método HTTP a ser utilizado, e o segundo argumento é a URL da API de onde
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function () {
    var erroAjax = document.querySelector("#erro-ajax");

    if (xhr.status == 200) {
      erroAjax.classList.add("invisivel");
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);

      pacientes.forEach(function (paciente) {
        adicionaPacienteNaTabela(paciente);
      });
    } else {
      erroAjax.classList.remove("invisivel"); //  Verifica se a requisição foi bem-sucedida. Se for, oculta a mensagem de erro.
    }
  });

  xhr.send();
});

//Utilizei para fazer requisições atualizando o conteúdo da página sem recarregar a página inteira.
