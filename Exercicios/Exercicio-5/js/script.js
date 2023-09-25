function resposta(seculo){
	switch (seculo) {
		case "10":
		const elementoresul1= document.getElementById("resultado");
         elementoresul1.innerHTML= "Errado!!";
         elementoresul1.style.color = 'red';
         
			//console.log('ERRADO')//

		/*const elementoresul1= document.getElementById("resultado1");
         elementoresul1.innerHTML= "Errado!!";
         elementoresul1.style.color = 'red';/*/
			break;
		case "100":
		const elementoresul2= document.getElementById("resultado");
         elementoresul2.innerHTML= "Certo!!";
         elementoresul2.style.color = 'green';

			//console.log('CERTO!!')//

		/*const elementoresul2= document.getElementById("resultado2");
         elementoresul2.innerHTML= "Errado!!";
         elementoresul2.style.color = 'red';*/
			break;
		case "1000":
        const elementoresul3= document.getElementById("resultado");
         elementoresul3.innerHTML= "Errado!!";
         elementoresul3.style.color = 'red';

			//console.log('ERRADO!!')//

		 /*const elementoresul3= document.getElementById("resultado3");
         elementoresul3.innerHTML= "Errado!!";
         elementoresul3.style.color = 'red';*/
			break;
		
	}
}