var numeroSecreto = parseInt(Math.random() * 1001)

//enquanto nao acertar o numeroSecreto
while(chute != numeroSecreto){

    var chute = prompt('Digite um número entre 0 e 1000')

    //se chute == numeroSecreto
    if(chute ==numeroSecreto){
        alert('Acertou!')
    } else if(chute > numeroSecreto){
        alert('O número secreto é menor.')
    } else if(chute < numeroSecreto){
        alert('O número secreto é maior.')
    }

}