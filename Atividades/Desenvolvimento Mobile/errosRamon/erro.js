const moduloimport = require('./outro_arquivo.js')

function soma(a, b) {
    return a + b
  }
  
  console.log(soma(2, 3))
  
  
  let objeto = {
    nome: 'João',
    idade: 30 ,
    endereco: 'Rua ABC, 123'
  }
  
  function imprimeNome(nome, number) {
    console.log(nome)
  }
  imprimeNome('Diogo dos Santos Pastor')
  
  function multiplica(a, b){
    return a * b
  }

  console.log(multiplica(2, 3))
  
  if (true) {
    console.log('Você corrigiu todos os erros!')
  }