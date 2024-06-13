function Pessoa(nome){
    this.nome = nome;
    this.dizOi = function(){
        console.log(this.nome + "diz olá");
    }
   
    }


function Funcionario(nome, cargo, salario){
    this.cargo = cargo;
    this.salario = salario;

    this.dizCargo = function(){
        console.log("ele é " + this.cargo)
    }
    Pessoa.call(this, nome);
}


const funcionario1 = new Funcionario("Jose ", "Dev", 5000)
const pessoa = new Pessoa("José Luis" )

pessoa.dizOi()
funcionario1.dizCargo()

