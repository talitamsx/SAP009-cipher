import cipher from './cipher.js';

const btCodificar = document.getElementById('codificar'); //botão encode
const btDecodificar = document.getElementById('decodificar');

btCodificar.addEventListener('click', () => {  // chamada para o botão de criptografia
  const texto = document.getElementById('textoInput').value.toUpperCase(); //entrada usuario
  const offset = parseInt(document.getElementById('inputOffset').value); // chave
  const resultado = cipher.encode(offset, texto); // chamada da função 
  document.getElementById('outputMessage').value = resultado;   // resultado da codificação
});

btDecodificar.addEventListener('click', () => {  
  const texto = document.getElementById('textoInput').value.toUpperCase();
  const offset = parseInt(document.getElementById('inputOffset').value); 
  const resultado = cipher.decode(offset, texto); 
  document.getElementById('outputMessage').value = resultado;
});

// eslint-disable-next-line no-console
console.log(cipher);
