

function trazerMedia() {
    let nome = document.forms["meuFormulario"]["nome"].value;
    let n1 = document.forms["meuFormulario"]["nota1"].value;
    let n2 = document.forms["meuFormulario"]["nota2"].value;
    let media = (parseFloat(n1) + parseFloat(n2)) / 2
    if (media <= 5) {
        alert("Nota inferior a Média você esta reprovado")
    } else if (media == 5 || media < 6) {
        alert("Você precisará passar pela prova de recuperação")
    } else {
        alert("Parabéns " +nome+ " você foi aprovado\n"+ "Sua média foi: " + media)
    }


}

function getURLParameter(name) {
	return decodeURI((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]);
}
function hideURLParams() {
	var hide = ['success','error'];
	for(var h in hide) {
		if(getURLParameter(h)) {
			history.replaceState(null, document.getElementsByTagName("title")[0].innerHTML, window.location.pathname);
		}
	}
}
window.onload = hideURLParams;