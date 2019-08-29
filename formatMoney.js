export function MoneyFormat (texto) {
  let qntTexto = 0 ;
  let novoTexto = '';

  if ( texto == '' ) {
    return "0,00";
  } 

  texto = texto.replace(/[^\d]+/g, "");
  qntTexto = texto.length;

  if (qntTexto == 0) {
    novoTexto = "0,00";
  } else if (qntTexto == 1) {
    novoTexto = "0,0" + texto;
  } else if (qntTexto == 2) {
    novoTexto = "0," + texto;
  } else if (qntTexto < 6) {
    novoTexto =
      texto.substring(0, qntTexto - 2) + "," + texto.substring(qntTexto - 2);
  } else if (qntTexto < 9) {
    novoTexto =
      texto.substring(0, qntTexto - 5) +
      "." +
      texto.substring(qntTexto - 5, qntTexto - 2) +
      "," +
      texto.substring(qntTexto - 2);
  }
  if (novoTexto.length > 4) {
    if (novoTexto[0].substring(0, 1) == "0") {
      novoTexto = novoTexto.substring(1);
    }
  }
  return novoTexto;

};