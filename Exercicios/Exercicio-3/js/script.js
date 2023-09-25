var nome = prompt("Qual e o seu nome?");
         var dado = prompt("qual a cor do seu clube");
         if (dado == "azul") {
            document.write(nome + "es do porto");
         }else if (dado == "vermelho"){
         	document.write(nome + "es do benfica");
         }else if(dado == "verde"){
         	document.write(nome + "es do sporting");
         }else if(dado == "") {
         	document.write("Nao Inseriu uma cor");
         	
        }
