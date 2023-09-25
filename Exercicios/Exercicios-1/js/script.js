function escrever() {
  let text;
  let person = prompt("Introduza o seu nome");
  if (person == "") {
    text = "Olá Visitante";
  } else {
    text = "olá " + person;
  }
  document.getElementById("resposta").innerHTML = text;
}