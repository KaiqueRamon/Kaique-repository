var name  = "Kaique";

function  GetVelocidade()
{
	var Velocidade=document.getElementById("Velocidade").value;
	console.log(Velocidade);
	
	//var VelocidadeInicial = Velocidade
	var gravidade = 10;

 var hmax = (Velocidade*Velocidade)/(2*gravidade);
 var tempoMax = Velocidade/gravidade;
 document.getElementById("altura").innerHTML="Altura Maxima:" + hmax;
 document.getElementById("tempo").innerHTML="Tempo de Subida:" + tempoMax;

}

