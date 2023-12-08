// Crie uma classe chamada "Carro" com os atributos marca, modelo e ano. Em seguida, crie um construtor para a classe que inicializa esses atributos. Crie objetos de carros diferentes e imprima suas informações. 🚗

class carro { constructor(marca, modelo, ano) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
}
  mostrarInformacões = () => {
    console.log(this.marca, this.modelo, this.ano)
  }
}
const carro1 = new carro("Chevrolet", "Onix", 2020)
const carro2 = new carro("Fiat", "Uno", 2015)
console.log("_____Exercício 1_____")
carro1.mostrarInformacões()
carro2.mostrarInformacões()

// Crie uma classe chamada "Pessoa" com os atributos nome, idade e cidade. Implemente um construtor para esta classe. Em seguida, crie objetos de pessoas e exiba seus detalhes. 👤🏙️

class Pessoa { constructor (nome, idade, cidade ) {
  this.nome = nome;
  this.idade = idade;
  this.cidade = cidade;
 }

 mostrarInformacões = () => {
   console.log(this.nome, this.idade, this.cidade)
 }
}

const maria = new Pessoa("Maria", 20)
const joão = new Pessoa("João", 23)
const dayana = new Pessoa("Dayana", 29)

console.log("_____Exercício 2_____")
maria.mostrarInformacões()
joão.mostrarInformacões()
dayana.mostrarInformacões()

// Crie uma classe chamada "ContaBancaria" com os atributos número da conta, saldo e nome do titular. Adicione um construtor para inicializar esses atributos. Crie métodos para depositar e sacar dinheiro da conta. Teste esses métodos em objetos de conta bancária. 💰🏦

class ContaBancaria { constructor (numero, saldo, nome) {
  this.numero = numero;
  this.saldo = saldo;
  this.nome = nome;
}
mostrarDados = () => {
  console.log(this.numero, this.saldo, this.nome)
}
}

const Fulana = new ContaBancaria( 1234567890, 12000.00, "Fulana" )
const Dentrano = new ContaBancaria( 987654321, 7000.00, "Dentrano" )

console.log("_____Exercício 3_____")
Fulana.mostrarDados()
Dentrano.mostrarDados()

// Defina uma classe chamada "Círculo" que tenha um atributo raio e métodos para calcular a área e o perímetro do círculo. Crie objetos de círculos com diferentes raios e exiba suas áreas e perímetros. ⭕📏📐
// C = 2 * π * r | A = π . r²
class Círculo { constructor (raio) {
  this.raio = raio;
}
  calcularArea = () => {
    console.log(Math.PI * (this.raio * this.raio))
  }
  calcularPerimetro = () => {
    console.log(2 * Math.PI * this.raio)
  }
}
circuloPequeno = new Círculo (3)
circuloGrande = new Círculo (6)

console.log("_____Exercício 4_____")
circuloPequeno.calcularArea()
circuloPequeno.calcularPerimetro()
circuloGrande.calcularArea()
circuloGrande.calcularPerimetro()


// Crie uma classe chamada "Livro" com os atributos título, autor e ano de publicação. Implemente um construtor para esta classe. Crie objetos de livros e exiba suas informações. 📖✍️📅


// Crie uma classe chamada "Retângulo" com os atributos largura e altura. Adicione um construtor para inicializar esses atributos. Implemente um método para calcular a área do retângulo. Crie objetos de retângulos com diferentes dimensões e exiba suas áreas. 🟩📏

// Desenvolva uma classe chamada "Aluno" com os atributos nome, matrícula e lista de notas. Implemente um construtor para inicializar os atributos e um método para calcular a média das notas do aluno. Crie objetos de alunos e calcule suas médias. 🎓📊

// Crie uma classe chamada "Triângulo" com os atributos lado1, lado2 e lado3. Adicione um construtor para inicializar esses atributos. Implemente um método para verificar se os lados formam um triângulo válido (a soma de dois lados deve ser maior que o terceiro) e outro método para calcular a área do triângulo. Teste com diferentes conjuntos de lados. 📐🔍

// Crie uma classe chamada "Produto" com os atributos nome, preço e quantidade em estoque. Implemente um construtor para inicializar esses atributos e métodos para calcular o valor total em estoque e para adicionar ou remover unidades do estoque. Crie objetos de produtos e teste os métodos. 🛒💰

