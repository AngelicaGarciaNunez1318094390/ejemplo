var expresion = document.getElementById('expresion');
var resultado = document.getElementById('resultado');
var array= expresion.innerHTML.split(/\s/);
for(var i in array){
    if(/^[a-z]|[A-Z]$/.test(array[i])){
        resultado.innerHTML= resultado.innerHTML+array[i]+" es Letras\n";
     } else if(/^[0-9]$/.test(array[i])){
        resultado.innerHTML=resultado.innerHTML+array[i]+"Número\n";
        } else if(/^(bin)|[0-1]$/.test(array[i])){
            resultado.innerHTML=resultado.innerHTML+array[i]+"Binario\n";
        } else if(/^[+]$/.test(array[i])){
            resultado.innerHTML=resultado.innerHTML+array[i]+"Suma\n";
        }else if(/^[*]$/.test(array[i])){
            resultado.innerHTML=resultado.innerHTML+array[i]+"Multiplicación\n";
        }else if(/^[-]$/.test(array[i])){
            resultado.innerHTML=resultado.innerHTML+array[i]+"Resta\n";
        }else if(/^[/]$/.test(array[i])){
            resultado.innerHTML=resultado.innerHTML+array[i]+"División\n";
        }else if(/(for|while|if|true|false|case|break|do|!|#|%|&|\|=|?|¡|¿)/.test(array[i])){
            resultado.innerHTML=resultado.innerHTML+array[i]+"Palabras reservadas y signos especiales\n";
        }
    }