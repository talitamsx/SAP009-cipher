const cipher = {
  encode:
  function (inputOffset, texto) {
    if (typeof inputOffset !== 'number') { // não pode digitar letras
      throw new TypeError()
      
    }
    if (typeof texto !== 'string') {
      throw TypeError()
    }
    let ResultCod = '';
        
    for(let i = 0; i < texto.length; i++) {
      const codCrip = texto[i].charCodeAt();
      if (codCrip > 64 && codCrip < 91) {
        const newcodigo = (codCrip - 65 + inputOffset) % 26 + 65
        ResultCod += String.fromCharCode(newcodigo);
      }        
      else if (codCrip > 96 && codCrip < 123) {
        const newcodigo = (codCrip - 97 + inputOffset) % 26 + 97
        ResultCod += String.fromCharCode(newcodigo);
      }        
      else if (codCrip > 31 && codCrip < 34 || codCrip === 64) {
        ResultCod += texto[i];
      }              
    }
    return ResultCod;
  },

  decode:
  function (inputOffset, texto) {
    if (typeof inputOffset !== 'number') {
      throw new TypeError()
    }
    if (typeof texto !== 'string') {
      throw TypeError()
    }

    let ResultCod = '';
  
    for(let i = 0; i < texto.length; i++) {
      const codCrip = texto[i].charCodeAt();
      if (codCrip > 64 && codCrip < 91) {
        const newcodigo = (codCrip + 65 - inputOffset) % 26 + 65
        ResultCod += String.fromCharCode(newcodigo);
      }        
      else if (codCrip > 96 && codCrip < 123) {
        const newcodigo = (codCrip + 97 - inputOffset) % 26 + 97
        ResultCod += String.fromCharCode(newcodigo);
      }        
      else if (codCrip > 31 && codCrip < 34 || codCrip === 64) {
        ResultCod += texto[i];
      }              
    }
    return ResultCod;
  },
}
export default cipher; 