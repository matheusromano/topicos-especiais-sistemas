function criarParagrafo() {
    let paragrafo = document.createElement('p')
    paragrafo.textContent = 'Parabéns um virus está no seu computador'
    document.body.appendChild(paragrafo)
}

const botoes = document.querySelectorAll('button')

for(var i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener('click', criarParagrafo)
}