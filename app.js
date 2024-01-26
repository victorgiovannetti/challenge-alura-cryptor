function btnEncriptar() {
   let texto = document.getElementById('txtEncriptador').value;

   texto = String(texto).replace(/e/g, 'enter');
   texto = String(texto).replace(/i/g, 'imes');
   texto = String(texto).replace(/a/g, 'ai');
   texto = String(texto).replace(/o/g, 'ober');
   texto = String(texto).replace(/u/g, 'ufat');


   document.getElementById('txtEncriptado').value = texto

   btnClique('encriptar');
   limparCampo('txtEncriptador');
   
}

function btnDesencriptar() {
   let texto = document.getElementById('txtEncriptador').value;

   texto = String(texto).replace(/enter/g, 'e');
   texto = String(texto).replace(/imes/g, 'i');
   texto = String(texto).replace(/ai/g, 'a');
   texto = String(texto).replace(/ober/g, 'o');
   texto = String(texto).replace(/ufat/g, 'u');

   document.getElementById('txtEncriptado').value = texto;

   btnClique('desencriptar');
   limparCampo('txtEncriptador');
      
}

function btnCopiar(){
   const texto = document.getElementById('txtEncriptado');
   navigator.clipboard.writeText(texto.value);
   btnClique('copiar');
   limparCampo('txtEncriptado');
   
}

function btnClique(id) {
   let botao = document.getElementById(id);
   let corOriginal = botao.style.backgroundColor;
   let textoOriginal = botao.innerHTML;
   let corTextoOriginal = botao.style.color;
   botao.disabled = false;
   
   botao.innerHTML = 'Feito!';
   botao.style.backgroundColor = '#E5E5E5';
   botao.style.color = '#0A3871'
    setTimeout(() => {
        botao.innerHTML = textoOriginal;
        botao.style.backgroundColor = corOriginal;
        botao.style.color = corTextoOriginal;
        botao.disabled = false;
    }, 1000);
}

function limparCampo(id) {
   texto = document.getElementById(id);
   texto.value = ''
}
