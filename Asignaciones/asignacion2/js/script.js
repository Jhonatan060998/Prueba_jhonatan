window.onload = function(){
    var formulario = document.getElementById('formulario');
    var button = document.getElementById('send');
    button.onclick = function(){
        if(formulario.checkValidity()){
            alert('El formulario es correcto');
            
        }
        else{
            alert('El formulario es incorrecto')
        }
    }
}