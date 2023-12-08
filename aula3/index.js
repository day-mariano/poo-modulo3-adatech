//Exercício 1: Crie um objeto literal representando um carro com os seguintes atributos: marca, modelo, ano e cor.
const carro = {
  nome: "Chevrolet",
  modelo: "onix",
  ano: "2020",
  cor: "preto",
}

//Exercício 2: Crie um objeto literal representando um círculo com os atributos raio e calcularÁrea (um método que calcula a área do círculo).

const circulo = {
  raio: 3,
  calcularArea() {
    return ("calculo da área")
  }
}

//Exercício 3: Crie um objeto chamado "aluno" com os atributos nome, idade e um método chamado "mostrarInformacoes" que imprime os dados do aluno.
 class aluno { constructor (nome, idade) {
   this.nome = nome;
   this.idade = idade;
  }

  mostrarInformacões = () => {
    console.log(this.nome, this.idade)
  }
 }

 const maria = new aluno("Maria", 20)

 maria.mostrarInformacões()

 //Exercício 4: Crie um objeto chamado "livro" com os atributos título, autor e um método chamado "detalhes" que imprime os detalhes do livro.
    
 class livro { constructor (titulo, autor) {
  this.titulo = titulo;
  this.autor = autor;
 }

 detalhes = () => {
   console.log(this.titulo, this.autor)
 }
}

const aMaoeaLuva = new livro("Machado de Assís", "A Mão e a Luva")

aMaoeaLuva.detalhes()

//  Exercício 5: Crie uma classe chamada "Retângulo" com os atributos "largura" e "altura" e um método chamado "calcularÁrea" que retorna a área do retângulo.

class retângulo { constructor (largura, altura) {
  this.largura = largura
  this.altura = altura;
}
  calcularÁrea = () => {
    console.log(this.largura * this.altura)
  }
}

const retângulo1 = new retângulo(2,5)

retângulo1.calcularÁrea()