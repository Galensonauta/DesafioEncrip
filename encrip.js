const mensajeOriginal= document.querySelector(".mensajeOriginal");
const mensajeResp=document.querySelector(".mensajeResp");

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

function bEncrip(){
    const textoEn=encrip(mensajeOriginal.value)
    mensajeResp.value=textoEn
    mensajeOriginal.value= "";
    mensajeResp.style.backgroundImage="none";
}
function bDesencrip(){
    const textoEn=desencrip(mensajeResp.value)
    mensajeOriginal.value=textoEn
    mensajeResp.value= "";
    mensajeResp.style.backgroundImage="none";
}
function encrip(codigo){ 
    let codigox = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]; 

    codigo=codigo.toLowerCase();

    for(let x=0; x < codigox.length; x++ ){
      if(codigo.includes(codigox[x][0])){
            codigo=codigo.replaceAll(codigox[x][0],codigox[x][1])
      }
    }
    return codigo
}

function desencrip(codigo){ 
    let codigox = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]; 

    codigo=codigo.toLowerCase();

    for(let x=0; x < codigox.length; x++ ){
      if(codigo.includes(codigox[x][1])){
            codigo=codigo.replaceAll(codigox[x][1],codigox[x][0])
      }
    }
    return codigo
}
