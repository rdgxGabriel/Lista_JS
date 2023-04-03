
document.write("<section class='sec2'><h3>Sequencia de fibonacci</h3><button class='btn'> Mostrar sequencia</button></section>"); 
let button = document.querySelector('button'); 


let num1=0, num2=1;
let numero;





button.addEventListener('click', function(){ 
        numero = num2+ num1
        num1 = num2
        num2 = numero
        alert(numero);
}
);