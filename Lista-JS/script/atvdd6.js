

altura = []
genero = []
feminino = 0
masculino = 0
maior_altura = 0

for(i = 1; i <= 5; i++){
    let altura1 = parseInt(prompt('Informe a altura dos 5 integrantes individualmente(em cm): '))
    altura.push(altura1)

    let sexo = prompt('Qual seu genero: ').toLowerCase()
    sexo = sexo.slice("", 1)
    genero.push(sexo)
    
    if(sexo.startsWith('f') == true){
        feminino += 1
    }

    if(sexo.startsWith('m') == true){
        masculino += 1
    }
}

//sor essa dq eu travei bastante na hora de saber qual era a maior pessoa, na minha cabeça eu sei fazer mas não consigo colocar em pratica. Fiz oq eu consegui <3

