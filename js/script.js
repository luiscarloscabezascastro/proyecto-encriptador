// Archivo funciones de encriptacion

const inputTexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    inputTexto.value = ""
}

function encriptar(stringEncriptada){
    let matrixCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"],["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrixCodigo.length; i++){
        if(stringEncriptada.includes(matrixCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrixCodigo[i][0], matrixCodigo[i][1])
        }
    }
    return stringEncriptada;
}

function btnDesEncriptar(){
    const textoDesEncriptado = desencriptar(inputTexto.value)
    mensaje.value = textoDesEncriptado;
    inputTexto.value = ""
}

function desencriptar(stringEncriptada){
    let matrixCodigo = [["enter","e"], ["imes","i"], [ "ai","a"], ["ober","o"],["ufat","u"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrixCodigo.length; i++){
        if(stringEncriptada.includes(matrixCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrixCodigo[i][0], matrixCodigo[i][1])
        }
    }
    return stringEncriptada;
}

function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value =""
    alert("Texto copiado en el portapapeles")
}