// Desenvolva uma classe chamada "Funcionário" com os atributos nome, cargo e salário. Adicione um construtor para inicializar esses atributos. Implemente um método para aumentar o salário de um funcionário em uma determinada porcentagem. Crie objetos de funcionários e teste o método de aumento de salário. 👨‍💼💼📈

// Crie uma classe chamada "Animal" com os atributos nome, espécie e idade. Implemente um construtor para esta classe. Crie objetos de animais e exiba suas informações. 🐶🐱🦁

// Crie uma classe chamada "Casa" com os atributos endereço, número de quartos e área em metros quadrados. Adicione um construtor para inicializar esses atributos. Crie objetos de casas e imprima seus detalhes. 🏠🛏️📐

// Desenvolva uma classe chamada "ContaCorrente" com os atributos número da conta, saldo e nome do titular. Implemente um construtor para esta classe. Crie métodos para depositar e sacar dinheiro da conta. Teste esses métodos em objetos de conta corrente. 💳💵🏦

// Crie uma classe chamada "TriânguloRetângulo" com os atributos base e altura. Adicione um construtor para inicializar esses atributos. Implemente um método para calcular a hipotenusa do triângulo (Teorema de Pitágoras). Crie objetos de triângulos retângulos e calcule suas hipotenusas. 📐🔍

// Crie uma classe chamada "Jogo" com os atributos nome, gênero e classificação etária. Implemente um construtor para esta classe. Crie objetos de jogos e exiba suas informações. 🎮🕹️📢

// Defina uma classe chamada "Funcionário" com os atributos nome, cargo e salário. Adicione um construtor para inicializar esses atributos. Implemente um método para calcular o salário anual do funcionário (salário mensal multiplicado por 12). Crie objetos de funcionários e calcule seus salários anuais. 👩‍💼💰🗓️

// Crie uma classe chamada "Cafeteira" com os atributos marca, capacidade e quantidade de café. Implemente um construtor para inicializar esses atributos. Crie métodos para encher a cafeteira de café e para fazer uma xícara de café. Teste esses métodos em objetos de cafeteira. ☕💼

// Crie uma classe chamada "Celular" com os atributos marca, modelo e armazenamento interno. Implemente um construtor para esta classe. Crie métodos para adicionar aplicativos ao celular e verificar o espaço disponível. Crie objetos de celulares e teste os métodos. 📱📥💾

// Desenvolva uma classe chamada "Aluno" com os atributos nome, matrícula e lista de disciplinas. Implemente um construtor para inicializar esses atributos e métodos para adicionar disciplinas ao aluno e calcular a média geral. Crie objetos de alunos e teste os métodos. 🎓📚📊

// Crie uma classe chamada "Biblioteca" com os atributos nome, endereço e lista de livros disponíveis. Adicione um construtor para inicializar esses atributos e métodos para adicionar e emprestar livros. Crie objetos de bibliotecas e teste os métodos. 📚🏢📖

// Defina uma classe chamada "ProdutoEletrônico" com os atributos nome, preço e garantia em meses. Implemente um construtor para esta classe. Crie um método para verificar se o produto está na garantia com base na quantidade de meses desde a compra. Crie objetos de produtos eletrônicos e teste o método. 💻🔌🛡️

// Crie uma classe chamada "Hotel" com os atributos nome, localização e lista de quartos. Implemente um construtor para inicializar esses atributos e métodos para reservar quartos e verificar a disponibilidade. Crie objetos de hotéis e teste os métodos. 🏨🌆🛏️

// Desenvolva uma classe chamada "ContaPoupança" com os atributos número da conta, saldo e taxa de juros anual. Adicione um construtor para inicializar esses atributos. Crie métodos para calcular os juros mensais e depositar juros na conta. Teste esses métodos em objetos de conta poupança. 💰🏦📈

// Crie uma classe chamada "Calendário" com os atributos dia, mês e ano. Implemente um construtor para esta classe. Crie um método para verificar se uma data é válida (levando em consideração os meses com diferentes números de dias). Crie objetos de calendário e teste o método. 📆📅📮

