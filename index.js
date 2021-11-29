function pulaLinha(){
    document.write("<br><br>")
};
function mostra(media){
    document.write(media);
    pulaLinha()
};
var tanque =(40);
var caminhoComGasolina = (480);
var consuloDeGasolina =(caminhoComGasolina/tanque);

mostra("O Consumo de gasolina foi de "+ consuloDeGasolina +" litros");
//document.write("O Consumo de gasolina foi de ",consuloDeGasolina," litros");

var caminhoComAlcool =(300);
var consumoDeAlcool =(caminhoComAlcool/tanque);
pulaLinha();
mostra("O Consumo de Álcool foi de "+ consumoDeAlcool + " litros");
//document.write("O Consumo de Álcool foi de "+ consumoDeAlcool + " litros");

function exibeAlerta(mensagem) {
alert("***" + mensagem + "***");
}

var idade1 = 48;
var idade2 = 26;
var dirIdades = idade1 - idade2 ;
var totalIdades = idade1 + idade2;
var mediaIdades = totalIdades/2;

exibeAlerta("Nossa diferença de idade é " + dirIdades + " anos");
exibeAlerta("A média das idades é " +  mediaIdades + " anos");
