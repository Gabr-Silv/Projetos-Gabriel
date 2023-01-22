
// OBJETIVO 1 - quando o usuário clicar no botão de veja o trailer,devemos abrir a modal com o video do trailer
// passo 1 -dar um jeito de pegar o elemento que representa o botão na tela usando o js
const botaoTrailer = document.querySelector(".botao-trailer");

// passo 3 -dar um jeito de pegar o elemento da modal no js
const modal = document.querySelector(".modal");
console.log("mostrar o objeto da modal", modal);
const video = document.getElementById("video");
const linkVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto")
}

// passo 2 -dar um jeito de identificar quando o usuário clica no botão
botaoTrailer.addEventListener("click", () => {
    console.log("clicou no botão veja o trailer")
    // passo 4 -abrir modal na tela
    alternarModal()
    video.setAttribute("src", linkVideo)
});
// OBJETIVO 2 - quando o usuário clicar no X devemos fechar a modal
// passo 1 -dar um jeito de pegar o elemento de fecha modal usando js
const botaoFecharModal = document.querySelector(".fechar-modal");
console.log(botaoFecharModal);

//-passo 2 -dar um jeito de identificar quando o usuário clicar no X
botaoFecharModal.addEventListener("click", () => {
    console.log("clicou no botão fechar modal")
    // passo 3 -fechar a modal
    alternarModal()
    video.setAttribute("src", "")
});


