function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;

}
function clean(){
    document.getElementById('resultado').innerHTML = "";
}

function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }else{
        document.getElementById('resultado').innerHTML = "Insira sua conta"
    }
    if(resultado == '0/0'){
        document.getElementById('resultado').innerHTML = '<img src="https://i.gifer.com/origin/00/00ae53a95ee7af0be395f5291d792c9a_w200.gif" alt="">'
    }
}

document.addEventListener("Keydown", function(event) {
    if (event.keyCode === 55){
        clean();
    }
});