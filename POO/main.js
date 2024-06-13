const MeuCarro = {
    modelo: 'Ranger XLT V6',
    fabricante: 'Ford',
    ano: '2024',
    acelerar: function(){
        console.log("vruum");
    }
}

const OutroCarro = {
    modelo: 'Hilux',
    fabricante: 'Toyota',
    ano: 2024,
    acelerar: function(){
        console.log("vruum");
    }
}

function Carro1(modelo, fabricante, ano){
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.ano = ano;
    this.acelerar = function(){
        console.log("acelerar")
    }
}

const MeuCarro2 = new Carro1("Fiesta", "Ford", 2023);
const OutroCarro2 = new Carro1("ferrari ", "ford", 2021);

console.log(MeuCarro2);
console.log(OutroCarro2);

const nome = "jose"
const idade = 20
const maiorDeIdade = true
const conhecimentos = ["html", "css ", "javascript"]

const pessoa = {
    nome: nome,
    idade: idade,
    maiorDeIdade: maiorDeIdade,
    conhecimentos: conhecimentos,
}

console.log(pessoa.nome);
console.log(pessoa ['nome'])

console.log(Object.keys(pessoa).length);
console.log(Object.values(pessoa));