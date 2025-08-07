function adicionarProduto() {
  var nome = document.getElementById("nomeProduto").value;
  var preco = document.getElementById("precoProduto").value;
  var quantidade = document.getElementById("quantidadeProduto").value;
 
  var produto = document.createElement("div");
  produto.classList.add("produto");
 
  var titulo = document.createElement("h3");
  titulo.innerText = nome;
 
  var precoTag = document.createElement("p");
  precoTag.innerText = "R$ " + preco;
 
  var quantidadeTag = document.createElement("p");
  quantidadeTag.innerText = "Estoque: " + quantidade;
 
  var inputNovaQuantidade = document.createElement("input");
  inputNovaQuantidade.type = "text";
  inputNovaQuantidade.placeholder = "Nova quantidade";
 
  var btnAtualizar = document.createElement("button");
  btnAtualizar.innerText = "Atualizar Estoque";
  btnAtualizar.onclick = function () {
    quantidade = inputNovaQuantidade.value;
    quantidadeTag.innerText = "Estoque: " + quantidade;
    document.getElementById("mensagemCompra").innerText =
      "Estoque atualizado para " + nome + ": " + quantidade + " unidades.";
    inputNovaQuantidade.value = "";
  };
 
  var btnRemover = document.createElement("button");
  btnRemover.innerText = "Remover Produto";
  btnRemover.classList.add("remover");
  btnRemover.onclick = function () {
    produto.remove();
    document.getElementById("mensagemCompra").innerText =
      "Produto removido: " + nome;
  };
 
  produto.appendChild(titulo);
  produto.appendChild(precoTag);
  produto.appendChild(quantidadeTag);
  produto.appendChild(inputNovaQuantidade);
  produto.appendChild(btnAtualizar);
  produto.appendChild(btnRemover);
 
  document.getElementById("listaProdutos").appendChild(produto);
 
  // Limpa os campos
  document.getElementById("nomeProduto").value = "";
  document.getElementById("precoProduto").value = "";
  document.getElementById("quantidadeProduto").value = "";
}
 