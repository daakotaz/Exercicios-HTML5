const imagem1 = document.getElementById('imgform')
const botao1 = document.getElementById('botao1')

botao1.onclick = function(){
    if (botao1.value === "estado1"){
        imagem1.src="yodaneutro.gif";
        botao1.value ="estado2";
    }
    else if(botao1.value === "estado2"){
        imagem1.src="yodasoneca.gif";
        botao1.value ="estado3";
    }
    else if (botao1.value == "estado3"){
        imagem1.src="random gifs.gif";
        botao1.value="estado1";
    }
}