// Defina uma classe chamada "Cachorro" com os atributos nome, raça e idade. Implemente um construtor para esta classe. Crie um método para latir (exibir uma mensagem de latido) e outro método para calcular a idade humana do cachorro com base na idade real. Crie objetos de cachorros e teste os métodos. 🐕🗣️🐶

// Crie uma classe chamada "ProdutoAlimentício" com os atributos nome, preço e data de validade. Implemente um construtor para esta classe. Crie um método para verificar se o produto está vencido com base na data atual. Crie objetos de produtos alimentícios e teste o método. 🥖🏷️📅

// Desenvolva uma classe chamada "Relógio" com os atributos hora, minuto e segundo. Implemente um construtor para esta classe. Crie métodos para ajustar o relógio, adicionar um segundo e exibir a hora atual. Crie objetos de relógio e teste os métodos. ⏰🕰️🕒

// Crie uma classe chamada "CarroEsportivo" com os atributos marca, modelo, ano e velocidade máxima. Implemente um construtor para esta classe. Crie métodos para acelerar e frear o carro, e para exibir a velocidade atual. Crie objetos de carros esportivos e teste os métodos. 🚗💨🏁

// Crie uma classe chamada "Pessoa" com os atributos nome, idade e profissão. Implemente um construtor para esta classe. Crie um método para saudar outras pessoas com base na profissão da pessoa (por exemplo, "Olá, sou um médico."). Crie objetos de pessoas e teste o método de saudação. 👤👋🎓

// Defina uma classe chamada "Casa" com os atributos endereço, número de quartos e valor. Implemente um construtor para esta classe. Crie um método para calcular o preço por metro quadrado da casa. Crie objetos de casas e teste o método de cálculo de preço. 🏠📐💲

// Crie uma classe chamada "Estudante" com os atributos nome, matrícula e lista de disciplinas. Implemente um construtor para inicializar esses atributos e métodos para adicionar e remover disciplinas do estudante. Crie objetos de estudantes e teste os métodos. 🎓📚📝

// Desenvolva uma classe chamada "Loja" com os atributos nome, endereço e lista de produtos. Implemente um construtor para esta classe. Crie métodos para adicionar produtos à loja e calcular o preço total dos produtos. Crie objetos de lojas e teste os métodos. 🏪🛒💰

// Crie uma classe chamada "Telefone" com os atributos marca, modelo e número de série. Implemente um construtor para esta classe. Crie um método para fazer chamadas telefônicas e outro para enviar mensagens de texto. Crie objetos de telefones e teste os métodos. 📱📞📩

// Crie uma classe chamada "Restaurante" com os atributos nome, tipo de cozinha e lista de pratos do menu. Implemente um construtor para esta classe. Crie métodos para adicionar pratos ao menu e exibir o menu completo. Crie objetos de restaurantes e teste os métodos. 🍽️🍔🍝

// Defina uma classe chamada "Viagem" com os atributos destino, data de partida e data de retorno. Implemente um construtor para esta classe. Crie um método para calcular a duração da viagem em dias. Crie objetos de viagens e teste o método de cálculo de duração. ✈️🗓️🌍

// Crie uma classe chamada "Conta" com os atributos número da conta, saldo e titular da conta. Implemente um construtor para esta classe. Crie um método para verificar se a conta está em débito (saldo negativo) e outro para depositar dinheiro na conta. Crie objetos de contas e teste os métodos. 💳💰🏦

// Desenvolva uma classe chamada "Câmera" com os atributos marca, modelo e resolução. Implemente um construtor para esta classe. Crie métodos para tirar fotos e gravar vídeos. Crie objetos de câmeras e teste os métodos. 📷🎥📸

// Crie uma classe chamada "Escola" com os atributos nome, endereço e lista de alunos matriculados. Implemente um construtor para esta classe. Crie métodos para matricular alunos na escola e exibir a lista de alunos matriculados. Crie objetos de escolas e teste os métodos. 🏫🎓📚

// Crie uma classe chamada "RelatórioFinanceiro" com os atributos mês, ano e lista de despesas. Implemente um construtor para esta classe. Crie métodos para adicionar despesas ao relatório e calcular o total de despesas para um determinado mês e ano. Crie objetos de relatórios financeiros e teste os métodos. 💼💰

