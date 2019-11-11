var Terrorista = function() {
  
};


var achmed = new Terrorista();

var bombaCasera = new BombaCasera();
var bombaIndustrial = new BombaIndustrial();

var bombaConHumo = new BombaConHumo(bombaCasera);
var bombaConSonido = new BombaConSonido(bombaIndustrial);
var bombaCegadora = new BombaCegadora(bombaConSonido);

var virus = new Virus();
var bombaInformatica = new BombaInformatica(virus);

achmed.activarBomba(bombaCasera);
achmed.activarBomba(bombaIndustrial);
achmed.activarBomba(bombaConHumo);
achmed.activarBomba(bombaCegadora);
achmed.activarBomba(bombaInformatica);
