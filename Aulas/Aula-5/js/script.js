function resposta(){
	var aw1 = document.getElementById("aw-1").value;
	var aw2 = document.getElementById("aw-2").value;
	var aw3 = document.getElementById("aw-3").value;
    //-------------------------//
	console.log(aw1);
	console.log(aw2);
	console.log(aw3);
	//------------------------//
	const caixa = document.getElementById("Resposta");
	if (aw3 > 20) {
       caixa.style.color="red";
	}else {
       caixa.style.color="";
	}
	caixa.innerHTML = aw1 + "<br>" + aw2 + "<br>" + aw3;  
}



