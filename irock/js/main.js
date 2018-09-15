function greeting () {
	alert("Olá pessoal");
}

function touchRock () {
	var userName = prompt("Qual o seu nome?");

	if(userName) {
		alert("Prazer em conhece-lo, " + userName + ".");
		document.getElementById("rock").src = "images/sorri.png";
	}
}	