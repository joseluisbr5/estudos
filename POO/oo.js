class Animal {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    info() {
      return `Nome: ${this.nome}, Idade: ${this.idade}`;
    }
  }
  
  class Cachorro extends Animal {
    constructor(nome, idade) {
      super(nome, idade);
    }
  
    emitirSom() {
      return "Au Au!";
    }
  }
  
  class Gato extends Animal {
    constructor(nome, idade) {
      super(nome, idade);
    }
  
    emitirSom() {
      return "Miau!";
    }
  }
  
  const cachorro1 = new Cachorro("Rex", 5);
  const gato1 = new Gato("Mia", 3);
  const cachorro2 = new Cachorro("Buddy", 2);
  
  console.log(cachorro1.info());
  console.log(cachorro1.emitirSom());
  
  console.log(gato1.info());
  console.log(gato1.emitirSom());
  
  console.log(cachorro2.info());
  console.log(cachorro2.emitirSom());
  