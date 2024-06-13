const { setServers } = require("dns");

function Pessoa(nome){ 
    this.nome = nome;
    this.dizOi = function(){
        console.log(this.nome + " diz ola")
    }

}

function Funcionario(nome, cargo, salario){
    this.cargo = cargo
    //this.salario = salario
    let _salario = salario

    this.getSalario = function(){
        return  _salario;
    }

    this.setSalario = function(valor){
        if (typeof valor === 'number'){
            _salario = valor;
        }
    }
    
    this.aumento = function(){
        const novoSalario = _salario * 1.5;
        _salario = novoSalario
       
    }

    this.dizCargo = function(){
        console.log(this.cargo)
    }
    Pessoa.call(this, nome);
}

function Estagiario(nome){
    Funcionario.call(this, nome, "Estagiario", 2000)
    this.aumento = function(){
        const novoSalario = this.getSalario() * 1.07;
        this.setSalario(novoSalario)    
    }
}
function Gerente(nome){
    Funcionario.call(this, nome, "Gerente", 12000)
    this.aumento = function(){
        const novoSalario = this.getSalario() * 1.15;
        this.setSalario(novoSalario)    
    }
}

const funcionario1 = new Funcionario("jose", "dev", 9000)
const funcionario2 = new Estagiario("pedro")
const funcionario3 = new Gerente("Manoes")

funcionario1.aumento()
console.log(funcionario1.getSalario())

funcionario2.aumento()
console.log(funcionario2.getSalario())

funcionario3.aumento()
console.log(funcionario3.getSalario())