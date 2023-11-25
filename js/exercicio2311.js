function idade ( ) {

var nome = document.getElementById("nome").value;
var dataNasc = new Date(document.getElementById('dataNasc').value);

var dataAtual = new Date ();

var idade = dataAtual.getFullYear() - dataNasc.getFullYear ();



document.getElementById("Mostraridade").innerHTML = nome + ", a sua idade é " + idade + " anos. ";

}

function limpar(){
	document.getElementById("nome").value = "";
	document.getElementById("dataNasc").value = "";
	document.getElementById("Mostraridade").value = "";
}




