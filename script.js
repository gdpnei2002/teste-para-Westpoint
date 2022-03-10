function buscaNumeroPrimos(n) {

    var numerosPrimos = [];

    for (var i = 2; i < n; i++){   
       var quantidadeDeDivisores = 0; 
       
       var explica = ("O numero " + i);
       
       //exibe quantidade de divisores
        explica +=("\nQuantidade de divisores = " + quantidadeDeDivisores);
        console.log(explica);

        // classifica como primo ou não
        if (quantidadeDeDivisores > 0){
            console.log("numero não primo")
        }else 
        console.log("numero primo")
   
        //exibe numeros primos no array
       if (quantidadeDeDivisores % i == 0) {
       
          numerosPrimos.push(i);
          console.log(numerosPrimos);
          
       }
    }
    // a soma
    var soma = numerosPrimos.reduce(function(soma, i) {
        return soma + i;
    });
    console.log("A soma dos numeros primos deu "+soma);
   

  return numerosPrimos;
}
buscaNumeroPrimos(1000); //<- selecione seu numero primo
