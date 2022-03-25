function contador() {
    var list = []
    for (let i = 0; i <= 10; i++) {
        list.push(i)
    }

    for (var i = 0; i < list.length; i++) {
        document.getElementById("contador").innerHTML = list
        
    }

}

function textoDebitoTecnico() {
    document.getElementById("contador").innerHTML = list
    paragrafo.textContent = "Também conhecido como dívida técnica, o débito técnico é um conceito no desenvolvimento de software utilizado para representar o custo implícito de uma implementação ou solução pensada somente no agora, elaborada para suprir demandas atuais, em vez fazer uso de uma abordagem de melhor qualidade."
    
    
}

function siteJenkins() {
    window.open("https://www.jenkins.io/",'_blank');
}

function siteSonar() {
    window.open("https://sonarsource.com/",'_blank');
}

